var Cat = require('../models/cat');
var Caretaker = require('../models/caretaker');

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
  {res.render('cats', { title: 'Cat Detail', cats, caretakers, user:req.user});}
}

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
