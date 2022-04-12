//文章验证模块
const joi = require('joi');
//定义标题等验证规则
const title = joi.string().required();
const cate_id = joi.number().integer().min(1).required();
const content = joi.string().required().allow();
const state = joi.string().valid('已发布', '草稿').required();
//共享验证规则
exports.add_article = {
    body: {
        title,
        cate_id,
        content,
        state,
    }
}
