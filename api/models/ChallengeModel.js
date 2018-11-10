const mongoose = require('mongoose');
const ChallengeSchema = require('../Schemas/Challenge');

module.exports = mongoose.model('ChallengeModel', ChallengeSchema);
