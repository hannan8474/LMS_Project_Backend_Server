const mongoose = require('mongoose');

const MONGO_DB_URI = "mongodb://127.0.0.1:27017/lms";

const connectToMongoDB = async () => {
    try {
        const response = await mongoose.connect(MONGO_DB_URI);
        if (response)
        {
            console.log("Connected to MongoDB " + MONGO_DB_URI);
        }
        else
        {
            console.log("An error occurred while connecting to MongoDB");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongoDB;