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

// 4.导入验证模块
const joi = require('joi');


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
// 4.1.导入解析token的中间件(一定要在路由之前)
const expressjwt = require('express-jwt');
//导入全局配置的秘钥
const config = require('./config');
// 注册解析全局中间件
app.use(expressjwt({ secret: config.secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }));
// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))

 
//5.导入使用用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);//登陆前面加上/api

//6.导入用户信息路由模块
const userinfoRouter = require('./router/userinfo');
app.use('/my', userinfoRouter);

//7.导入文章分类路由模块
const artCateRouter = require('./router/artcate');
app.use('/my/artcate', artCateRouter);

//8.导入发布文章路由模块
const artiCleRouter = require('./router/article');
app.use('/my/article', artiCleRouter);

//导入错误中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err);
    if (err.name === 'UnauthorizedError')
        return res.cc('身份认证失败！');
        //jwt在访问非匹配的字符串时会看请求头中的token值，如果不满足就请求失败
    res.err(err);
})
//启动服务器
app.listen(3007, () => {
    console.log('http://127.0.0.1:3007');
})
