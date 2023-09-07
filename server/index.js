const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

// app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

const app = express()
const port = 3000

const { submitExpense } = require('./controller/submitExpenseController')
const { getExpense } = require('./controller/getExpense')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/home', (req, res) => {
    res.render('index')
})

app.post('/submit', submitExpense);

app.get('/submit', getExpense);

app.post('/expenses', (req, res) => {
    console.log('Expense got');
});


/** User Login Sessions */

app.get('/register', (req, res) => {
    res.render('register');
});


app.post('/register', (req, res) => {
    let details = req.body
    console.log(details);
    res.render('register')
    // const { username, password } = req.body;
    // User.register(new User({ username }), password, (err, user) => {
    //   if (err) {
    //     console.error(err);
    //     return res.render('register');
    //   }
    //   passport.authenticate('local')(req, res, () => {
    //     res.redirect('/');
    //   });
    // });
});

// Login User
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

// Logout User
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

/** */

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/home`);
})


