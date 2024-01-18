const mongoose = require ('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentName: String, 
    studentCnic: String,
    email: String,
    rollNumber: String,
    batchNumber: String,
    shift: String,
    semester: String,
    subjectNumbers: Number,
    subjects: Array,
}, {timestamps: true});

const Student = mongoose.model ('student', studentSchema);
module.exports = Student;