//用户路由模块
const express = require('express');
//创建路由模块
const router = express.Router();

// 为了保证 路由模块 的纯粹性，所有的 路由处理函数 ，必须抽离到对应的 路由处理函数 模块
// 1.导入用户函数处理模块
const user_handler = require('../router_handler/user');
// 2.导入验证模块
const expressjoi = require('@escook/express-joi');
// 3.导入验证规则
const req = require('../schema/user');
// 注册新用户
router.post('/reguser',expressjoi(req.req) , user_handler.regUser);//注册进行验证
//登陆模块
router.post('/login',expressjoi(req.req), user_handler.login);//登陆进行验证

//共享路由模块
module.exports = router;