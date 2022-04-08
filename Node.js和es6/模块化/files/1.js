const username = '张三';
// (1)module.exports当前对象对外的一个出口
module.exports.username = username;//向外共享一个成员
module.exports.say = function () {
    console.log('Hello!');//向外共享一个方法
}

// module.exports和exports是全等的，指向的为同一个对象
module.exports = {
    nickname: '小红',
    sayhi() {
       console.log('Hello!');
   }
}
// 误区
//1. 如果module.exports和export混用是会让俩者指向不同的新对象{}
//2.如果module.exports和export混用时用.(点)的方式指向对象时，两者指向的任然是同一对象
