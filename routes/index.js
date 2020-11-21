const express = require('express')
// express提供的模块化
const router = express.Router()

const main = require('./index/main')

router.use('/main', main)

module.exports = router
