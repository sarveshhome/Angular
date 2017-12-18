'use strict';

var mongoose = require('mongoose');
var Student = mongoose.model('student');

exports.list_all_student = function(req, res) {
    console.log("get all student");
    Student.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.create_new_student = function(req, res) {
    console.log('post call');
    var student = new Student(req.body);
    console.log(req.body);
    console.log(JSON.stringify(student));
    student.save(function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.update_student = function(req, res) {
    console.log('update student');
};

exports.delete_student = function(req, res) {
    console.log('delete student');
};