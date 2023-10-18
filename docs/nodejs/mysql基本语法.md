# mysql 基本语法

## select

```sql
-- 从指定表中，查询出所有数据，*表示所有列
select * from 表名称
-- 从指定表中，查询出指定列名称的数据
select 列名称 from 表名称
select username,password from users
```

## insert

```sql
-- 列和值要一一对应
insert into  表名称 (列1，列2,...) values (值1,值2,...)
insert into users (username,password) values('jack','12345')
```

## update

```sql
-- update 指定更新的表
-- set 指定对应列的新值
-- where 指定更新的条件
update 表名称 set 列名称=新值 where 列名称=某值
update users set password='66666' where id=4
update users set password='222333', age=34 where id=3
```

## delete

```sql
delete from 表名称 where 列名称 = 值
delete from users where id=5
```

## where

可以在 where 语句中使用的运算符
|操作符|描述|
|--|--|
|=|等于|
|<>|不等于|
|>|大于|
|<|小于|
|>=|大于等于|
|<=|小于等于|
|between|在某个范围内|
|like|搜索某种模式|

```sql
select * from users where status=1
select * from users where age>10
select * from users where username<>'admin'
```

## and/or

```sql
-- and
select * form users where status=0 and age>20
-- or 查到status为1或username为tony的数据
select * from users where status=1 or username='tony'
```

## order by

默认按照升序进行排序，降序使用 desc 关键字

```sql
select * form users order by age
select * from users order by age desc
```

-   多重排序

```sql
-- 先按照age降序排序，再按照count升序排序
select * from users order by age desc, count asc
```

## count(\*)

返回查询结果的总数据条数

```sql
select count(*) from 表名称
-- 查询结果：count（*）：3
select count(*) from users where age=20
-- 设置查询结果别名(total:3)
select count(*) as total from users where age=20
```
