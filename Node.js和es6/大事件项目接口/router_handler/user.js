//用户路由处理函数

// 1.导入数据库操作模块
const db = require('../dbmysql/index');
// 2.安装bcryptjs npm i bcryptjs@2.4.3
const bcryptjs = require('bcryptjs');


// 注册用户Post
regUser = (req, res) => {
    //获取客户端提交到服务器的信息
    const userinfo = req.body;
    // 对表单数据进行合法验证
    if (!userinfo.username || !userinfo.password) {//表单提交要以键值对的方式提交
        // return res.send({ status: 1, message: '用户名或密码不合法！' });
      return  res.cc('用户名或密码不合法！');
    }

    // 判断用户名是否被使用
    //定义sql语句
    const sqlstr = 'select * from ev_users where username=?';
    db.query(sqlstr, userinfo.username, (err, results) => {
        if (err) {
            // return res.send({ status: 1, message: '执行sql语句失败!' })
            return  res.cc('执行sql语句失败!');
        };
        //判断用户名是否被占用 (select查询语句返回的是一个数组，如果没有数据就可以)
        if (results.length > 0) {
            // return res.send({ status: 1, message: '用户名已经被占用，请更换用户名!' })
            return  res.cc('用户名已经被占用，请更换用户名!');
        };
        //用户名可以使用(使用bcryptjs对用户密码进行加密,同一密码加密结果不同)
        userinfo.password=bcryptjs.hashSync(userinfo.password, 10);
       
        //定义插入新用户的sql语句
        const sqlInsert = 'insert into ev_users set ?';
        //调用db执行sql语句
        db.query(sqlInsert, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            // 执行sql语句失败
            if (err) {
                // return res.send({ status: 1, message: err.message });
                return  res.cc('执行sql语句失败');
            }
            // 判断影响行数是否为1
            if (results.affectedRows !== 1) {
                // return res.send({ status: 1, message: '注册用户失败！' });
                return  res.cc('注册用户失败！');
            }
            //注册成功
            res.send({ status: 0, message: '注册成功！' });

        })


    })

}

//登陆用户
login = (req, res) => {
    res.send('登陆成功')
}

//共享两个函数
module.exports = {
    regUser,
    login
}