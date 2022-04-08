
const express = require('express');
const app = express();

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));
// JSONP接口要陪置在cors中间件之前
app.get('api/jsonp', (req, res) => {
    // 定义jsonp接口的具体实现
    // 1.获取客户端回调函数
    const funcName = req.query.callback;
    // 2.得到通过jsonp形式发送给客户端的数据
    const data = { name: 'zs', age: 23 };
    // 3.根据前两部拼接字符串
    const scriptStr=`${funcName}(${JSON.stringify(data)})`
    // 4.把上一步拼接的到的字符串响应在客户端的<script>标签中
    res.send(scriptStr);
})


//路由之前调用app.use(cors());
const cors = require('cors');
app.use(cors());






//导入路由模块
const router = require('./2路由模块');
// const { json } = require('body-parser')


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