const express = require('express')
// express提供的模块化
const router = express.Router()
router.get('/login', (req, res) => {
  res.send('admin')
})
module.exports = router
