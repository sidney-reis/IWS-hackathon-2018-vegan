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

app.get('/listChallenges', async (req, res) => {
  try {
    const challenges = await Challenge.find();
    return res.status(201).send({ challenges });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/bulkChallenges', async (req, res) => {
  try {
    if (!Array.isArray(req.body)) return res.status(400).send('Not an array of challenges');

    const resultsPromise = req.body.map(async challenge => Challenge.create(challenge));
    await Promise.all(resultsPromise);

    return res.status(201).send('Challenges created.');
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/deleteAllChallenges', async (req, res) => {
  try {
    await Challenge.deleteMany({});
    return res.status(201).send('Obliterado.');
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.get('/initialChallenges', async (req, res) => {
  try {
    const challenges = await Challenge.find({ level: 0 }).limit(3);
    return res.status(201).send({ challenges });
  } catch (err) {
    return res.status(500).send(err);
  }
});
