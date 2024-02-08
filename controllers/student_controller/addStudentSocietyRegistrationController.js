const studentSocietyRegistration = require("../../models/student_model/newRegistration");

const addStudentSocietyRegistrationController = async (req, res) => {
    try {

        // Extracting data from the request body
        const { name, rollNumber, email, department, semester, hobbies, aboutYourself} = req.body;

        // Creating a new instance of the Student model with the extracted data
        const newStudentSocietyRegistration = new studentSocietyRegistration({
            name,
            rollNumber,
            email,
            department,
            semester,
            hobbies,
            aboutYourself,
        });

        // Saving the new student to the database
        await newStudentSocietyRegistration.save();

        // Sending a JSON response indicating success and returning the new student data
        return res.json({
            success: true,
            data: newStudentSocietyRegistration
        });

        // Handling errors and sending a JSON response indicating failure
    } catch (error) {
        return res.json({
            success: false,
            error: error.message
        });
    }
}
module.exports = addStudentSocietyRegistrationController;