:::info 简介
http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，可以模拟 Web 服务器，提供 Web 资源服务
:::

## 创建基本 web 服务器

### 基本步骤

```js
const http = require('http')

// 创建 web 服务器实例
const server = http.createServer()
// 使用server的.on方法，为服务器绑定一个request事件
server.on('request', (req, res) => {
	// 只要客户端请求服务器，就会触发request事件，执行回调
	console.log('someone visit our server')
})

// 调用服务器实例的 .listen() 方法，启动当前的 web 服务器实例
server.listen('8080', () => {
	console.log('server running at http://127.0.0.1')
})
```

### req 请求对象

可以访问与客户端相关的数据或属性

```js
server.on('request', (req) => {
	// req.url为客户端请求的url地址(文档好像改成req.path)
	// req.methods是客户端请求的方法
	const str = `request url is ${req.url},request method is ${req.method}`
})
```

### res 响应对象

可以访问与服务器相关的数据或属性

```js
server.on('request', (req, res) => {
	const str = `request url is ${req.url},request method is ${req.method}`
	// 设置 Content-Type 响应头，可以解决中文乱码的问题
	res.setHeader('Content-Type', 'text/html; charset=utf-8')
	// 向客户端发送指定内容，并结束这次请求处理
	res.end(str)
})
```
