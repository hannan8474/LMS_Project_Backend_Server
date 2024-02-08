const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Student = require('../models/student_model/newStudent');
const { config } = dotenv;
config();

const isStudent = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7);
    } else {
        return res.send('Token not found or improperly formatted');
    }

    const tokenSecret = process.env.JWT_SECRET

    try {
        const decoded = jwt.verify(token, tokenSecret)
        req.user = decoded;
        // console.log(decoded); // { email: 'salman7@gmail.com', iat: 1698518113 }
        
        const student = await Student.findOne({ email: req.user.email });

        if (!student) {
            return res.json({
                success: false,
                message: 'Unauthorized - must be student role',
            });
        }

        next();
    } catch (error) {
        console.log(error)
    }
}
module.exports = isStudent