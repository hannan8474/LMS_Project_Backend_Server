const mongoose = require('mongoose');

const dotEnv = require ('dotenv');
const config = dotEnv.config;
config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;

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