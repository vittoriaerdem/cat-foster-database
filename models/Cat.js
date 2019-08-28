var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var updateSchema = new Schema({
    update: String, 
    date: Date
});

var catSchema = new Schema({
    photo: {
        type: String,
    },
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
        type: String, 
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
    },
    updates: [updateSchema]
});
  
  module.exports = mongoose.model('Cat', catSchema);