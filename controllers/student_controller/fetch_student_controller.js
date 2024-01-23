const Student = require("../../models/student_model/new_student")

const fetchStudentsController = async (req, res) => {
    try {
        // Retrieve students from database
        const students = await Student.find()
        // Send a json response with retrieved students
        return res.json({
            success: true,
            students: students
        })
    } catch (err) {
        return res.json({
            success: false,
            error: err.message
        });
    }
}
module.exports = fetchStudentsController