const express = require('express');
const connectToMongoDB = require('./config/db');
const cors = require('cors');
const router = require('./routes');

const dotEnv = require ('dotenv');
const config = dotEnv.config;

config();

const app = express();
app.use(express.json());

// add middleware to parse form data instead of JSON
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// use a static folder
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
connectToMongoDB();

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is at http://localhost:${PORT}`);
});