const Student = require("../../models/student_model/new_student");

const addStudentController = async (req, res) => {
    try {
        // Extracting data from the request body
        const { studentName, studentCnic, email, password, rollNumber, batchNumber, shift, semester, subjectNumbers, subjects } = req.body;
        // Creating a new instance of the Student model with the extracted data
        const newStudent = new Student({
            studentName,
            studentCnic,
            email,
            password,
            rollNumber,
            batchNumber,
            shift,
            semester,
            subjectNumbers,
            subjects,
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