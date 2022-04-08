

//1.导入fs模块
const fs = require('fs');
//2.调用fs.readFile()读
fs.readFile(__dirname+'/files/成绩.txt', 'utf8', function (err, datastr) {
    if (err) {
        return console.log('读取文件失败:'+err.message);
    }
    // console.log('读取文件成功:' + datastr);
    // 1.先把成按照空格分隔
    const arrOld = datastr.split(' ');
    // 2.每一组数据把 = 替换：
    const arrNew = [];
    arrOld.forEach(element => {
        arrNew.push(element.replace('=', ':'));
    });//对arrOld数组遍历，ele是数组中的每一个元素
    // console.log(arrNew);
    // 3.把所有的字符串数组合并
    const newStr = arrNew.join('\r\n');
    console.log(newStr);
        // 4.调用fs.writeFile()写入文件
    fs.writeFile(__dirname+'/files/成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入成绩失败'+err.message);
        }
        console.log('成绩写入成功');
    })

})