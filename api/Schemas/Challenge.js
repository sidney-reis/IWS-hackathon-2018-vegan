const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChallengeSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  impact: {
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  theme: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
  },
});

module.exports = ChallengeSchema;
