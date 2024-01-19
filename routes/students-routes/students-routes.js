const express = require('express');
const addStudentController = require('../../controllers/student_controller/add_student_controller');
const studentRouter = express.Router();

studentRouter.post('/add-student', addStudentController)

module.exports = studentRouter