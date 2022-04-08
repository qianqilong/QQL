//导入express模板

const express = require('express');
const bodypar = require('./9自定义中间件.js');


const app = express();

app.use(bodypar)

app.post('/', (req, res) => {
   
    console.log(req.body);
    res.send(req.body)
})

app.listen(80, () => {
    console.log('ok');
})
