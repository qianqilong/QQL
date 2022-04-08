const qs = require('querystring');


const bodypar=(req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
       
        //把字符串格式文件改为对象格式
        // querystring可以把查询字符串转换成对象格式
        const body = qs.parse(str);
        req.body = body;
        next();
    })
  
  
}
module.exports=bodypar