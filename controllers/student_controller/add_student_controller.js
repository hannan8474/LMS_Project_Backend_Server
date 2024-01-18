const Student = require("../../models/student_model/new_student");

const addStudentController = async (req, res) => {
    try {
        const { studentName, studentCnic, email, rollNumber, batchNumber, shift, semester, subjectNumbers, subjects} = req.body;
        const newStudent = new Student({
            studentName,
            studentCnic, 
            email,
            rollNumber,
            batchNumber,
            shift, 
            semester, 
            subjectNumbers,
            subjects,
        });
        await newStudent.save();
        return res.json({
            success: true,
            data: newStudent
        });
    } catch (error) {
        return res.json({
            success: false,
            error: error.message
        });
    }
}
module.exports = addStudentController;