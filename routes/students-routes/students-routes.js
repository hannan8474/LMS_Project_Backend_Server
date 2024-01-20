const express = require('express');
const addStudentController = require('../../controllers/student_controller/add_student_controller');
const fetchStudentsController = require('../../controllers/student_controller/fetch-students-controller');
const studentRouter = express.Router();

studentRouter.post('/add-student', addStudentController)
studentRouter.get('/all-students', fetchStudentsController)

module.exports = studentRouter