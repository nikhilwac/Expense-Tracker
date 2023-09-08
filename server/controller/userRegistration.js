
const {User} = require('../models/userModel')
const bcrypt = require('bcrypt');


module.exports.userRegistration = async function(req,res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email
        });
        await user.save();
        res.status(200).send('Registration successful');
    } catch (error) {
      console.error('Registration Failed', error.message);
      res.status(500).send('Registration Failed');
    }
}