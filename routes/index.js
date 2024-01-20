const express = require('express')
const studentRouter = require('./student-routes/student-routes')
const router = express.Router()

router.use('/api/v1', studentRouter)

module.exports = router