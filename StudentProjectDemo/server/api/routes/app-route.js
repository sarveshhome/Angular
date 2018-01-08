//'use strict';
module.exports = function(app) {
    var studentController = require('../controllers/student-controller');
    app.route('/student')
        .get(studentController.list_all_student)
        .post(studentController.create_new_student);
    app.route('/student/:studentid')
        .get(studentController.get_student_id)
        .put(studentController.update_student_id)
        .delete(studentController.delete_student_id);
};