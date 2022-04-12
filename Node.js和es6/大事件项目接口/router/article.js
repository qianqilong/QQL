//发表文章模块
//     使用 express.urlencoded() 中间件无法解析
//     multipart / form - data 格式的请求体数据。
// 推荐使用 multer 来解析 multipart/form-data 格式的表单数据。
// 安装multer npm i multer@1.4.2


const express = require('express');
const router = express.Router();
const path = require('path');
// 1.导入multer模块
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '../uploads') });
// 1.导入函数模块
const addArticle = require('../router_handler/article');
// 2.导入验证模块中间件
const expressjoi = require('@escook/express-joi');
const add_article = require('../schema/article');
//发布新文章的路由
// upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
// 将文件类型的数据，解析并挂载到 req.file 属性中
// 将文本类型的数据，解析并挂载到 req.body 属性中
router.post('/add', upload.single('cover_img'),expressjoi(add_article.add_article), addArticle.addArticle)
module.exports = router;