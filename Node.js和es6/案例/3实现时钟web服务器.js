// 1.导入http模块
const http = require('http');
// 2.导入fs模块
const fs = require('fs');
//3.导入path模块
const path = require('path');
//4.创建web服务器
const server = http.createServer();
//5.监听web服务器的request事件
server.on('request', (req, res) => {
    // (1)url地址映射为weburl地址
    const url = req.url;
    // const fpath = path.join(__dirname, url);  // /files/newindex.html
      


 //路径太长要进行优化
    let fpath = '';
    if (url ==='/') {
        fpath = path.join(__dirname, 'files/newindex.html');
    } else {
        fpath = path.join(__dirname, './files', url);
    }
    // (2)读取文件中的内容发送给客户端
    fs.readFile(fpath, 'utf8', (err, datastr) => {
        if (err) return res.end('<h1>404 Not found</h1>');
        res.end(datastr);
    })
  
})
//6.启动web服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})
