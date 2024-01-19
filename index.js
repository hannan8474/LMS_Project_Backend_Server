const express = require('express');
const connectToMongoDB = require('./config/db');
const addStudentController = require('./controllers/student_controller/add_student_controller');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(cors())

const port = 3000;
connectToMongoDB();

app.get('/', (req, res) => {
    res.send(`<h1> Hello, World! </h1>`);
});

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is at http://localhost:${port}`);
});