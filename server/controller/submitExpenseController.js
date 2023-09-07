const { connect } = require('mongoose') 
const { create } = require('../models/expenseModel') 
const MONGO_URL = 'mongodb://localhost:27017/expenseDetails'

connect(MONGO_URL)
    .then(() => console.log('Connected!'));


module.exports.submitExpense = async function (req, res) {
    const { expenseName, expenseAmount } = req.body;
    try {
        await create({
            expenseAmount,
            expenseName
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting expense');
    }
}


