const express = require('express')
// express提供的模块化
const router = express.Router()

const main = require('./index/main')
const login = require('./index/login')
const cart = require('./index/cart')

router.use('/main', main)
router.use('/login', login)
router.use('/cart', cart)

module.exports = router
