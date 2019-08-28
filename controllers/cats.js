var Cat = require('../models/cat');

module.exports = {
  index,
  show,
  new: newCat,
};

function index(req, res) {
  Cat.find({}, function(err, cats) {
    res.render('/cats', { title: 'All Cats', cats});
  });
}

function show(req, res) {
  Cat.findById(req.params.id)
    .exec(function(err, cats) {
      console.log(cats);
      res.render('cats/show', {
        title: 'Cat Details', cats
      });
    });
  };

function newCat(req, res) {
  res.render('cats/new', { title: 'Add Cat' });
}