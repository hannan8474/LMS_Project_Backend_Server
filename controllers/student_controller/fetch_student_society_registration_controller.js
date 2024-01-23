const studentSocietyRegistration = require("../../models/student_model/new_registration")

const fetchStudentSocietyRegistrationController = async (req, res) => {
    try {
        // Retrieve students from database
        const newStudentSocietyRegistration = await studentSocietyRegistration.find()
        // Send a json response with retrieved students
        return res.json({
            success: true,
            newStudentSocietyRegistration: newStudentSocietyRegistration
        })
    } catch (err) {
        return res.json({
            success: false,
            error: err.message
        });
    }
}
module.exports = fetchStudentSocietyRegistrationController