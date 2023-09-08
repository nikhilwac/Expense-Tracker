const mongoose = require('mongoose');

module.exports.User = mongoose.model('User', {
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  
});
