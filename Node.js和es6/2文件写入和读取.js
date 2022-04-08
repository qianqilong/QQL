
//fs文件系统模块路径错误问题
// 1.如果提供的路径是./或../开头的相对路径时，很容易出现路径动态拼接错误的问题
// 2.对文件操作是把文件地址动态拼接到当前目录下
//解决
// 1.给他绝对路径如：G: \前端\Node.js和es6\案例 (移值性太差)
// 2.__dirname表示当前文件所处目录

console.log(__dirname);
// 1.读取文件内容
// fs.readFile(path,[options],callback);读取文件内容    路径，编码格式，回调函数
// (1)导入fs模块
const fs = require('fs');
// 路径，编码格式，回调函数(err datastr)
fs.readFile(__dirname+'/File/1.txt', 'utf8', function (err, datastr) {
    // console.log(err);//打印失败的结果 失败为true,成功为null
    if (err) {
        return console.log('读取文件失败！'+err.message);
    }
  
    console.log('读取文件成功！'+datastr);//打印成功的结果,失败为undefid
})



// fs.writeFile(file,data,[options],callback);向文件中写入内容 文件路径，写入内容，默认utf8(格式)，回调函数
const fs1 = require('fs');
fs1.writeFile(__dirname+'/File/2.txt', 'abcd', function (err) {
    if (err) {
        return console.log('文件写入失败'+err.message);  //文件写入失败err=true 
    }
    console.log('文件写入成功');
})