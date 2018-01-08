//'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studnetSchema = new Schema({
    name: String,
    class: String,
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    address: String
});

module.exports = mongoose.model('student', studnetSchema);