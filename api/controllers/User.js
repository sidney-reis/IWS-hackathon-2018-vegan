const express = require('express');
const User = require('../models/UserModel');
const Challenge = require('../models/ChallengeModel');

const app = express.Router();
module.exports = app;

app.post('/users', async (req, res) => {
  try {
    await User.create({ username: req.body.username, password: req.body.password });
    return res.status(201).send('User created.');
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      return res.status(409).send({ response: 'A user with that username already exists' });
    }

    return res.status(500).send(err);
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.find({
      username: req.body.username,
      password: req.body.password,
    }).exec();
    if (user.length) {
      return res.status(200).send('Show');
    }

    return res.status(401).send('Nao show');
  } catch (err) {
    return res.status(500);
  }
});

const getThreeChallenges = async (user, success) => {
  let proposed = [];
  let newLevel;
  if (user.level === 6) {
    const vegan = await Challenge.findOne({ title: 'Vegan' }).exec();
    proposed.push(vegan);

    if (!success) {
      const query = Challenge.find({})
        .where('level', 5)
        .limit(2);

      let result = await query.where('_id').nin(user.completedChallenges).exec();

      if (result.length < 2) {
        result = await query.exec();
      }

      proposed.push(result);
    }

    newLevel = user.level;
  } else {
    newLevel = user.completedLevelChallenges === 10 ? user.level + 1 : user.level;
    const query = Challenge.find({})
      .where('_id').nin(user.completedChallenges)
      .where('level').in(newLevel)
      .limit(3);

    const challenges = await query.exec();
    proposed.push(challenges)
  }

  return { proposed, newLevel };
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
    return res.status(500);
  }
});
