var express = require('express');
var router = express.Router();
var caretakersCtrl = require('../controllers/caretakers');

router.get('/caretakers', caretakersCtrl.index);           //CARETAKER'S PROFILE W/ GOOGLE SIGNIN INFO
router.get('/caretakers/new', caretakersCtrl.new);         //CHANCE FOR CARETAKER TO REQUEST A CAT
router.post('/cats/:id/caretakers', caretakersCtrl.show);  //SHOW A GENERATED CARE SHEET W/ CAT & CARETAKER'S INFO

module.exports = router;    