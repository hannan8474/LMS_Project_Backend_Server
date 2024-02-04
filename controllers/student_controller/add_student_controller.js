const Student = require("../../models/student_model/new_student");
const Admin = require("../../models/student_model/admin_model");

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