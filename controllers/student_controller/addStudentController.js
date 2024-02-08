const Student = require("../../models/student_model/newStudent");
const Admin = require("../../models/student_model/adminModel");
const path = require('path')
const fs = require('fs');

const addStudentController = async (req, res) => {
    try {
        //fetch logged in user details
        const loggedInuserEmail = req.user.email
        const loggedInuser = await Admin.findOne({ email: loggedInuserEmail })
        const loggedInUserId = loggedInuser._id
        
        // if user not logged in
        if (!loggedInUserId) {
            return res.json({ message: 'logged in admin not found' })
        }
        // Extracting data from the request body
        const { name, cnic, email, password, rollNumber, batchNumber, shift, semester, subjectNumbers, subjects } = req.body;
        
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.json ({
                success: false, 
                message: "Student already exists"
            })
        }
        const files = await req.files;
        console.log(files)
        const { profileImage } = files; // thunder client

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
        // Creating a new instance of the Student model with the extracted data

        const newStudent = new Student({
            name,
            cnic,
            email,
            password,
            rollNumber,
            batchNumber,
            shift,
            semester,
            subjectNumbers,
            subjects,
            profileImageLink, // db model
            adminId: loggedInUserId,
        });

        // Saving the new student to the database
        await newStudent.save();

        // Sending a JSON response indicating success and returning the new student data
        return res.json({
            success: true,
            data: newStudent
        });
        
        // Handling errors and sending a JSON response indicating failure
    } catch (error) {
        return res.json({
            success: false,
            error: error.message
        });
    }
}
module.exports = addStudentController;