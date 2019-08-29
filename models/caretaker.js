var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var caretakersSchema = new Schema({
  name: String,
  dob: Date,
  address: String,
  email: String,
  dogs: String,
  cats: String,
  photo: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Caretaker', caretakersSchema);