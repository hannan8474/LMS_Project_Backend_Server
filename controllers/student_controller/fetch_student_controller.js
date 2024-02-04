const Student = require("../../models/student_model/new_student");

const fetchStudentsController = async (req, res) => {
    try {
        // Retrieve students from the database and populate the 'adminId' field with details from the 'User' model
        const students = await Student.find().populate('adminId', 'name email'); // Adjust 'name' and 'email' based on the fields in your 'User' model

        // Send a JSON response with retrieved students
        return res.json({
            success: true,
            students: students
        });
    } catch (err) {
        return res.json({
            success: false,
            error: err.message
        });
    }
};

module.exports = fetchStudentsController;
