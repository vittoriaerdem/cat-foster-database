var router = require('express').Router();
var passport = require('passport');
var Cat = require('../models/cat');

// The root route renders our only view
router.get('/', function(req, res) {
  Cat.find({}, function(err, cats)
  { 
    let last3 = cats.slice(-3)
    res.render('index', {cats: last3, user: req.user});
  })
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/cats',
    failureRedirect : '/cats'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/caretakers');
});

module.exports = router;
