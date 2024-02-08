const Admin = require('../../models/student_model/adminModel');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { config } = dotenv;
config(); 

const adminSignUpController = async (req, res) => {
    try {

        // Extracting data from the requested body
        const { name, email, password } = req.body;

        // Checking if the user exists with this email
        const existingUser = await Admin.findOne({ email });

        // if user with the email exists then return with success: false
        if (existingUser) {
            return res.json({
                success: false,
                message: "User with this email already exists",
            })
        }

        // Making the password hash i.e encryption
        const SALT_ROUNDS = +process.env.SALT_ROUNDS;
        // + is a shorthand of parseint
        
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Creating a new instance of the Admin model with the extracted data
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
        })

        // Saving the new student to the database
        await newAdmin.save();

        // Sending response on successful save
        return res.json({
            success: true,
            admin: newAdmin,
        })
        
    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            error: error.message,
        })
    }
}
module.exports = adminSignUpController
