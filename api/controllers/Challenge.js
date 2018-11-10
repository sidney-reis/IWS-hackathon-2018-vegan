const express = require('express');
const Challenge = require('../models/ChallengeModel');

const app = express.Router();
module.exports = app;

app.post('/challenges', async (req, res) => {
  try {
    await Challenge.create(req.body);
    return res.status(201).send('Challenge created.');
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.get('/initialChallenges', async (req, res) => {
  try {
    // TODO: retornar 3 challenges inicias
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/');

// app.post('/login', async (req, res) => {
//   try {
//     const user = await User.find({
//       username: req.body.username,
//       password: req.body.password,
//     }).exec();
//     if (user.length) {
//       return res.status(200).send('Show');
//     }

//     return res.status(401).send('Nao show');
//   } catch (err) {
//     return res.status(500);
//   }
// });
