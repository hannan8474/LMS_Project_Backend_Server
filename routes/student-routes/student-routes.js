const express = require('express');
const addStudentController = require('../../controllers/student_controller/addStudentController');
const fetchStudentsController = require('../../controllers/student_controller/fetchStudentController');
const addStudentSocietyRegistrationController = require('../../controllers/student_controller/addStudentSocietyRegistrationController')
const isAdmin = require('../../middlewares/isAdmin');
const isStudent = require('../../middlewares/isStudent');
const multipartyMiddleware = require('../../middlewares/fileUploadMiddleWare');
const deleteStudentSocietyRegistrationController = require('../../controllers/student_controller/deleteStudentSocietyRegistrationController');
const updateStudentSocietyRegistrationController = require('../../controllers/student_controller/updateStudentSocietyRegistrationController');
const studentRouter = express.Router();

// iski admin sy salam dua krwani ha
studentRouter.post('/add-student',
    isAdmin, 
    multipartyMiddleware,
    addStudentController)

studentRouter.get('/requested-student', isStudent, fetchStudentsController)
studentRouter.post('/society-registration-student', addStudentSocietyRegistrationController)

studentRouter.delete('/delete/:id', deleteStudentSocietyRegistrationController)

studentRouter.put('/update/:id', updateStudentSocietyRegistrationController)

module.exports = studentRouter