//1.个人中心得路由模块
const express = require('express');
//2.导入路由模块
const router = express.Router();
//3.导入函数模块
const getUserInfo = require('../router_handler/userinfo');
//4.导入验证数据中间件
const expressjoi = require('@escook/express-joi');
//5.导入验证规则
const update = require('../schema/user');
// get方法获取用户的基本信息(保证路由模块的纯粹性，函数应该写在外面)
router.get('/userinfo', getUserInfo.getUserInfo);
//更用户信息路由
router.post('/userinfo',expressjoi(update.update), getUserInfo.updateUserInfo);
//更新用户密码的路由
router.post('/updatepwd', expressjoi(update.update_password), getUserInfo.updatePassword);
//更换头像的路由
router.post('/update/avatar',expressjoi(update.updateAvatar), getUserInfo.updateAvator);

//共享用户信息路由模块
module.exports = router;