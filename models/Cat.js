var mongoose = require('mongoose');


var catSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    },
    age: {
        type: Number, 
        min: 0, 
        required: true, 
    },
    sex: {
        type: String, 
        enum: ['male', 'female'],
        required: true, 
    },  
    weight: {
        type: Number, 
        min: 0, 
        required: true, 
    },
    fiv: {
        type: String, 
        enum: ['yes, positive', 'no, negative'],
        required: true, 
    },
    location: {
        type: String, 
        enum: ['North Austin', 'South Austin', 'East Austin', 'West Austin'],
        required: true, 
    }});
  
  module.exports = mongoose.model('Cat', catSchema);