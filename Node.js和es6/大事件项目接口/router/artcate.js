//文章分类路由模块
const express = require('express');
const router = express.Router();
//获取文章列表分类路由(分离函数模块)
//1. 导入函数模块
const ArticleCates = require('../router_handler/artcate');
//2.导入验证模块
const expressjoi = require('@escook/express-joi');
const add_cate = require('../schema/user');
//查询文章分类
router.get('/cates', ArticleCates.getArticleCates);
//添加文章分类
router.post('/addcates',expressjoi(add_cate.add_cate), ArticleCates.addArticleCates);
//删除文章分类
router.get('/deletecate/:id',expressjoi(add_cate.id) ,ArticleCates.deleteCateById);
//根据 Id 获取文章分类
router.get('/cates/:id', expressjoi(add_cate.id), ArticleCates.getArticleCatesId);
//根据id更新文章
router.post('/updatecate', expressjoi(add_cate.update_cate), ArticleCates.updateCateById);
module.exports = router;