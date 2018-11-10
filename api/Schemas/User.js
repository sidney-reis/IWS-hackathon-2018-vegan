const mongoose = require('mongoose');
const ChallengeSchema = require('./Challenge');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  completedLevelChallenges: {
    type: Number,
  },
  currentLevel: {
    type: Number,
  },
  currentChallenge: {
    type: ChallengeSchema,
  },
  completedChallenges: {
    type: [ChallengeSchema],
  },
});

module.exports = UserSchema;
