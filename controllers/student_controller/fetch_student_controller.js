const Student = require("../../models/student_model/new_student")

const fetchStudentsController = async (req, res) => {
    // Retrieve students from database
    const students = await Student.find()
    // Send a json response with retrieved students
    return res.json({
        success: true,
        students: students
    })
}
module.exports = fetchStudentsController