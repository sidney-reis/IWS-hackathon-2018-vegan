const mongoose = require('mongoose');
const UserSchema = require('../Schemas/User');

module.exports = mongoose.model('SomeModel', UserSchema);
