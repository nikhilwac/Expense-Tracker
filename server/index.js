const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const port = 3000

const {submitExpense}  = require('./controller/controller')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/submit', submitExpense);

app.post('/expenses', (req, res) => {
    console.log('Expense got');
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})


