var express = require('express');
var router = express.Router();
var catCtrl = require('../controllers/cats');

router.get('/', catCtrl.index);           // SHOWS ALL CATS
router.get('/new', catCtrl.new);          // ADD A NEW CAT TO DATABASE
router.post('/', catCtrl.create);         // UPDATE DATABASE WITH NEW CAT
router.get('/:id', catCtrl.show);         // SHOW DETAILS OF ONE CAT

module.exports = router;


