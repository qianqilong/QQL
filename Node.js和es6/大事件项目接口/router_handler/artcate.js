// 函数模块
//文章分类的函数
// 1.导入数据库操作模块
const db = require('../dbmysql/index');
//查询文章分类
getArticleCates = (req, res) => {
    //定义查询分类的sql语句
    const sql = 'select *from ev_article_cate where is_delete=0 order by id ';
    db.query(sql, (err, results) => {
        if (err) return res.cc('sql语句执行失败！');
        res.send({
            status: 0,
            message: '获取文章列表成功！',
            data: results,
        })
    })
 
};
//添加文章分类
addArticleCates = (req, res) => {
    // 验证表单数据查询 分类名称 与 分类别名 是否被占用
    const sql = 'select * from ev_article_cate where name=? or alias=?';
   //表单的值传入占位符
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        if (results.length === 2) return res.cc('名称和别名都被占用！');
        if (results.length == 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
            return res.cc('名称和别名分别被占用！')
        }
        if (results.length == 1 && results[0].name === req.body.name ) {
            return res.cc('名称被占用！')
        }
        if (results.length == 1 && results[0].alias === req.body.alias) {
            return res.cc('别名被占用！')
        }
        //添加新增分类操作
        const sql = 'insert into ev_article_cate set ?';
        db.query(sql, req.body, (err, results) => {
            if (err) return res.cc('执行sqL语句失败！');
            if (results.affectedRows !== 1) return res;
            res.cc('新增文章分类成功！',0);
        })
    })
}
//删除文章分类
deleteCateById = (req,res)=> {
  //定义根据id删除删除
    const sql = 'update ev_article_cate set is_delete=1 where id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败！');
        res.cc('删除文章分类成功！', 0);
    })
}
//根据id获取文章
getArticleCatesId = (req, res) => {
//定义sql根据id查询
    const sql = 'select * from ev_article_cate where id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        if (results.length !== 1) return res.cc('获取文章数据失败！');
        res.send({
            status: 0,
            message: '获取文章列表成功！',
            data:results[0]
     })
    })
}
//根据id更新文章数据
updateCateById = (req, res) => {
// 定义查询分类名称与分类别名是否被占用的 SQL语句
    const sql = 'select * from ev_article_cate where id<>? and (name=? or alias=?)';
    db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc('执行sql语句失败！');
        if (results.length === 2) return res.cc('名称和别名都被占用！');
        if (results.length == 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
            return res.cc('名称和别名分别被占用！')
        }
        if (results.length == 1 && results[0].name === req.body.name ) {
            return res.cc('名称被占用！')
        }
        if (results.length == 1 && results[0].alias === req.body.alias) {
            return res.cc('别名被占用！')
        }
        //更新文章内容
        const sql = 'update ev_article_cate set? where id=?';
        db.query(sql, [req.body, req.body.id], (err, results) => {
            if (err) return res.cc('执行sql语句失败！');
            if (results.affectedRows !== 1) return res.cc('更新文章失败！');
            res.cc('更新文章内容成功！', 0);
        })
    })
}

module.exports = {
    getArticleCates,
    addArticleCates,
    deleteCateById,
    getArticleCatesId,
    updateCateById 
}