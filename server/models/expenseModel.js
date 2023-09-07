const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    expenseName: String,
    expenseAmount: Number,
    date: {
        type: Date,
        default: Date.now // Set the default date to the current date and time
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

});
module.exports = mongoose.model('Expense', expenseSchema);