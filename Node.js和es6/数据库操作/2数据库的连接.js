// 1.导入数据库
const mysql = require('mysql');
// 2.建立数据库连接
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的ip地址
    user: 'root',//数据库名
    password: 'admin123',//数据库密码
    database: 'my_db_01'//指定要操作的数据库
});


// 测试mysql模块是否可以正常工作
db.query('SELECT 1', (err, results) => {
    //mysql模块工作期间报错
    if (err) return console.log(err.message);
    //能够成功执行sql语句
    console.log(results);
})








// 查询数据
db.query('select * from users', (err, results) => {
    if (err) return console.log(err.message);
    console.log(results); //执行语句是select查询语句，返回值是一个数组
})











//插入数据
const user = { username: 'sx12', password: 147258 };

// const sqlInsert = 'insert into users (username,password) values (?,?)'//?占位符


// 插入数据的简写
const sqlInsert = 'insert into users set ?';
db.query(sqlInsert, user, (err, results) => {//简写只有数组名
    

//执行sql语句
// db.query(sqlInsert, [user.username, user.password], (err, results) => {//通过数组为占位符填充数据
    //执行失败
    if (err) return console.log(err.message);
    //成功
    if (results.affectedRows === 1) console.log('插入数据成功');
    //执行insert语句返回的是一个对象，可以通过affectedRows语句来判断是否插入成功
})











// 更新数据
const user1 = { id: 3, username: 'sa1', password: '000' };
//定义sql语句
// const sqlUpdate = 'update users set username=?,password=? where id=?';


// 更新数据sql语句的简写
const sqlUpdate ='update users set ? where id=?'
//执行的简写
db.query(sqlUpdate,[user1,user1.id],(err,results)=>{



// db.query(sqlUpdate, [user1.username, user1.password, user1.id], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) console.log('更新成功');
     //执行update语句返回的是一个对象，可以通过affectedRows语句来判断是否更新成功
})










//删除数据
const sqlDelete = 'delete from users where id=?';
// 执行sqL语句
db.query(sqlDelete, 8, (err, results) => {
    if (err) console.log(err.message);
    if (results.affectedRows === 1) console.log('删除数据成功');
     //执行delete语句返回的是一个对象，可以通过affectedRows语句来判断是否删除成功
})
//标记删除(直接删除危险)
const sqlBJDelete = 'update users set status =? where id=?'
db.query(sqlBJDelete, [1, 2], (err, results) => {
    if (err) console.log(err.message);
    if (results.affectedRows === 1) console.log('标记删除数据成功');
})

