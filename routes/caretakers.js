var express = require('express');
var router = express.Router();
var caretakersCtrl = require('../controllers/caretakers');

router.get('/index', caretakersCtrl.index);           //CARETAKER'S PROFILE W/ GOOGLE SIGNIN INFO
router.get('/new', caretakersCtrl.new);         //CHANCE FOR CARETAKER TO REQUEST A CAT
router.post('/:id', caretakersCtrl.show);  //SHOW A GENERATED CARE SHEET W/ CAT & CARETAKER'S INFO

module.exports = router;    