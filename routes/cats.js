var express = require('express');
var router = express.Router();
var catCtrl = require('../controllers/cats');

router.get('/cats', catCtrl.index);
// router.get('/:id', catCtrl.show);

module.exports = router;