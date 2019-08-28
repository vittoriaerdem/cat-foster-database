var express = require('express');
var router = express.Router();
var updatesCtrl = require('../controllers/updates');

router.post('/cats/:id/updates', updatesCtrl.create);    // CAT'S HEALTH & SOCIAL HISTORY UPDATES

module.exports = router;