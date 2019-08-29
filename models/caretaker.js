var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var caretakersSchema = new Schema({
  name: String,
  DOB: Date,
  email: String,
  address: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Caretaker', caretakersSchema);