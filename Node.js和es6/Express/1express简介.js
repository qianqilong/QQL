// Express是基于node.js平台，快速，开放，极简的web开发项目
// 是express就是npm上的第三方的包
//web网站服务器，api接口服务器
// 安装 npm i express@4.17.1
// 1.导入express
const express = require('express');
// 2.创建web服务器
const app = express();
// 监听客户端的get请求
app.get('/user', (req, res) => {
    // 向客户端响应一个JSON对象
    res.send({name:'zs',age:'20',gender:'男'});
})
// 监听客户端的post请求
app.post('/user', (req, res) => { 
    // 向客户端响应一个文本字符串
    res.send('请求成功');
    // 获取url的参数，通过查询字符串的方式

})




// 获取到客户端发送过来的查询参数
app.get('/', (req, res) => {
    //req.query可以获取到客户端发送过来的查询参数(默认情况下req.query是null对象)
     console.log(req.query);//?anme=zs&age=20形成一个对象
    res.send(req.query);
})



//获取url中的动态参数(:形式)req.params
app.get('/user/:age/:name', (req, res) => {//:age是动态参数(可以两个参数)
    console.log(req.params);
    res.send(req.params)
})


// express.static()可以创建一个静态资源服务器
// app.use(express.static('public'));//目录名不会出现在url地址中
// app.use(express.static('st'));//托管多个资源
 // 多次托管会先触发前面托管的
// 对静态资源挂载路径前缀
app.use('/public', express.static('./clock'));//多个托管时用

// 3.启动服务器
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})


//安装nodemon   npm i -g nodemon(代码变化会重启服务器)
// 找到Windows PowerShell，右键，以管理员身份进行：set-ExecutionPolicy RemoteSigned  