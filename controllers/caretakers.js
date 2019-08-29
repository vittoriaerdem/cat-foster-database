var Caretaker = require('../models/caretaker');

module.exports = {
  index, 
  // show,
  new: newCaretaker,
  create,
  // addToFoster
};

function index(req, res) {
  Caretaker.find({}, function(err, Acaretaker) {
    // console.log(caretakers)
    res.render('caretakers/index', {caretaker:Acaretaker , user:req.user});
  });
}

// function show(req, res) {
//   Caretaker.find({}, function(err, caretakers) {
//     let last1 = cats.slice(-1)
//     res.render('/caretakers/index', {caretakers: last1, user: req.user});
//   })
// };


// function newCaretaker(req, res) {
//   Caretaker.find({}, function(err, caretakers){
//   res.render('caretakers/new', { title: 'Add Caretaker', caretakers, user:req.user });
// });
// }

function newCaretaker(req, res) {
  res.render('caretakers/new', {user:req.user})
}


function create(req, res){
  console.log(req.body);
  var newCaretaker = new Caretaker(req.body);
  console.log(newCaretaker);
  newCaretaker.save()
  .then(result => {
    console.log(result)
    res.redirect('/caretakers/index')
  })
  .catch(err => {
    console.error(err)
    res.send(err)
  }) 
}