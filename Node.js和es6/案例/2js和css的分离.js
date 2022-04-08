// 导入fs和path模块
const { log } = require('console');
const fs = require('fs');
const path = require('path');
// 1.创建两个正则表达式匹配style和script
const regStyle = /<style>[\s\S]*<\/style>/;// /s匹配空白字符 /S匹配任意字符
const regScript = /<script>[\s\S]*<\/script>/;//正则表达式是没有''
// 2.读取操作的文件
const pathStr = path.join(__dirname, 'files/index.html');
fs.readFile(pathStr, 'utf8', function (err, datastr) {
    if (err) return console.log('读取文件失败' + err.message);
    console.log('读取文件成功');
    resolveCSS(datastr);
   
    resolveJS(datastr);

    resolveHTML(datastr);
})
//正则表达式中的exec(),成功反回一个数组，索引为0为为里面的内容
// 正则表达式.exec()


// 创建一个匹配style方法
function resolveCSS(htmlStr) {
    //正则提取内容
    const r1 = regStyle.exec(htmlStr);
    //消除字符串中的style标签
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    //获取css文件的路径
    const Cpath = path.join(__dirname, './files/css/index.css')

//将提取得文件写入index.css中
    
    fs.writeFile(Cpath, newCSS, function (err) {
        if (err) return console.log('写入文件失败');
        console.log('写入css文件成功');
     })
}

//创建一个匹配提取script方法
function resolveJS(htmlStr) {
    //通过正则获取内容
    const r1= regScript.exec(htmlStr);
    //替换标签
    const newJS = r1[0].replace('<script>', '').replace('</script>', '');
   
    //获取index.js的路径
    const Jpath = path.join(__dirname, './files/js/index.js');
    //写入文件
    fs.writeFile(Jpath, newJS, function (err) {//可以创建文件，但是不会创建新的文件夹
        if(err) return console.log('写入文件失败');
        console.log('写入js文件成功');
     })
}

//创建一个函数处理HTML
function resolveHTML(htmlStr) {

// 修改获取的内容
    const r = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./css/index.css"> ');
    const r1 = r.replace(regScript, '<script src="./js/index.js"></script>');
    // 获取新的html文件路径
    const NHpath = path.join(__dirname,'./files/newindex.html');

    // 写入文件的全部内容
    fs.writeFile(NHpath, r1, function (err) {
        if(err) return console.log('写入文件失败');
      console.log('写入文件成功');
            
        })

 
 
}
