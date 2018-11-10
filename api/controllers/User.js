const express = require('express');
const User = require('../models/UserModel');

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

const getThreeChallenges = (user) => {

};

app.post('/results', async (req, res) => {
  try {
    const { user, amount } = req.body;
    // atualizar level
    // atualizar completed challenges
    // gerar 3 novas challenges
    getThreeChallenges(user);

    // cospe se foi BOM ou RUIM e novas 3 challenges
  } catch (err) {
    return res.status(500);
  }
});
