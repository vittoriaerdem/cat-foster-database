var router = require('express').Router();
var fostersCtrl = require('../controllers/fosters');

// GET /fosters
router.get('/fosters', fostersCtrl.index);

module.exports = router;    