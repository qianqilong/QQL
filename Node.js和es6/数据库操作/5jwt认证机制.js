// session认证机制必须依赖cookie才可以实现，而cookie不可以跨域
// 1.如果前端请求后端接口不存在跨域问题，用seeion认证
// 2.如果要要跨域用jwt认证机制

// jwt最流行的跨域认证解决方案


// jwt工作原理json web token
// 客户端提交信息后生成token，token会保留在客户端浏览器中，客户再次发起请求后会通过请求头发给服务器，服务器通过还原token的值来认证身份

// jwt的组成，header头部，payload有效荷载，signature签名，用.号分隔
// 1.header，signature：是安全保障token的安全性
// 2.payload:正在的加密信息
// 客户端受到服务器返回的jwt后，通常会把他存储在localStorag或者sessionStorage中
// 推荐做法是把jwt放在HTTP请求头的Authorization字段中
// 格式Authorization: Bearer < token >
// 安装npm i jsonwebtoken express-jwt


// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken');//加密
const expressjwt = require('express-jwt');//还原




// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'ithema qql';


// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// app.use(expressjwt({secret:秘钥,algorithms:['HS256']}).unless({path:[正则]}))
// 配置解密中间件后用户名自动存在req.user中(有权限的接口可以读取)
app.use(expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }));


// 登录接口
app.post('/api/login', function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body
  // 登录失败
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 400,
      message: '登录失败！'
    })
  }
  // 登录成功
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
    // jwt.sign({username:用户名}},秘钥,{expiresIn:时间})
    // 密码不要加密在这里,
 const tokenstr=   jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' });//加密

  res.send({
    status: 200,
    message: '登录成功！',
    token:  tokenstr// 要发送给客户端的 token 字符串
  })
})

// 这是一个有权限的 API 接口
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
    console.log(req.user);
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user // 要发送给客户端的用户信息
  })
})

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误(过期)
// 注册错误中间件
app.use((err, req, res, next) => {
    //这次错误是由token解析失败导致
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message:'无效的token'
        })
    }
    res.send({
        status: 500,
        message:'未知的错误'
    })
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, function () {
  console.log('Express server running at http://127.0.0.1:8888')
})
