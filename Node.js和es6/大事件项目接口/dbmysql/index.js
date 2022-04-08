//数据库连接模块
// 1.安装数据库 npm i mysql@2.18.1
const mysql = require('mysql');
//创建数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database:'my_db_01',
})
//向外共享数据库连接
module.exports = db;