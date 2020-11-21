const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/koala', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
let db = mongoose.connection //数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('数据库连接成功')
})
module.exports = mongoose
