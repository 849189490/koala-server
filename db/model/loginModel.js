const mongoose = require('../connect.js')

let loginSchema = mongoose.Schema({
  uname: {
    type: String,
  },
  num: {
    type: String,
  },
  pwd: {
    type: String,
  },
})

// 将schema对象转化为数据模型
module.exports = mongoose.model('login', loginSchema)
