const mongoose = require('mongoose');

//This is a mongoose schema for a student in MongoDb
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
    password: {
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
}, {timestamps: true});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;