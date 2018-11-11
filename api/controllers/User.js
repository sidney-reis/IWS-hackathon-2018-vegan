const express = require('express');
const User = require('../models/UserModel');
const Challenge = require('../models/ChallengeModel');

const app = express.Router();
module.exports = app;

app.post('/users', async (req, res) => {
  try {
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
    const user = await User.findById(req.body.userId).populate('ChallengeModel');
    return res.status(201).send({ user });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    }).exec();

    if (user) {
      return res.status(200).send({ userId: user._id });
    }

    return res.status(401).send('Nao show');
  } catch (err) {
    return res.status(500).send(err);
  }
});

const getThreeChallenges = async (user, success) => {
  const newChallenges = [];
  let newLevel;
  if (!user.level) user.level = 0;
  if (user.level === 6) {
    const vegan = await Challenge.findOne({ title: 'Vegan' }).exec();
    newChallenges.push(vegan);

    if (!success) {
      const query = Challenge.find({})
        .where('level', 5)
        .limit(2);

      let result = await query.where('_id').nin(user.completedChallenges).exec();

      if (result.length < 2) {
        result = await query.exec();
      }

      newChallenges.push(result);
    }

    newLevel = user.level;
  } else {
    newLevel = user.completedLevelChallenges === 10 ? user.level + 1 : user.level;
    const query = Challenge.find({})
      .where('_id').nin(user.completedChallenges)
      .where('level')
      .in(newLevel)
      .limit(3);

    const challenges = await query.exec();
    newChallenges.push(challenges);
  }

  return { newChallenges, newLevel };
};

app.post('/results', async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await User.findById(userId);
    const { currentChallenge } = user;
    const userSucceeded = amount === currentChallenge.amount;
    // gerar 3 novas challenges
    const { newChallenges, newUserLevel } = await getThreeChallenges(user, userSucceeded);

    // atualizar level OK
    user.currentLevel = newUserLevel;
    if (userSucceeded) {
      // atualizar completed challenges OK
      user.completedChallenges.push(currentChallenge);
      if (!user.completedLevelChallenges) {
        user.completedChallenges = 0;
      }
      user.completedLevelChallenges += 1;
    }

    await user.save();

    // cospe se foi BOM ou RUIM e novas 3 challenges OK
    return res.status(201).send({ userSucceeded, newChallenges });
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
    if (user.level === 6 && challenge.level !== 6) {
      user.level -= 1;
    }

    await user.save();

    return res.status(201).send();
  } catch (err) {
    return res.status(500).send(err);
  }
});
