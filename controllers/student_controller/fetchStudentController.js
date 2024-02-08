const Student = require("../../models/student_model/newStudent");

const fetchStudentsController = async (req, res) => {
    try {
        const loggedInStudentEmail = req.user.email;

        // Retrieve students from the database and populate the 'adminId' field with details from the 'User' model
        const student = await Student.findOne({email: loggedInStudentEmail}).populate('adminId', 'email'); // Adjust 'name' and 'email' based on the fields in your 'User' model
        // Send a JSON response with retrieved students
        return res.json({
            success: true,
            student: student
        });
    } catch (err) {
        return res.json({
            success: false,
            error: err.message
        });
    }
};

module.exports = fetchStudentsController;
