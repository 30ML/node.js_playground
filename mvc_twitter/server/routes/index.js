var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', getLogin(req, res, next));
router.get('/signup', getSignUp(req, res));
router.get('/profile', getProfile(req, res, next));

const getLogin = (req, res, next) => {
  res.render('login', { title: 'Login Page', message: req.flash('loginMessage') });
};

const getSignUp = (req, res) => {
  res.render('signup', { title: 'Signup Page', message: req.flash('signupMessage')});
};

const getProfile = (req, res, next) => {
  res.render('profile', { 
    title: 'Profile Page', 
    user: req.user, 
    avatar: gravatar.url(req.user.email, { s: '100', r: 'x', d: 'retro' }, true),
  });
};

module.exports = router;
