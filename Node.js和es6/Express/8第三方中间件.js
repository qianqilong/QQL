const express = require('express');
const app = express();
// 导入第三方中间件
// body-parser是一个HTTP请求体解析的中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，
const parser = require('body-parser');
app.use(parser.urlencoded({extended:false}))
app.post('/', (req, res) => {
   
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log();
})
