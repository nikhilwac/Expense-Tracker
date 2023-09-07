const mongoose = require('mongoose')
const Expense = require('../models/expenseModel')
const MONGO_URL = 'mongodb://localhost:27017/expenseDetails'

mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected!'));


module.exports.submitExpense = async function (req, res) {
    const { expenseName, expenseAmount } = req.body;

    try {
        // Create a new expense record
        await Expense.create({
            expenseAmount,
            expenseName
        });

        // Fetch all expense details
        let expenseDetails = await Expense.find();

        // Pass the expenseDetails array to the 'submit.ejs' template
        res.render('submit', { expenseDetails });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting expense');
    }
};


