const time = require('./files/2格式化时间');//导入模块
// 调用方法
const dt = new Date();
const newdt = time.dataFormat(dt);
console.log(newdt);
