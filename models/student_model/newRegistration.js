const mongoose = require('mongoose');

//This is a mongoose schema for a student in MongoDb
const studentRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    hobbies: {
        type: String,
        required: true,
    },
    aboutYourself: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const studentRegistration = mongoose.model('studentSocietyRegistration', studentRegistrationSchema);

module.exports = studentRegistration;
