const express = require('express')
const studentRouter = require('./students-routes/students-routes')
const router = express.Router()

router.use('/api/v1', studentRouter)

module.exports = router