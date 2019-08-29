var express = require('express');
var router = express.Router();
var caretakersCtrl = require('../controllers/caretakers');

router.get('/index', caretakersCtrl.index);      // SHOWS CARETAKER'S PROFILE
router.get('/new', caretakersCtrl.new);          // CREATE A NEW CARETAKER TO DATABASE
router.post('/index', caretakersCtrl.create);    // UPDATE DATABASE WITH NEW CARETAKER
// router.get('/:id', caretakersCtrl.show);         // SHOW DETAILS OF _______

module.exports = router;    
