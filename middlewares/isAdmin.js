const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Admin = require('../models/student_model/admin_model');
const { config } = dotenv;
config();

const isAdmin = async (req, res, next) => {
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
        
        const admin = await Admin.findOne({ email: req.user.email });

        if (!admin) {
            return res.json({
                success: false,
                message: 'Unauthorized - must be admin role',
            });
        }

        next();
    } catch (error) {
        console.log(error)
    }
}
module.exports = isAdmin