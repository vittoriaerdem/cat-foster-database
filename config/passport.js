var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Caretaker = require('../models/caretaker');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Caretaker.findOne({ 'googleId': profile.id }, function(err, caretaker) {
      if (err) return cb(err);
      if (caretaker) {
        return cb(null, caretaker);
      } else {
        // we have a new Caretaker via OAuth!
        var newCaretaker = new Caretaker({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newCaretaker.save(function(err) {
          if (err) return cb(err);
          return cb(null, newCaretaker);
        });
      }
    });
  }
));

passport.serializeUser(function(caretaker, done) {
    done(null, caretaker.id);
});

passport.deserializeUser(function(id, done) {
    Caretaker.findById(id, function(err, caretaker) {
      done(err, caretaker);
    });
  });