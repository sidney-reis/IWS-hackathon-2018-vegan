const mongoose = require('mongoose');
const UserSchema = require('../Schemas/User');

module.exports = mongoose.model('UserModel', UserSchema);
