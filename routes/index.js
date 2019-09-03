var router = require('express').Router();
var passport = require('passport');
var Cat = require('../models/cat');
var catCtrl = require('../controllers/cats');

// The root route renders our only view
router.get('/', catCtrl.home);

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
