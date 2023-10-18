# express 接口

## 创建简单接口

router.js

```js{7,19}
const express = require('express')
const userRouter = express.Router()

/* get请求 */
router.get('/user/list',(req,res)=>{
  // 获取客户端查询数据
  const query =  req.query
  // 将处理结果响应给客户端
  res.send({
    status:200,
    msg:'get请求成功'
    data:query
  })
})
/* post请求 */
router.post('/user/create',(req,res)=>{
  // 获取到客户端请求体
  const body = req.body
  响应数据给客户端
  res.send({
    status:200,
    msg:'post请求成功',
    data:body
  })
})
module.exports = userRouter
```

app.js

```js
const express = require('express')
const userRouter = require('./userRouter.js')

// 创建express服务器示例
const app = express()
// 解析x-www-form-urlencoded格式数据
app.use(express.urlencoded({ extended: false }))
// 注册userRouter并添加统一前缀
app.use('/api', userRouter)
app.listen(80, () => {
	console.log('server is running at http://127.0.0.1')
})
```

## cors 跨域资源共享

### 1. 使用

-   安装依赖

```shell
npm i cors
```

-   引用

```js
const cors = require('cors')
// 在所有路由之前配置
app.use(cors())
```

### 2.常见响应头

#### 2.1 _Access-Control-Allow-Origin_

制定了允许访问资源的外域 URL, \* 表示不限制

```js
res.setHeader('Access-Control-Allow-Origin', 'http://xxx.com')
res.setHeader('Access-Control-Allow-Origin', '*')
```

#### 2.2 _Access-Control-Allow-Headers_(定义请求头信息)

默认情况下，CORS 仅支持客户端向服务器发送如下的 9 个请求头

-   Accept
-   Accept-Language
-   Content-Language
-   DPR
-   Downlink
-   Save-Data
-   Viewport-Width
-   Width
-   Content-Type
    -   text/plain
    -   multipart/form-data
    -   application/x-www-form-urlencoded

如果客户端向服务器发送额外的请求头信息，则需要在服务器端，通过 `Access-Control-Allow-Headers` **对额外的请求头进行声明**，否则这次请求会失败！

```js
// 允许客户端额外向服务器发送'Content-Type和X-Custom-Header请求头
// 多个请求头之间用逗号进行分割
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')
```

#### 2.3 _Access-Control-Allow-Methods_

默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求

如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 `Access-Control-Alow-Methods` 来指明实际请求所允许使用的 HTTP 方法。

```js
// 只允许POST, GET, DELETE, HEAD请求方法
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
// 允许所有的请求方法
res.setHEader('Access-Control-Allow-Methods', '*')
```

### 3. cors 请求的分类

#### 3.1 简单请求

同时满足以下两条件，属于简单简单请求：

1. 请求方式：`GET、POST、HEAD` 三者之一
2. HTTP 头部信息不超过以下几种字段：无自定义头部字段、`Accept`、 `Accept-Language`、 `Content-Language`、 `DPR`、 `Downlink`、 `Save-Data`、 `Viewport-Width`、 `Width` 、 `Content-Type`(application/x-www-form-urlencoded、multipart/form-data、text/plain)

#### 3.2 预检请求

只要符合以下任一条件，都需要进行预检请求：

1. 请求方式为 GET、POST、HEAD 之外的请求 Method 类型
2. 请求头中包含自定义头部字段
3. 向服务器发送了 `application/json` 格式的数据

:::info
在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。 服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据
:::

#### 3.3 二者区别

-   简单请求：客户端与服务器之间只会发生一次请求。
-   预检请求：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求
