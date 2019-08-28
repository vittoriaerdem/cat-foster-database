var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    age: {
        type: String, 
        required: true
    },
    sex: {
        type: String, 
        enum: ['Male', 'Female'],
        required: true
    },  
    weight: {
        type: Number, 
        min: 0, 
        required: true
    },
    fiv: {
        type: String, 
        enum: ['Yes, Positive', 'No, Negative'],
        required: true
    },
    location: {
        type: String, 
        enum: ['North Austin', 'South Austin', 'East Austin', 'West Austin'],
        required: true
    }});
  
  module.exports = mongoose.model('Cat', catSchema);