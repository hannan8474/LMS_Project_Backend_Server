const Student = require("../../models/student_model/new_student")

const fetchStudentsController = async (req, res) => {
    const students = await Student.find()
    return res.json({
        success: true,
        students: students
    })
}
module.exports = fetchStudentsController