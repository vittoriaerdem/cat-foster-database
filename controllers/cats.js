var Cat = require('../models/cat');

module.exports = {
  index,
  show,
  new: newCat,
  create
};

function index(req, res) {
  Cat.find({}, function(err, cats) {
    res.render('cats/index', { title: 'All Cats', cats, user:req.user});
  });
}

function show(req, res) {
  Cat.findById(req.params.id, function(err, cats)
  {res.render('cats/show', { title: 'Cat Detail', cats, user:req.user});}
  )}

function newCat(req, res) {
  res.render('cats/new', { title: 'Add Cat', user:req.user });
}

function create(req, res){
  console.log(req.body);
  var newCat = new Cat(req.body);
  console.log(newCat);
  newCat.save()
  .then(result => {
    console.log(result)
    res.redirect('/cats')
  })
  .catch(err => {
    console.error(err)
    res.send(err)
  }) 
}
