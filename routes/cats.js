var express = require('express');
var router = express.Router();
var catCtrl = require('../controllers/cats');

router.get('/cats', catCtrl.index);             // SHOWS ALL CATS
router.get('/cats/new', catCtrl.new);          // ADD A NEW CAT TO DATABASE
router.post('/cats', catCtrl.create);          // UPDATE DATABASE WITH NEW CAT
router.get('cats/:id', catCtrl.show);          // SHOW DETAILS OF ONE CAT

module.exports = router;


