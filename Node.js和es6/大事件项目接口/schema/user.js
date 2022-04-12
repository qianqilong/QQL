// 1.用户信息验证模块
// (1)安装 @escook/express-joi 中间件，来实现自动对表单数据进行验证的功能：npm install joi@17.4.0
// (2)安装 @hapi/joi 包，为表单中携带的每个数据项，定义验证规则：npm install @escook/express-joi
/*** string() 值必须是字符串 * 
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 *  * min(length) 最小长度 
 * * max(length) 最大长度 * 
 * required() 值是必填项，不能为 undefined 
 ** pattern(正则表达式) 值必须符合正则表达式的规则 */
const joi = require('joi');
//定义用户名验证规则
const username = joi.string().alphanum().min(1).max(10).required();
const password = joi.string().pattern(/^[\S]{6,12}$/).required();//^以什么开头$以什么结尾[/S]非空{6,12}6到12位
//导出两个定义规则
module.exports.req={
    
    body: {
        username:username,
        password:password,
    }
}

// 定义id, nickname, email的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();
//导出这些定义规则,对body里面的数据进行验证
module.exports.update = {
    body: {
        id,
        nickname:nickname,
        email:email//值相同时可以简写
    }
}


//定义密码验证规则
const oldpwd = password;
const newpwd = joi.not(joi.ref('oldpwd')).concat(password);
// 导出验证规则
module.exports.update_password = {
    body: {
        oldpwd: oldpwd,
        newpwd:newpwd
    }
  
}

//定义图像路径的字符串验证规则
const avatar = joi.string().dataUri().required();
//导出验证规则
module.exports.updateAvatar = {
    body:{
    avatar,
    }
}

//定义文章分类数据验证模块
const name = joi.string().required();
const alias = joi.string().alphanum().required();
module.exports.add_cate= {
    body: {
        name,
        alias
    }
}

//定义查询id的验证规则
module.exports.id = {
    params: {
       id
   }
}

//根据id更新数据
module.exports.update_cate = {
    body: {
        id,
        name,
        alias
    }
}