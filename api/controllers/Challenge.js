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
    await Challenge.find({ level: 0 }).limit(3);
    return res.status(201);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/');
