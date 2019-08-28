var express = require('express');
var router = express.Router();
var fostersCtrl = require('../controllers/fosters');

// GET /fosters
router.get('/fosters', fostersCtrl.create);

module.exports = router;    