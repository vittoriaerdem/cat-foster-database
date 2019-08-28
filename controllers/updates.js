var Cat = require('../models/cat');

module.exports = {
  create
};

function create(req, res) {
  Cat.findById(req.params.id, function(err, cat) {
    cat.updates.push(req.body);
    cat.save(function(err) {
      res.redirect(`/cats/${cat._id}`);
    });
  });
}