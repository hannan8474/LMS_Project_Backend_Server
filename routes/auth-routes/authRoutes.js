const express = require('express');
const adminLoginController = require('../../controllers/adminControllers/adminLoginController');
const adminSignUpController = require('../../controllers/adminControllers/adminSignUpController');
const studentLoginController = require('../../controllers/student_controller/studentLoginController');
const authRouter = express.Router();

authRouter.post ("/auth/sign-up", adminSignUpController);
authRouter.post ("/auth/login", adminLoginController);
authRouter.post ("/auth/student-login", studentLoginController);

module.exports = authRouter;