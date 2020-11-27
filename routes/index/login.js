const express = require('express')
// express提供的模块化
const router = express.Router()
// 引入db文件
const LoginModel = require('../../db/model/loginModel.js')
// http://localhost:3001/index/login/add
// http://www.qigexiaoairen.cn:3001/index/login/add
router.post('/', (req, res) => {
  // // 模拟从数据库拿到的数据
  // let title = 'helloejs'
  // // 渲染ejs模板
  // res.render('index', { title })
  let { num, pwd } = req.body
  LoginModel.find({ num, pwd })
    .then(data => {
      if (data.length > 0) {
        res.send({ err: 0, msg: '登录成功', data: data[0] })
      } else {
        res.send({ err: -1, msg: '账号或密码错误' })
      }
    })
    .catch(() => {
      res.send({ err: -2, msg: '查找失败' })
    })
})
router.post('/add', (req, res) => {
  // // 模拟从数据库拿到的数据
  // let title = 'helloejs'
  // // 渲染ejs模板
  // res.render('index', { title })
  let { uname, num, pwd } = req.body
  LoginModel.find({ num })
    .then(res => {
      if (data.length > 0) {
        return LoginModel.insertMany({ uname, num, pwd })
      } else {
        res.send({ err: -1, msg: '账号已存在' })
      }
    })
    .then(() => {
      res.send({ err: 0, msg: '添加成功' })
    })
    .catch(() => {
      res.send({ err: -1, msg: '添加失败' })
    })
})
module.exports = router
