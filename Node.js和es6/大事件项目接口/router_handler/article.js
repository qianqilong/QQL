//发布文章路由函数模块
// 1.导入路径处理模块
const path = require('path');
//2.导入数据库操作模块
const db=require('../dbmysql/index')
addArticle = (req, res) => {
    if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必须的！');
    const articleInfo = {
        ...req.body,
        // 文章封面在服务器端的存放路径
        cover_img: path.join('/uploads', req.file.filename),
        // 文章发布时间
        pub_date: new Date(),
        // 文章作者的Id
        author_id: req.user.id,
    }
    // 定义发布文章的sql
    const sql = `insert into ev_articles set ?`
    db.query(sql, articleInfo, (err, results) => {
       // 执行 SQL 语句失败
  if (err) return res.cc(err)

  // 执行 SQL 语句成功，但是影响行数不等于 1
  if (results.affectedRows !== 1) return res.cc('发布文章失败！')

  // 发布文章成功
  res.cc('发布文章成功', 0) 
    })
}
module.exports = {
addArticle,
}