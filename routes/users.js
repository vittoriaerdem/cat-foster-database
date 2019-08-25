var router = require('express').Router();
var fostersCtrl = require('../controllers/fosters');

// GET /fosters
router.get('/fosters', fostersCtrl.index);

// POST /facts
// We will already have access to the logged in foster on
// the server, therefore do not use: /fosters/:id/facts
router.post('/cats', fostersCtrl.addFact);

// DELETE /facts/:id
router.delete('/cats/:id', fostersCtrl.delFact);

module.exports = router;