const qql = require('./qqL_package');

// 格式化时间
const dtStr = qql.dateFormat(new Date());
console.log(dtStr);

//识别html转义标签
const htmlStr = '<h1>121212</h1>';
const str = qql.htmlEscript(htmlStr);
console.log(str);

//还原html
const htmlstr = qql.UNhtmlEscript(str);
console.log(htmlstr);

//发布包npm login 依次输入用户名，密码，邮箱(必须在官方服务器)
//npm publish发布
//npm unpublic 包名 --force 删除包(72小时以内可以发布)
