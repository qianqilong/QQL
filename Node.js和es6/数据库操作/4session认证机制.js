// http无状态性，是session认证机制的必要前提
// http的无状态性：服务器不会主动保留每次http请求的状态

// 突破http无状态的限制
// Cookie:身份认证的标识
// Cookie是一个由名称，值，其他几个控制cookie有效期，安全性，使用范围的字符串组成

// 不同域名下的cookie相互独立，每当客户发起请求时，会自动把当前域名下未过期的cookie一同发送到服务器(域名独立，4kb限制)
// 客户端第一次请求服务器中你，服务器会以响应头的方式向客户端发送一个身份认证的cookie
// 客户端以后请求服务器会以请求头的方式向客户端发送一个身份认证的cookie

//cookie不具有安全性
//session认证机制



// 1.安装express-session中间件  npm  i express-session
// session中间件的使用
const express = require('express');
const app = express();
//配置session中间件
const session = require('express-session');
app.use(session({
    secret: 'qql',
    resave: false,//固定写法
    saveUninitialized:true//固定写法
}))

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
    req.session.user = req.body;//用户的信息

    req.session.login = true;//用户的登陆状态
    
    
  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
    if (!req.session.login) return res.send({ status: 1, msg: 'fail' })
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,//获取存在session的信息
    })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
    req.session.destroy();//清空session
    res.send({
        status: 0,
        msg: '退出登陆成功',
      
    })

})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})
