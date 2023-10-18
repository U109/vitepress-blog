# express 中间件

## express 中间件初识

中间件作用：多个中间件之间，**共享同一份 req 和 res**。在上游的中间件中，可以统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用

### 1. 全局中间件

客户端发起的任何请求，到达服务器之后，都会触发的中间件

```js
// 定义中间件函数
const mw = (req, res, next) => {
	console.log('hello 中间件')
	next()
}
// 注册中间件
app.use(mw)
```

### 2. 定义多个全局中间件

客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用

```js
// 中间件1
app.use((req, res, next) => {
	console.log('我是中间件1')
	next()
})
// 中间件2
app.use((req, res, next) => {
	console.log('我是中间件2')
	next()
})

// 当请求路由，会依次触发上面的中间件
app.get('/user/list', (req, res) => {
	res.send('user list')
})
```

### 3. 定义局部中间件

不使用 `app.use()` 定义的中间件，叫做局部生效的中间件

```js
// 定义中间件
const mw = (req, res, next) => {
	console.log('我是局部中间件')
}
// mw中间件只会在此路由中生效
app.get('/about', mw, (req, res) => {
	res.send('调用成功')
})
// mw不会影响下面的路由
app.get('/home', (req, res) => {
	res.send('调用成功')
})
```

### 4. 定义多个局部中间件

```js
// 写法1
app.get('/about', mw1, mw2, (req, res) => {
	res.send('调用成功')
})

// 写法2
app.get('/about', [mw1, mw2], (req, res) => {
	res.send('调用成功')
})
```

### 5. 使用中间件注意事项

-   一定要在**路由之前**注册中间件
-   客户端发送过来的请求，可以连续调用多个中间件进行处理
-   执行完中间件的业务代码之后，需要调用 `next()` 函数
-   为了防止代码逻辑混乱，调用 `next()` 函数后不要再写额外的代码
-   连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象

## 中间件的分类

### 1. 应用级别中间件

通过 app.use() 或 app.get() 或 app.post() ，绑定到 app 实例上的中间件，叫做应用级别的中间件

```js
const mw = (req, res, next) => {
	next()
}
// 全局
app.use(mw)
// 局部
app.get('/', mw, (req, res) => {
	res.send('hello')
})
```

### 2. 路由级别中间件

绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件

```js
const app = express()
const router = express.Router()
// 路由级别中间件
router.use((req, res, next) => {
	console.log('hello')
	next()
})

app.use(router)
```

### 3. 错误级别中间件

专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题

-   格式：必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)
-   注意：错误级别的中间件，必须注册在**所有路由之后**

```js
app.get('/', (req, res) => {
	throw new Error('服务器错误')
	res.send('hello')
})

app.use((err, req, res, next) => {
	// 服务器打印错误消息
	console.log('错误:' + err.message)
	// 向客户端发送错误信息
	res.send('error' + err.message)
	next()
})
```

### 4. express 内置中间件

-   `express.static` 快速托管静态资源的内置中间件
-   `express.json` 解析 JSON 格式的请求体数据
-   `express.urlencoded` 解析 URL-encoded 格式的请求体数据

```js
// 配置解析application/json 格式的数据
app.use(express.json())
//配置解析application/x-www-form-urlencoded格式的数据
app.use(express.urlencoded({ extended: false }))
```

### 5. 第三方中间件

使用步骤：

1. npm i xxxx 安装依赖
2. 使用 require 导入
3. 调用 app.use()注册使用

### 6. 自定义中间件

#### 6.1. 监听 req 的 data 事件，获取客户端发送到服务器的数据

如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。所以 data 事件可能会触发多次，每一次触发 data 事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。

```js
// 定义变量，存储客户端发送过来的请求体数据
let str = ''
监听req对象的data事件
req.on('data', (chunk) => {
	// 拼接请求体数据
	str += chunk
})
```

#### 6.2. 监听 req 的 end 事件

当请求体数据接收完毕之后，会自动触发 req 的 end 事件。可以在 req 的 end 事件中，拿到并处理完整的请求体数据

```js
// 监听 req 对象的 end 事件（请求体发送完毕后自动触发）
req.on('end', () => {
	// 拿到完整请求体数据
	console.log(str)
})
```

#### 6.3 使用 querystring 模块解析请求体数据

Node.js 内置 querystring 模块，用来处理查询字符串。通过这个模块提供的 parse() 函数，可以把查询字符串，**解析成对象格式**

```js
const qs = require('querystring')
const body = qs.parse(str)
```

#### 6.4. 将解析出来的数据对象挂载为 req.body

上游的中间件和下游的中间件及路由之间，共享同一份 req 和 res。因此，将解析出来的数据，挂载为 req 的自定义属性，命名为 req.body，供下游使用

```js
req.on('end', () => {
	const body = qs.parse(str)
	req.body = body
	next()
})
```

#### 6.5. 将自定义中间件封装为模块  
   custom.js

```js
const qs = require('querystring')
function customParser = (req,res,next){/* .... */}
module.exports = customParser
```

app.js

```js
const customParser = require('./customParser')
// 注册使用
app.use(customParser)
```
