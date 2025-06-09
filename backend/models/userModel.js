const mongoose = require('mongoose');
const eventSchema = require('./Event');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String }, // No requerido para OAuth
  photoUrl:  { type: String },
  role:      { type: String, enum: ['admin', 'user'], default: 'user' },
  provider:  { type: String, enum: ['local', 'google', 'github'], default: 'local' },
  events:    [eventSchema],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);