const express = require('express');
const router = require('./4路由的模块化');

const app = express();

app.use('/user',router);//app.use注册全局中间件
app.listen(80, () => {
    console.log('http://127.0.0.1/');
})