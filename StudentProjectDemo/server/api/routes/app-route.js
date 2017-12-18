'use strict';

module.exports = function(app) {
    var studentController = require('../controllers/student-controller');
    app.route('/student')
        .get(studentController.list_all_student)
        .post(studentController.create_new_student)
        .put(studentController.update_student)
        .delete(studentController.delete_student)
};