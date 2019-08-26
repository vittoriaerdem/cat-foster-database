const Foster = require('../models/Foster');

module.exports = {
  index
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Foster.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Foster.find(modelQuery)
  .sort(sortKey).exec(function(err, fosters) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('fosters/index', {
      fosters,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}
