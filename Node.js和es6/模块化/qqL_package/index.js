
// 导入

const date = require('./src/dateFormat');
const htmlstr = require('./src/htmlEscape');

module.exports = {
    ...date,       //...展开这个对象
    ...htmlstr
}