const Expense = require('../models/expenseModel')


module.exports.getExpense = async function (req, res) {
    let expenseDetails = await Expense.find();
    res.render('submit', { expenseDetails });
}