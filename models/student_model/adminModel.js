const mongoose = require('mongoose');

//This is a mongoose schema for a student in MongoDb
const adminRegistrationSchema = new mongoose.Schema({
    name: {
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
}, {timestamps: true});

const Admin = mongoose.model('Admin', adminRegistrationSchema);

module.exports = Admin;