// 1.传统型数据库
// (1)数据库(2)数据表(3)数据行(4)字段
    // (5)每个项目对应一个数据库
    // (6)不同数据存到不同表中
    // (7)具体信息由字段决定
    // (8)表中的行代表每一条具体的数据
// 1.pk主键
// 2.NN不能为空
// 3.UQ值唯一
// 4.AI值自动增长


// sql是一门数据库编程语言，只能在关系数据库中使用
// 插入： insert into 表名 (列名1，列名2)values('第一个值'，'第二个值')
// 查询：select 列名 from 表名 (多个列名用，分割)
// 删除： delete from 表名 where 列名=唯一标识
// 修改：update 表名 set 列名 = 新值 where 列名=修改对象id(修改多个值时用，隔开)

// where子句限制选择标准 <>不等
// and和or同时满足多个条件或满足一个
// and:where id < 3 and username = 'zs'
// or: where id < 3 or username = 'zs'
//order by:order by 要按按照排序的列名 (desc降序)
// 多重排序： order by status desc, username asc
//  count(*):查询数据的条数
// AS；别名


