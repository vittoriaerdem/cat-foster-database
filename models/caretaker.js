var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var caretakerSchema = new Schema({
  name: String,
  DOB: Date,
  email: String,
  address: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Care Faker', caretakerSchema);