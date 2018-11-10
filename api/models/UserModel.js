// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const { Schema } = mongoose;

const SomeModelSchema = new Schema({
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
  modifier: {
    type: Number,
  },
  currentChallenge: {
    type: Number, // challenge id
  },
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model('SomeModel', SomeModelSchema);
