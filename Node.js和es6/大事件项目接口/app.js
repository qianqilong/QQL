// 1.安装express @4.17.1版本 npm iexpress@4.17.1
// 导入express模块
const express = require('express');
// 创建服务器实例对象
const app = express();

// 2.安装cors中间件  npm i cors@2.8.5
const cors = require('cors');
app.use(cors());

// 3.配置解析表单数据application/x-www-form-urlencodedh内置中间件
app.use(express.urlencoded({ extended: false }));

//路由之前封装响应函数
app.use((req, res, next) => {
    // status默认值为一表示失败，err可能是一个错误对象，也可能是错误描述的字符串
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message:err instanceof Error? err.message:err,
       }) 
    }

    next();
})

//4.导入使用用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);//登陆前面加上/api

//启动服务器
app.listen(3007, () => {
    console.log('http://127.0.0.1:3007');
})
