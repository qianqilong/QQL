// 模块的3大类
// 内置模块：官方提供require('fs');
// 自定义模块：自己写的js文件require(路径文件名)会执行文件中的代码(可以省文件的后缀名)
// 第三方模块：下载的


// 加载模块require();

// 模块作用域(模块中定义的成员无法被访问)
const cust = require('./files/1');
// 导入的对象永远以module.exports指向的对象为准
console.log(cust);//空对象无法被访问
// 这里实际输出的是module.exports对象

//模块作用域中的共享成员
// // 1.module对象
// console.log(module);

// (1)module.exports当前对象对外的一个出口
console.log(cust.username); 
 // 误区
//1. 如果module.exports和export混用是会让俩者指向不同的新对象{}
//2.如果module.exports和export混用时用.(点)的方式指向对象时，两者指向的任然是同一对象


// 模块优先从缓存加载，内置模块的加载优先键最高
// 自定义模块一定要按照./路径
//没有扩展名node.js会尝试补全.js .json .node 否则会报错
//第三方模块1只要在调用目录下或父级目录下就可以调用

//目录作为模块加载
// 会在package.json中的main指向的文件，如果没找到会尝试找目录下的index.js,否则报错