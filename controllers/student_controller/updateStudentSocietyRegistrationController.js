const Student = require("../../models/student_model/newRegistration")

const updateStudentSocietyRegistrationController = async (req, res) => {

    try {
        const id = req.params.id;

        const existingStudent = await Student.findById(id);

        if (!existingStudent) {
            return res.json({
                success: false,
                message: "Student not found",
            })
        }

        // If student found update the student

        const { name, rollNumber, email, department, semester, hobbies, aboutYourself } = req.body

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            {
                name, rollNumber, email, department, semester, hobbies, aboutYourself
            },
            {
                new: true
            }
        )
        return res.json({
            success: "true",
            message: "Student updated successfully",
            updatedStudent: updatedStudent
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message
        })
    }
}
module.exports = updateStudentSocietyRegistrationController