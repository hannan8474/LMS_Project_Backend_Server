const Admin = require("../../models/student_model/adminModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


const adminLoginController = async (req, res) => {

    const {config} = dotenv;
    config();

    // Extracting data from the requested body
    const { email, password } = req.body;

    // Making a request to find if the student with this email exists
    const existingAdmin = await Admin.findOne({ email });

    // if the student with this email doesn't exists then return with success: false
    if (!existingAdmin) {
        return res.json({
            success: false,
            message: 'Admin not found',
        })
    }

    // if user with the email is found then we'll check the password
    const hashedPassword = existingAdmin.password;

    // Load hash from your password DB.
    const isPasswordMatched = bcrypt.compareSync(password, hashedPassword);
    if (!isPasswordMatched) {
        return res.json({
            success: false,
            message: 'Incorrect email or password'
        })
    } 

    // Generating an authToken if admin successfully logins
    const authToken = jwt.sign({ email: existingAdmin.email }, process.env.JWT_SECRET);

    return res.json({
        success: true,
        message: 'user logged in successfully',
        authToken,
        existingAdmin,
    })

}
module.exports = adminLoginController;