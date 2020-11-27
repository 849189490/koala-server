//用户数据库设计
const mongoose = require('../connect.js')
// const Schema = mongoose.Schema
// let userSchema = new Schema({
//   user: {
//     type: String,
//     required: [true, '请传入姓名'],
//     minlength: [2, '长度不能小于2'],
//     maxlength: [20, '长度不能大于20'],
//     // trim: true, // 去除两侧空白
//     // uppercase: true, // 字段转大写
//     // lowercase: true, // 字段转小写
//     default: 'light',
//   },
//   mail: {
//     type: String,
//     required: [true, '请传入姓名'],
//     trim: true,
//   },
//   age: {
//     type: Number,
//     //自定义验证
//     validate: {
//       validator: v => {
//         return v && v > 15
//       },
//       //自定义错误信息
//       message: '传入的值不符合验证规则',
//     },
//   },
//   //状态   1可用 2不可用
//   status: {
//     type: Number,
//     enum: [1, 2],
//     default: 1,
//   },
// })
let userSchema = mongoose.Schema({
  banners: {
    type: Array,
  },
  tab: {
    type: Array,
  },

  // user: {
  //   type: String,
  //   required: [true, '请传入姓名'],
  //   minlength: [2, '长度不能小于2'],
  //   maxlength: [20, '长度不能大于20'],
  //   // trim: true, // 去除两侧空白
  //   // uppercase: true, // 字段转大写
  //   // lowercase: true, // 字段转小写
  //   default: 'light',
  //   // match: /^a/, // 正则校验
  // },
  // mail: {
  //   type: String,
  //   required: [true, '请传入姓名'],
  //   trim: true,
  // },
  // age: {
  //   type: Number,
  //   //自定义验证
  //   validate: {
  //     validator: v => {
  //       return v && v > 15
  //     },
  //     //自定义错误信息
  //     message: '传入的值不符合验证规则',
  //   },
  // },
  // // // 自定义验证
  // // url: {
  // //   type: String,
  // //   set(parmas) {
  // //     if (!parmas) {
  // //       return ''
  // //     } else {
  // //       if (parmas.indexOf('http://') != 0 && parmas.indexOf('https://') != 0) {
  // //         return 'http://' + parmas
  // //       }
  // //       return parmas
  // //     }
  // //   },
  // // },
  // //状态   1可用 2不可用
  // status: {
  //   type: Number,
  //   enum: [1, 2],
  //   default: 1,
  // },
})

// 将schema对象转化为数据模型
module.exports = mongoose.model('Index', userSchema)
