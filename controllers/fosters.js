var Caretaker = require('../models/caretaker');

module.exports = {
  create
};

function create(req, res) {
  Caretaker.findById(req.params.id, function(err, cat) {
    cat.caretakers.push(req.body);
    cat.save(function(err) {
      res.redirect('/cats');
    });
  });
}