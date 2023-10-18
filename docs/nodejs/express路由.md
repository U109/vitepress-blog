# Express 路由

在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。

## 匹配过程

每当一个请求到达服务器后，先经过路由的匹配，匹配成功之后，才会调用对应的处理函数

-   按照定义的先后顺序进行匹配
-   请求类型和请求的 URL 同时匹配成功，才会调用对应的处理函数

## 模块化路由

### 1. 创建路由模块 router.js

```js
const express = require('express')
// 创建路由对象
const router = express.Router()
// 挂载获取用户列表的路由
router.get('/user/list', (req, res) => {
	res.send('user list')
})
// 挂载添加用户的路由
router.post('./user/create', (res, res) => {
	res.send('add new user')
})
// 向外导出路由对象
module.exports = router
```

### 2. main.js 中注册路由模块

```js
const express = require('express')
const router = require('./router.js')

const app = express()
// 注册路由模块
app.use(router)

app.listen(80, () => {
	console.log('server is running')
})
```

## 路由模块添加前缀

```js
const express = require('express')
const router = require('./router.js')

const app = express()
// 添加统一的前缀
app.use('/api', router)
```
