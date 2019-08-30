var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var updateSchema = new Schema({
    date: Date,
    update: String
});

var catSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    years: {
        type: String, 
        required: true
    },
    months: {
        type: String, 
        required: true
    },
    sex: {
        type: String, 
        enum: ['Male', 'Female'],
        required: true
    },  
    bio: {
        type: String, 
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
    felv: {
        type: String, 
        enum: ['Yes, Positive', 'No, Negative'],
        required: true
    },
    location: {
        type: String, 
        enum: ['North Austin', 'South Austin', 'East Austin', 'West Austin'],
        required: true
    },
    dog: {
        type: String, 
        enum: ['Yes', 'No'],
        required: true
    }, 
    cat: {
        type: String, 
        enum: ['Yes', 'No'],
        required: true
    }, 
    kid: {
        type: String, 
        enum: ['Yes', 'No'],
        required: true
    }, 
    rx: {
        type: String, 
        enum: ['Yes', 'No'],
        required: true
    }, 
    photoOne: {
        type: String,
    },
    photoTwo: {
        type: String,
    },
    photoThree: {
        type: String,
    },
    updates: [updateSchema]
});
  
  module.exports = mongoose.model('Cat', catSchema);