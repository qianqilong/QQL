// 安装cors中间件 npm i cors
//导入中间件
//路由之前调用app.use(cors());


//cors()是由一系列http响应头就可以实现跨域
// 注意事项
// 1.在服务器端进行cors配置
// 2.只有支持xmlhttprequest level2的浏览器才可以正常访问开启了cors的服务器接口


// cors中的响应头
// 1.Accrss-Control-Allow-origin:<origin>|* 让服务器接收哪些请求 *(全部客户端)
// 2.默认cors只让客户端发送9个请求头，超过请求头数就会失败
// (如果发起额外请求，则需要在服务端通过Access - Control - Allow - Headers) res.setHead(Access - Control - Allow - Headers, Content - Type, 具体响应头)
// 3.如果希望客户端通过PUT,DELETE等请求方法请求服务器，要通过Access - Control - Allow-Methods
// res.setHead('Access - Control - Allow-Methods','*')

// 简单请求
// 1.请求方式：get, post, head三者之一
// 2.http头部信息不超过几个字段：无自定义头,Accept,Accept-Languaage,DPR,Downlink,Save-Date,Viewport-innerWidth,Width,Content-TypeError(只有三个值)

// 预简请求
// 1.请求方式：get, post, head三者之外的Method类型
// 2.请求头中包含了自定义字段
// 3.向服务器发送了application/json格式的数据
// 服务器与客户端通信前浏览器会先发送OPTION进行预检，服务器响应后才可以发送真实数据

// 两者区别
// 1.简单请求只有一次，预检请求两次
const express = require('express');
const app = express();





//路由之前调用app.use(cors());
const cors = require('cors');
app.use(cors());






//导入路由模块
const router = require('./2路由模块');
// const { json } = require('body-parser')
//保证可读取到参数
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

router.get('/get', (req, res) => {
    const query = req.query;//获取查询字符串
    res.send({
        status: 0,//0成功 1失败
        msg: 'GET请求成功',//状态描述
        data:query//响应给客户端的数据
    })
})



router.post('/post', (req, res) => {
    const body = req.body;//获取客户端发送的数据
    res.send({
        status: 0,//0成功 1失败
        msg: 'POST请求成功',//状态描述
        data:body//响应给客户端的数据
    })
})

//定义delete接口
router.delete('/delete', (req, res) => {
    res.send({
        msg:'DELETE请求成功'
    })
})
app.listen(80, () => {
    console.log('http://127.0.0.1');
})