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
  Cat.findById(req.params.id)
    .exec(function(err, cats) {
      res.render('cats/show', { title: 'Cat Details', cats, user:req.user});
    });
  };

function newCat(req, res) {
  res.render('cats/new', { title: 'Add Cat' });
}

function create(req, res){
  
}

// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   var movie = new Movie(req.body);
//   movie.save(function(err) {
//     if (err) return res.redirect('/movies/new');
//     // res.redirect('/movies');
//     res.redirect(`/movies/${movie._id}`);
//   });
// }