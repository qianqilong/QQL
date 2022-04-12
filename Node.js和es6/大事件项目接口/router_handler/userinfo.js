//用户信息的函数模块

// 1.导入数据库模块
const db = require('../dbmysql/index');
const dbmysql = require('../dbmysql/index');
// 2.导入密码加密模块
const bcrypyjs = require('bcryptjs');
// 获取用户信息的处理函数
getUserInfo = (req, res) => {
    //定义查询用户信息的sql语句
    const sqlSelect = 'select id,username,nickname,email,user_pic from ev_users where id=?';
    // 调用sqL语句
    dbmysql.query(sqlSelect, req.user.id, (err, results) => {
        if (err) return res.cc('执行sql语句失败');
        if (results.length != 1) return res.cc('获取用户信息失败');
        res.send({
            status: 0,
            message: '获取用户信息成功！',
            data:results[0],
        })
    })
   
}

//更新用户信息处理函数
updateUserInfo = (req, res) => {
    const userinfo = req.body;
    // 根据id更新数据库
    const sqlUpdate = 'update ev_users set ?where id=?';
    //调用db.query()执行sql语句
    db.query(sqlUpdate, [userinfo, userinfo.id], (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        // 受影响的行数
        if (results.affectedRows !== 1) return res.cc('更新用户的基本信息失败！');
        res.cc('更新用户信息成功', 0);
    })
   
}

//更新用户密码的处理函数
updatePassword = (req, res) => {
   //1.根据id查看用户是否存在
    const sqlSelect = 'select * from ev_users where id=?';
    db.query(sqlSelect, req.user.id, (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        if (results.length !== 1) return res.cc('用户不存在！')
         //判断旧密码是否正确
        const comparResult = bcrypyjs.compareSync(req.body.oldpwd, results[0].password);
        if (!comparResult) return res.cc('旧密码错误！');
        //对新密码进行加密存入数据库中
        const sqlUpdate = 'update ev_users set password=? where id=?';
        //对新密码进行加密
        const newpwd = bcrypyjs.hashSync(req.body.newpwd, 10);
        // 执行sql语句
        db.query(sqlUpdate, [newpwd, req.user.id], (err, results) => {
            // 执行sql语句失败
            if (err) return res.cc('执行sql语句失败！');
            if (results.affectedRows !== 1) return res.cc('更新密码失败！');
            res.cc('更新密码成功！', 0);
        })
       
    })
  
}

//更换头像
updateAvator = (req, res) => {
   //定义更新头像的sql
    const sqlUpdate = 'update ev_users set user_pic=? where id=?';
    //执行sql语句
    db.query(sqlUpdate, [req.body.avatar, req.user.id], (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        if (results.affectedRows !== 1) return res.cc('更换头像失败！');
        res.cc('更换头像成功！', 0);

    })
}
module.exports = {
    getUserInfo,
    updateUserInfo,
    updatePassword,
    updateAvator
}