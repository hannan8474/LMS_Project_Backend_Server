const Admin = require("../../models/student_model/admin_model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


const adminLoginController = async (req, res) => {

    const {config} = dotenv;
    config();

    const { email, password } = req.body;

    const existingUser = await Admin.findOne({ email });

    if (!existingUser) {
        return res.json({
            success: false,
            message: 'Admin user not found',
        })
    }
    // if user with the email is found then we'll check the password

    const hashedPassword = existingUser.password;

    // Load hash from your password DB.
    const isPasswordMatched = bcrypt.compareSync(password, hashedPassword);
    if (!isPasswordMatched) {
        return res.json({
            success: false,
            message: 'Incorrect email or password'
        })
    } 

    const authToken = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET);

    return res.json({
        success: true,
        message: 'user logged in successfully',
        authToken,
        existingUser,
    })

}
module.exports = adminLoginController;