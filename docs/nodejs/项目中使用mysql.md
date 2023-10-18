# 项目中使用 mysql

## 安装配置 mysql

### 1. 安装依赖

```shell
npm i mysql
```

### 2. 配置 mysql 模块

```js
// 导入mysql模块
const mysql = require('mysql')
// 建立与mysql数据库的链接
const db = mysql.createPool({
	host: '127.0.0.1', //数据库IP地址
	user: 'root', //登录数据库的账号
	password: '123456', //登录数据库的密码
	database: 'my_db', //要操作的数据库
})
```

### 3. 测试 mysql 能否正常工作

```js
db.query('select 1', (err, results) => {
	if (err) {
		return console.log(err.message)
	}
	// 只要打印出[RowDataPacket:{'1':1}]的结果，表示数据库连接正常
	console.log(results)
})
```

## 使用 mysql 模块操作数据库

### 1. 查询数据

```js
db.query('SELECT * from users', (err, results) => {
	if (err) return console.log(err.message)
	console.log(results)
})
```

### 2. 插入数据

```js
// 要插入的数据对象
const user = { name: 'jack', password: 'admin123' }
// 定义要执行的SQL语句,?为占位符
const sqlStr = 'insert into users (name,password) values (?,?)'
// 数组内部依次指定?的具体值
db.query(sqlStr, [user.name, user.password], (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) {
		console.log('插入数据成功')
	}
})
```

### 3. 插入数据便捷方式

当数据对象每个属性和数据表字段一一对应时

```js
// 数据对象
const user = { name: 'jack', password: 'admin123' }
const sqlStr = 'indert into users set ?'
// 直接将数据对象当做占位符的值
db.query(sqlStr, user, (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) {
		console.log('插入数据成功')
	}
})
```

### 4. 更新数据

```js
// 数据对象
const user = { name: 'jack', password: 'admin123', id: 4 }
// 待执行SQL语句
const sqlStr = 'update users set name=?, password=? where id=? '
// 执行SQL语句，指定占位符数值
db.qurey(sqlStr, [user.name, user.password, user.id], (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) {
		console.log('修改数据成功')
	}
})
```

### 5. 更新数据便捷方式

当数据对象属性值和数据库表的字段对应时

```js
// 数据对象
const user = { name: 'jack', password: 'admin123', id: 4 }
// 待执行SQL语句
const sqlStr = 'update users set ? where id=?'
// 执行SQL语句，指定占位符
db.query(sqlStr, [user, user.id], (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) {
		console.log('修改数据成功')
	}
})
```

### 6. 删除数据

```js
// 待执行SQL语句
const sqlStr = 'delete from users where id=?'
// 当有多个占位符时，必须使用数组依次指定占位数值
// 当只有一个占位符时，可以省略数组
db.query(sqlStr, 7, (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) {
		console.log('删除数据成功')
	}
})
```

### 7. 标记删除

不正真删除数据，通过 update 更新数据的 status 模拟删除

```js
const sqlStr = 'update users set status=1 where id=?'
// 更新数据状态，并未正真删除
db.query(sqlStr, 6, (err, results) => {
	if (err) return console.log(err.message)
	if (results.affectedRows === 1) {
		console.log('删除成功')
	}
})
```
