const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    studentCnic: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: String,
        required: true,
    },
    batchNumber: {
        type: String,
        required: true,
    },
    shift: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    subjectNumbers: {
        type: Number,
        required: true,
    },
    subjects: [Object],
});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;