const express = require('express');
const app = express();
const router = require('./2路由模块');


//导入路由模块
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
app.listen(80, () => {
    console.log('http://127.0.0.1');
})