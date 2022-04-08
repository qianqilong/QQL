//http模块是用来创建web服务器
// Node.js不需要apache iis等软件开服务器

// 1.ip地址
// (1)每台计算机的唯一地址
// 2.域名和域名服务器
// (1)ip的别名，存放在域名服务器中
// (2)127.0.0.1域名为locahost
// 3.端口号
// (1)每个端口号对应唯一的web服务，url 80的端口号可以省略

// 1.导入http模块
const http = require('http');
//2.创建web服务器实例http.createServer()
const server = http.createServer();
//3.为服务器绑定request事件server.on('request', function (req,res)）
server.on('request', function (req, res) {
    console.log('Someone visit our web server');//请求服务器就触发这个事件




    // 1.req请求对象
    // req.url客户端请求的url地址
    const url = req.url;
    // req.method是客户端请求的类型
    const method = req.method;
  
    const str =   `url地址是${url},请求类型是${method}`
    console.log(str);




    // 2.res响应对象
    // 中文会乱码加上下面这句话
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');//设置响应头
    // 调用res.end()
    res.end(str);//中文会乱码


})
//4.启动web服务server.listen(端口号, 会调函数)
server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})