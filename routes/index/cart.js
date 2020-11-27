const express = require('express')
// express提供的模块化
const router = express.Router()
// 引入db文件
const CartModel = require('../../db/model/cartModel.js')
// http://localhost:3001/index/login/add
// http://www.qigexiaoairen.cn:3001/index/login
router.post('/', (req, res) => {
  // // 模拟从数据库拿到的数据
  // let title = 'helloejs'
  // // 渲染ejs模板
  // res.render('index', { title })
  let { user } = req.body
  CartModel.find({ user })
    .then(data => {
      if (data.length > 0) {
        res.send({ err: 0, data })
      } else {
        res.send({ err: -1, msg: '查询失败' })
      }
    })
    .catch(() => {
      res.send({ err: -2, msg: '查询失败' })
    })
})
router.post('/add', (req, res) => {
  let { user, id, name, img, price, sum } = req.body
  CartModel.find({ user, id })
    .then(data => {
      console.log(data)
      if (data.length > 0) {
        return CartModel.updateOne({ user, id }, { $set: { sum } })
      } else {
        return CartModel.insertMany({ user, id, name, img, price, sum })
      }
    })
    .then(() => {
      res.send({ err: 0, msg: '更新成功' })
    })
    .catch(() => {
      res.send({ err: -1, msg: '更新失败' })
    })
})
router.post('/del', (req, res) => {
  let { id } = req.body
  CartModel.deleteOne({ id }).then(data => {
    res.send({err:0,msg:'删除成功'})
  }).catch( err => {
		res.send({err: -2,msg: '删除失败'})
	})
})
module.exports = router
