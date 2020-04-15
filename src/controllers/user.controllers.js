const userCtrl = {};
const password = require('passport');
const User = require('../models/User');

userCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup.hbs');
};

userCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = await req.body;
  if (password !== confirm_password) {
    errors.push({ text: 'Password do not match' });
  }
  if (password.length < 4) {
    errors.push({ text: 'Password must be at least 4 characters' });
  }
  if (errors.length > 0) {
    res.render('users/signup.hbs', { errors, name, email });
  } else {
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      req.flash('error_msg', 'The email is already in use.');
      res.redirect('/users/signup');
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'You are registered');
      res.redirect('/users/signin');
    }
  }
};

userCtrl.renderSigninForm = (req, res) => {
  res.render('users/signin.hbs');
};

userCtrl.signin = password.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true,
});

userCtrl.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out now');
  res.redirect('/users/signin');
};

module.exports = userCtrl;
