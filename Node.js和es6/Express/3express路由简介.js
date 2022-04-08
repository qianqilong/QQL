//客户端的请求与服务器处理函数的映射关系
// express中的路由分为三部分，请求类型，请求url地址，处理函数
const express = require('express');
const app = express()
//app.METHOD(PATH,HANDLER)

// 挂载路由
app.get('/', (req, res) => { res.send('匹配成功get请求') });
app.post('/',(req,res)=>{res.send('匹配成功post请求')})
app.listen(80, () => {
    console.log('http://127.0.0.1/');
})
// 客户端请求到达服务器后，会经过路由的匹配，请求类型和请求url地址必须同时匹配成功
//一般对路由进行模块化
