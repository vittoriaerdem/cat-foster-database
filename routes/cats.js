var express = require('express');
var router = express.Router();
var catCtrl = require('../controllers/cats');

router.get('/', catCtrl.index)                                   // SHOWS ALL CATS       
router.get('/new', isLoggedIn, catCtrl.new);                     // ADD A NEW CAT TO DATABASE
router.post('/',isLoggedIn, catCtrl.create);                     // UPDATE DATABASE WITH NEW CAT
router.get('/:id',isLoggedIn, catCtrl.show);                     // SHOW DETAILS OF ONE CAT
router.delete('/index/:id', isLoggedIn, catCtrl.delete);         // DELETE A CAT FROM THE DATABASE
// router.post('/:id', isLoggedIn, catCtrl.create);                 // CAT'S HEALTH & SOCIAL HISTORY UPDATES
        
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router; 