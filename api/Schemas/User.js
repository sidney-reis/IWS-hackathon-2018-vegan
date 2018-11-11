const mongoose = require('mongoose');

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
    default: 0,
  },
  currentLevel: {
    type: Number,
    default: 0,
  },
  currentChallenge: {
    type: { type: Schema.Types.ObjectId, ref: 'ChallengeModel' },
  },
  completedChallenges: {
    type: [{ type: Schema.Types.ObjectId, ref: 'ChallengeModel' }],
  },
});

module.exports = UserSchema;
