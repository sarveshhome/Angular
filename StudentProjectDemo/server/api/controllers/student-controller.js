//'use strict';
var mongoose = require('mongoose');
var Student = mongoose.model('student');

exports.list_all_student = function(req, res) {
    console.log("get all student");
    Student.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        return res.json(result);
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

exports.get_student_id = function(req, res) {
    console.log(req.params.studentid);
    Student.findById(req.params.studentid, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.update_student_id = function(req, res) {
    Student.findOneAndUpdate(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            res.status(500).send(err);
        }
    });
    console.log('update student');
};

exports.delete_student_id = function(req, res) {
    console.log('delete student start');

    Student.findByIdAndRemove({ _id: req.params.studentid }, function(err, student) {
        if (!err) {
            return res.json(student);
        } else {
            console.log(err);
            res.send(err);
        }
        //res.json({ messages: 'successfull deleted' });
    });
};