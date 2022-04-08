##安装
...
npm install itheima-qql
...
##导入
```js
const ithema=require('');
```
##格式化时间
```js
const dtStr = qql.dateFormat(new Date());
```
##转义html特殊字符
```js
const htmlStr = '<h1>121212</h1>';
const str = qql.htmlEscript(htmlStr);
console.log(str);

//还原html
const htmlstr = qql.UNhtmlEscript(str);
console.log(htmlstr);
```
##开源协议
```
ISC
```