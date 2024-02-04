const express = require('express');
const multipartyMiddleware = require('../../middlewares/fileUploadMiddleWare');
const adminLoginController = require('../../controllers/adminControllers/adminLoginController');
const adminSignUpController = require('../../controllers/adminControllers/adminSignUpController');
const authRouter = express.Router();

authRouter.post ("/auth/sign-up", multipartyMiddleware, adminSignUpController);
authRouter.post ("/auth/login", adminLoginController);

module.exports = authRouter;