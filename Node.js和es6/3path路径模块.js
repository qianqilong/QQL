// 1.导入路径模块
const { readFile } = require('fs');
const { dirname } = require('path');
const path = require('path');
//拼接文件目录
const pathStr = path.join(__dirname, './File/1.txt');
//路径处理都有path.join进行拼接
const fs = require('fs');
fs.readFile(pathStr, function(err ,datastr){
    if (err) {
        return console.log('读取文件失败'+err.message);
    }
    console.log('读取文件成功：'+datastr);
})




// 获取路径中的文件名
// path.basename()可以从一个文件路径中取得文件名称部分
const fname = path.basename(pathStr);//传一个文件路径可以获取文件名
console.log(fname);
// 消除文件扩展名
const fname1 = path.basename(pathStr, '.txt');//传一个后缀可消除文件扩展名
console.log(fname1);
// 获取扩展名
const fext = path.extname(pathStr);
console.log(fext);



