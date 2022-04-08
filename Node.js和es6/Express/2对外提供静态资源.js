const express = require('express');
const app = express();
// 对外提供静态资源express.static()
// app.use(express.static('./clock'));

// 对静态资源挂载路径前缀
app.use('/public', express.static('./clock'));//多个托管时用

app.listen(80, () => {
    console.log('http://127.0.0.1/');
})