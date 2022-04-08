const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    // 1.获取响应的url
    const url = req.url;
    // 2.设置默认的响应内容为404 Not found
    let content = '<h1>404 Not found</h1>';
    // 3.判断用户的请求是什么
    if (url == '/' || url == 'index.html') {
        content = '<h1>首页</h1>';
    } else if (url == '/login.html'){
        content = '<h1>登陆</h1>';
    }
       
    // 4.设置响应头, 防止乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 5.响应客户端
    res.end(content);
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})