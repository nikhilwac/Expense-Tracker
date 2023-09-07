const Expense = require('../models/expenseModel')


module.exports.getExpense = async function (req, res) {
    try {
        let expenseDetails = await Expense.aggregate([
            {
                $project: {
                    _id: 0,
                    expenseName: '$expenseName',
                    expenseAmount: '$expenseAmount',
                    date: {
                        $dateToString: {
                            format: '%Y-%m-%d',
                            date: '$date',
                        },
                    },
                },
            },
        ])
        console.log(expenseDetails);
        res.render('submit', { expenseDetails });
    }
    catch (error) {
        console.log()`An Error occured fetching data from DB`
    }

}