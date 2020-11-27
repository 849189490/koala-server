const mongoose = require('../connect.js')
// http://www.qigexiaoairen.cn:3001/index/cart/
let cartSchema = mongoose.Schema({
  // 商品id, 名字, 图片，价格，评价数, 产地
  //id,name,img,price,judgeNum,origin
  // 用户
  user: {
    type: String,
  },
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: String,
  },
  // 数量
  sum: {
    type: Number,
  },
})

// 将schema对象转化为数据模型
module.exports = mongoose.model('cart', cartSchema)
