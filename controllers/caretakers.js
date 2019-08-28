var Caretaker = require('../models/caretaker');

module.exports = {
  new: newCaretaker,
  // create,
  index, 
  show
  // addToFoster
};

// function addToFoster(req, res) {
//   Cat.findById(req.params.id, function (err, cat) {
//     cat.cast.push(req.body.caretakerId);
//     cat.save(function (err) {
//       res.redirect(`/cats/${cat._id}`);
//     });
//   });
// }

function index(req, res) {
  Caretaker.find({}, function(err, caretakers) {
    res.render('/caretakers', { title: 'Caretaker Profile', caretakers});
  });
}

function show(req, res) {
  Caretaker.findById(req.params.id)
    .exec(function(err, caretakers) {
      console.log(caretakers);
      res.render('caretakers/show', {
        title: 'Caretakers Details', caretakers
      });
    });
  };



function newCaretaker(req, res) {
  Caretaker.find({}, function (err, caretakers) {
    res.render('caretakers/new', {
      title: 'Add Caretaker',
      caretakers
    });
  })
}