const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

module.exports.User = mongoose.model('User', {
  username: { type: String, unique: true },
  password: String,
  
});
