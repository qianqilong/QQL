//中间件必须保证有输入和输出
// 本质是function函数function(req,res,next)三个是next()多个中间件连续调用，路由是最后的处理环节



//中间件的注意事项：
// 1.一定要在路由之前定义中间件(错误级别中间件一定要在所有路由之后)
// 2.可以连续用多个中间件处理
// 3.执行中间件的代码后，一定要调用next()
// 4.next()函数之后不要写额外代码
// 5.连续调用多个中间件，req和res是共享的




// 中间键的分类
// 1.app.后面的中间件是应用级别中间件
// 2.router.后面为路由级别中间件
// 3.错误级别中间件(err,req,res,next)(没有错误中间件服务器会崩溃)
// 4.express内置中间件
//     (1)express.static()快速托管静态资源
//     (2)express.json()解析json格式请求体数据
//     (3)express.urlencoded()解析url - encoded格式的请求数据体 app.use(express.urlencoded({extended:false}))
// 5.第三方中间件
// (1)npm i body - parser安装中间件
//     (2)require 导入中间件
//         (3)app.use使用中间件

const express = require('express');
const app = express();

// const nw = (req,res,next) => {
//     console.log('最简单的中间件函数');
//     //把流转关系转交给另一个中间件或路由
//     next();
// }

// //定义全局生效的中间件
// app.use(nw);


// 上面方式简写
app.use((req, res, next) => {
    console.log('最简单的全局中间件函数');
        //把流转关系转交给另一个中间件或路由
    req.time1 = Date.now();//获取请求到达服务器的时间
        next();
})
//多个中间件共享一份req和res
app.use((req, res, next) => {
    console.log('最简单的全局中间件函数2');
        //把流转关系转交给另一个中间件或路由
    req.time2 = Date.now();//获取请求到达服务器的时间
        next();
})


// 局部中间件
let mw = (req, res, next) => { console.log('我是局部生效的中间件'); next(); }
let mw1 = (req, res, next) => { console.log('我是局部生效的中间件2'); next(); }



app.get('/',[mw,mw1] ,(req, res) => {//可以放多个中间件，[]或 ，分隔
 
    res.send('/请求'+req.time1)
})
app.get('/list', (req, res) => {
    throw new Error('服务器发送了错误');
    res.send('/list请求'+req.time2);
})



// 错误级别中间件(err,req,res,next)
app.use((err, req, res, next) => {
    console.log('发送了错误' + err.message);
    res.send('Error!' + err.message);
    next();
})//没有错误中间件服务器会崩溃
app.listen(80, () => {
    console.log('http://127.0.0.1/');
})



