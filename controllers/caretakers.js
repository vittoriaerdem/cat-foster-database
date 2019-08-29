var Caretaker = require('../models/caretaker');

module.exports = {
  index, 
  show,
  new: newCaretaker,
    // create,
  // addToFoster
};

function index(req, res) {
  Caretaker.find({}, function(err, caretakers) {
    res.render('caretakers/index', { title: 'Caretaker Profile', caretakers, user:req.user});
  });
}

function show(req, res) {
  Caretaker.findById(req.params.id, function(err, caretakers) {
    res.render('caretakers/show', { title: 'Caretakers Details', caretakers, user:req.user});}
  )}


function newCaretaker(req, res) {
  Caretaker.find({}, function (err, caretakers) {
    res.render('caretakers/new', {
      title: 'Add Caretaker',
      caretakers
    });
  })
}


// function addToFoster(req, res) {
//   Cat.findById(req.params.id, function (err, cat) {
//     cat.cast.push(req.body.caretakerId);
//     cat.save(function (err) {
//       res.redirect(`/cats/${cat._id}`);
//     });
//   });
// }