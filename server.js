// 使用express框架
const express = require('express')
// 使用ejs模板引擎,express集成了ejs引擎
const ejs = require('ejs')
// 使用body-parser处理表单,post提交
const bodyParser = require('body-parser')
// 使用cookie-parser处理缓存
const cookieParser = require('cookie-parser')
// 使用express-session处理缓存
const session = require('express-session')
// 使用connect-mongo 让node与mongoDB建立连接,分布式session
const MongoStore = require('connect-mongo')(session)

// 路由模块化
// 引入外部index模块
const index = require('./routes/index')
// 引入外部api模块
const api = require('./routes/api')
// 引入外部admin模块
const admin = require('./routes/admin')

const cors = require('cors')

const app = express()

//解决跨域问题
app.use(cors())

// 使用body-parser处理表单,post提交s
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 使用cookie处理缓存,传入参数代表加密参数
app.use(cookieParser('coderlie'))

// // 使用express-session处理缓存
// app.use(
//   session({
//     secret: 'coder fly', // 服务器端生成的 session 签名
//     resave: false, //强制保存 session 即使他并没有变化
//     saveUninitialized: true, // 强制将未初始化的 session 存储
//     cookie: {
//       maxAge: 1000 * 60, // cookie保存时间
//       secure: true, // true 表示只有https协议才能访问cookie
//     },
//     rolling: true, // 每次访问时强制设置session
//     store: new MongoStore({
//       // MongoStore提供的与数据库建立连接
//       url: 'mongodb://user12345:foobar@127.0.0.1:27017/mgstore',
//       touchAfter: 24 * 3600, // 不管发起了多少次请求,24小时只重置一次session,除非改变了session
//     }),
//   })
// )

// 设置模板引擎('','后缀')
app.engine('html', ejs.__express)
app.set('view engine', 'html')

// 配置静态目录
app.use('/public', express.static(__dirname + '/public'))
// 挂载Login模块
app.use('/index', index)
app.use('/api', api)
app.use('/admin', admin)

// // ejs实例
// app.get('/', (req, res) => {
//   // 模拟从数据库拿到的数据
//   let title = 'helloejs'
//   // 渲染ejs模板
//   res.render('index', { title })
// })
// // cookie实例
// // domain 配置多个二级域名共享cookie,domain: '.qigexiaoairen.com',
// // singed 是否签名cookie, 若设置为true则需要用res.singedCookies来访问,
// // 被篡改的签名会被浏览器拒绝访问
// // 配置中间件的时候
// app.get('/add', (req, res) => {
//   res.cookie('myname', 'coder', { maxAge: 1000 * 100, signed: true })
//   res.send('hello')
// })
// app.get('/go', (req, res) => {
//   res.send(req.cookies.uname)
// })
// app.get('/pro', (req, res) => {
//   res.send('用户--' + req.signedCookies.myname)
// })

// // session 实例
// app.get('/session', (req, res) => {
//   if (req.session.vname) {
//     res.send(req.session.vname + '已登录')
//     return
//   }
//   res.send('未登录')
// })
// app.get('/sessionlogin', (req, res) => {
//   req.session.vname = 'light'
//   res.send('登录')
// })

// // bodyParser实例
// app.post('/login', (req, res) => {
//   res.send('welcome' + req.body.uname)
// })

app.listen(3001)
