'use strict';

var mongoose = require('mongoose');
Student = mongoose.model('student');

exports.list_all_student = function(req, res) {
    console.log("get all student");
    Student.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};