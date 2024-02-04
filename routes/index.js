const express = require('express')
const studentRouter = require('./student-routes/student-routes')
const authRouter = require('./auth-routes/authRoutes')
const router = express.Router()

router.use('/api/v1', studentRouter)
router.use('/api/v1', authRouter)

module.exports = router