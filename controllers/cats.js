var Cat = require('../models/cat');

module.exports = {
  home, 
  index,
  show,
  new: newCat,
  create,
  delete: deleteCat,
  update
};

function home(req, res) {
  Cat.find({}, function(err, cats) {
    res.render('index', { title: 'Home', cats, user:req.user});
  });
}

function index(req, res) {
  Cat.find({}, function(err, cats) {
    res.render('cats/index', { title: 'All Cats', cats, user:req.user});
  });
}

// function index(req, res) {
//   Cat.find({})
//   .then(cats => {
//     let last3 = cats.slice(-3)
//       res.render('cats/index', { title: 'All Cats', cats, cats: last3, user:req.user})
// })
//   .catch(err => {
//       res.send(err)
//   })}

// router.get('/', function(req, res) {
//   Cat.find({}, function(err, cats)
//   { 
//     let last3 = cats.slice(-3)
//     res.render('index', {cats: last3, user: req.user});
//   })



function show(req, res) {
  Cat.findById(req.params.id, function(err, cats) {
    res.render('cats/show', { title: 'One Cat', cats, user:req.user});}
  )}

function newCat(req, res) {
  res.render('cats/new', { title: 'Add Cat', user:req.user });
}

function deleteCat(req, res) {
  Cat.findByIdAndRemove(req.params.id, function(err){
  Cat.remove();
  });
  res.redirect('/cats');
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

function update(req, res) {
  Cat.findById(req.params.id, function(err, cat) {
    cat.updates.push(req.body);
    cat.save(function(err) {
      res.redirect(`/cats/${cat._id}`);
    });
  });
}