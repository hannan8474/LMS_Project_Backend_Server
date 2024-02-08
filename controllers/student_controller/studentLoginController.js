const Student = require("../../models/student_model/newStudent.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


const studentLoginController = async (req, res) => {

    const { config } = dotenv;
    config();

    // Extracting data from the request body
    const { email, password } = req.body;

    // Making a request to find if the student with this email exists
    const existingUser = await Student.findOne({ email });

    // if the student with this email doesn't exists then return with success: false
    if (!existingUser) {
        return res.json({
            success: false,
            message: 'Student not found',
        })
    }

    // If the student with the above email exists but the password is not the same then also return with success: false
    if (existingUser.password !== password) {
        return res.json({
            success: false,
            message: 'Incorrect email or password'
        })
    }

    // Generating an authToken if student successfully logins
    const authToken = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET);

    return res.json({
        success: true,
        message: 'user logged in successfully',
        authToken,
        existingUser,
    })

}
module.exports = studentLoginController;