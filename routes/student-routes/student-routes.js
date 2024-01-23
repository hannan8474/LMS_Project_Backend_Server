const express = require('express');
const addStudentController = require('../../controllers/student_controller/add_student_controller');
const fetchStudentsController = require('../../controllers/student_controller/fetch_student_controller');
const addStudentSocietyRegistrationController = require('../../controllers/student_controller/add_student_society_registration_controller')
const fetchStudentSocietyRegistrationController = require('../../controllers/student_controller/fetch_student_society_registration_controller')
const studentRouter = express.Router();

studentRouter.post('/add-student', addStudentController)
studentRouter.get('/all-students', fetchStudentsController)
studentRouter.post('/society-registration-student', addStudentSocietyRegistrationController)
studentRouter.get('/all-students-society-registration-student', fetchStudentSocietyRegistrationController)

module.exports = studentRouter