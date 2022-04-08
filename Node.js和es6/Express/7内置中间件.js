const express = require('express');
const app = express();
app.use(express.json());
// 有配置解析json格式中间件,默认情况下req.body为undefined
app.use(express.urlencoded({extended:false}))
app.post('/', (req, res) => {
    //可以用req.body来接收客户端发送过来的请求信息
    // 没有配置解析json格式中间件,默认情况下req.body为undefined
    console.log(req.body);
    res.send()
})
app.post('/list', (req, res) => {
    //可以用req.body来接收客户端发送过来的请求信息
    // express.urlencoded,默认情况下req.body为undefined
    console.log(req.body);
    res.send('ok')
})
app.listen(80, () => {
    console.log();
})
