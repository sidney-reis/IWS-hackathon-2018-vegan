const express = require('express');
const User = require('../models/UserModel');
const Challenge = require('../models/ChallengeModel');

const app = express.Router();
module.exports = app;


app.post('/users', async (req, res) => {
  try {
    await User.init();
    const user = await User.create({ username: req.body.username, password: req.body.password });
    return res.status(201).send({ userId: user._id });
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.status(409).send({ response: 'A user with that username already exists' });
    }

    return res.status(500).send(err);
  }
});

app.post('/user', async (req, res) => {
  try {
    const user = await User.findById(req.body.userId)
      .populate('currentChallenge')
      .populate('completedChallenges');
    return res.status(201).send({ user });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/login', async (req, res) => {
  console.log('Received login request: ', req.body);
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    }).populate('currentChallenge').populate('completedChallenges').exec();

    if (user) {
      return res.status(200).send({ user });
    }

    return res.status(401).send('Nao show');
  } catch (err) {
    return res.status(500).send(err);
  }
});

const getThreeChallenges = async (user) => {
  const newChallenges = [];
  let newLevel;
  if (user.currentLevel === 6) {
    const vegan = await Challenge.findOne({ title: 'Vegan' }).exec();
    newChallenges.push(vegan);

    if (!user.lastChallengeSuccess) {
      const query = Challenge.find({})
        .where('level', 5)
        .limit(2);

      let result = await query.where('_id').nin(user.completedChallenges).exec();

      if (result.length < 2) {
        result = await query.exec();
      }

      newChallenges.push(result);
    }

    newLevel = user.currentLevel;
  } else {
    newLevel = user.completedLevelChallenges === 10 ? user.currentLevel + 1 : user.currentLevel;

    const query = Challenge.find({})
      .where('_id').nin(user.completedChallenges)
      .limit(3);

    let challenges = await query.where('level').in(newLevel).exec();

    if (challenges.length === 0) {
      newLevel = user.currentLevel + 1;
      challenges = await query.where('level').in(newLevel).exec();
    }
    newChallenges.push(challenges);
  }

  return { newChallenges, newLevel };
};

app.post('/results', async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await User.findById(userId).populate('currentChallenge').populate('completedChallenges');
    const { currentChallenge } = user;
    const userSucceeded = amount >= currentChallenge.amount;

    user.lastChallengeSuccess = userSucceeded;

    if (userSucceeded) {
      // atualizar completed challenges OK
      const updatedCompletedChallenges = [currentChallenge, ...user.completedChallenges];
      user.completedChallenges = updatedCompletedChallenges;

      if (user.completedLevelChallenges >= 10) {
        user.completedLevelChallenges = 0;
      }
      user.completedLevelChallenges += 1;
    }
    // gerar 3 novas challenges
    const { newChallenges, newUserLevel } = await getThreeChallenges(user);

    // atualizar level OK
    user.currentLevel = newUserLevel;
    user.currentChallenge = null;

    await user.save();

    // cospe se foi BOM ou RUIM e novas 3 challenges OK
    return res.status(201).send({ userSucceeded, newChallenges });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/nextChallenges', async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    const { newChallenges } = await getThreeChallenges(user);

    return res.status(200).send(newChallenges);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/pickChallenge', async (req, res) => {
  try {
    const { userId, challengeId } = req.body;
    const user = await User.findById(userId);
    const challenge = await Challenge.findById(challengeId);

    user.currentChallenge = challenge;
    user.currentChallengeStart = Date.now();
    if (user.currentLevel === 6 && challenge.level !== 6) {
      user.currentLevel -= 1;
    }

    await user.save();

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});
