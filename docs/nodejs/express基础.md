# Express 基础

## 基本使用

### 一、安装

在项目根目录运行下面命令

```shell
npm i express
```

### 二、创建基本的 web 服务

```js
// 导入express
const express = require('express')
// 创建web服务器
const app = express()
// 调用app.listen(端口号)，启动服务器
app.listen(80, () => {
	console.log('express server running at http://127.0.0.1')
})

// 监听get请求
app.get('/user', (req, res) => {
	// 向客户端返回数据
	res.send({ name: 'jack', age: 23 })
})

// 监听post请求
app.post('/about', (req, res) => {
	res.send('请求成功！')
})
```

### 三、获取 url 中携带的查询参数

```js
app.get('/', (req, res) => {
	// req.query 默认是空对象
	// url请求：?name=zhang&age=28
	console.log(req.query) //{name:zhang,age:28}
})
```

### 四、获取 url 中的动态参数

```js
app.get('/user:id', (req, res) => {
	// url请求：http://xxx/user/12
	console.log(req.params) //{ id: '12' }
})
```

## 托管静态资源

通过 `express.static` 创建静态资源服务器

### 1. express.static

```js
// 将public文件夹作为对外开放的静态资源服务器
app.use(express.static('/public'))

// 可以访问public下的资源
// http://localhost:3000/images/bg.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/login.js
```

::: warning 注意
Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。 **存放静态文件的目录名不会出现在 URL 中**
:::

### 2. 托管多个静态资源目录

-   如果要托管多个静态资源目录，需多次调用 express.static() 函数

```js
app.use(express.static('/public'))
app.use(express.static('/files'))
```

-   如果静态资源服务器内部存在相同文件名，则按照托管目录的先后顺序加载

### 3. 挂载路径前缀

```js
app.use('/public', express.static('public'))
// 可以访问public下的资源
// http://localhost:3000/public/images/bg.jpg
// http://localhost:3000/public/css/style.css
// http://localhost:3000/public/js/login.js
```

## nodemon

nodemon 能够监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目

-   安装

```shell
npm i -g nodemon
```

-   使用

```shell
node app.js
# 将上面命令替换为如下命令，实现自动重启项目
nodemon app.js
```
