const Student = require("../../models/student_model/newRegistration");

const deleteStudentSocietyRegistrationController = async (req, res) => {
    try {
        const id = req.params.id;

        // first check if student with id exists

        const existingStudent = await Student.findById(id);

        // if student not found

        if (!existingStudent) 
        {
            return res.json({
                success: false,
                message: "Student not found",
            })
        }

        const deletedStudent = await Student.findByIdAndDelete(id);
        return res.json({
            success: true,
            message: "Student deleted successfully",
            deletedStudent: deletedStudent
        })
    } catch (error) {
        console.log (error)
        return res.json({
            success: false,
            error: error
        })
    }
}
module.exports = deleteStudentSocietyRegistrationController