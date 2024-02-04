const Admin = require('../../models/student_model/admin_model');
const path = require('path')
const fs = require('fs');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { config } = dotenv;
config(); 

const adminSignUpController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Admin.findOne({ email });

        if (existingUser) {
            return res.json({
                success: false,
                message: "User with this email already exists",
            })
        }

        const files = await req.files;
        const { profileImage } = files;

        // Create a dynamic URL based on server's protocol, host, and port
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        // Create a unique filename based on original filename, current date, and field name
        const currentDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
        const uniqueFileName = `${profileImage.fieldName}_${currentDate}_${profileImage.originalFilename}`;

        // Save the file with the unique filename
        const savedFilePath = path.join(__dirname, '../../public', uniqueFileName);

        // now rename the saved file with <uniqueFileName>
        // Rename the file to the unique filename
        fs.renameSync(profileImage.path, savedFilePath);

        // product image file link
        const profileImageLink = `${baseUrl}/${uniqueFileName}`;

        const SALT_ROUNDS = +process.env.SALT_ROUNDS;
        //+ is a shorthand of parseint
        
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
            profileImageLink,
        })
        await newAdmin.save();
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
