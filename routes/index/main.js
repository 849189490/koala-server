const express = require('express')
// express提供的模块化
const router = express.Router()
// 引入db文件
const IndexModel = require('../../db/model/indexModel.js')
// http://localhost:3001/index/main/add
router.get('/tab', (req, res) => {
  // // 模拟从数据库拿到的数据
  // let title = 'helloejs'
  // // 渲染ejs模板
  // res.render('index', { title })
  IndexModel.findOne({})
    .then(data => {
      res.send({ err: 0, msg: data })
    })
    .catch(() => {
      res.send({ err: -1, msg: '查找失败' })
    })
})
router.post('/add', (req, res) => {
  // // 模拟从数据库拿到的数据
  // let title = 'helloejs'
  // // 渲染ejs模板
  // res.render('index', { title })
  let { banners, tab } = req.body
  IndexModel.insertMany({ banners, tab })
    .then(() => {
      res.send({ err: 0, msg: '添加成功' })
    })
    .catch(() => {
      res.send({ err: -1, msg: '添加失败' })
    })
})
module.exports = router
