var Cat = require('../models/Cat');

module.exports = {
    index, 
    // show
}

// function show(req, res) {
//   res.render('cats/show', {
//     cats: Cat.getOne(req.params.id),
//   });
// }

function index(req, res) {
  Cat.find({}, function (err, cats){
    res.render('cats/index', {
      cat: cats, 
      user: req.user
    });
  }); 
}