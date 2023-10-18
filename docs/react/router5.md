# router5

## 基本使用

```shell
# 安装 5.X 版本路由
npm install react-router-dom@5 -S
```

注册路由:

```jsx
// App.jsx
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
	render() {
		return (
			<div>
				{/* 路由连接 */}
				<div className="list-group">
					<Link className="list-group-item" to="/about">
						About
					</Link>
					<Link className="list-group-item" to="/home">
						Home
					</Link>
				</div>
				{/* 页面展示 */}
				<div className="panel-body">
					<Route path="/about" component={About} />
					<Route path="/home" component={Home} />
				</div>
			</div>
		)
	}
}
```

整体包裹路由器(`BrowserRouter` 或 `HashRouter`):

```js{9-11}
// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
```

## 路由组件和一般组件区别

### 1. 引用形式不同

-   一般组件 : `<Home/>`
-   路由组件 : `<Route path="/demo" component={Home}/>`

### 2. 文件位置不同

-   一般组件: 通常存放在 `components` 下
-   路由组件: 一般被当做**路由页面**使用, 存放在 `pages` 文件夹下

### 3. 接收到的 props 不同

-   一般组件: 接收组件标签传递的内容
-   路由组件: 接收到三个固定属性

    1. history

    ```
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
    ```

    2. location

    ```
    pathname: "/about"
    search: ""
    state: undefined
    ```

    3. match

    ```
    params: {}
    path: "/about"
    url: "/about"
    ```

## 路由内置组件

### 1. NavLink

可以使激活的**路由链接**高亮，通过 `activeClassName` 来指定激活样式类名, 默认激活类名为 `active`

```jsx
<NavLink activeClassName="demo" to="/about">About</NavLink>
<NavLink activeClassName="demo" to="/home">Home</NavLink>
```

-   封装 `myNavlink` 组件, 提取相同的属性; 使用组件时只需配置路径名和路由名称

```jsx{6-9}
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
	render() {
		// this.props.children 可以取到传递的标签体文本内容，如 About, Home
		// 指定 this.props.children 同样可以写入标签体文本
		return <NavLink activeClassName="demo" {...this.props} />
	}
}
```

```jsx
// 调用
<MyNavLink to="/about">About</MyNavLink>
<MyNavLink to="/home">Home</MyNavLink>
```

### 2. Switch

路由匹配会**检索所有路由**, 即使匹配到正确路由, 还会继续向下检索; `Switch` 表示只要匹配到相应路由, 就不在继续检索, 提高匹配效率

```jsx
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class demo extends Component {
	render() {
		return (
			<div>
				{/* .... */}
				<Switch>
					<Route path="/about" component="{About}" />
					<Route path="/home" component="{Home}" />
					<Route path="/home" component="{Test}" />
				</Switch>
			</div>
		)
	}
}
```

### 3. Redirect

当所有路由匹配失败时, 跳转到指定路由页面

```jsx{4}
<Switch>
	<Route path="/about" component="{About}" />
	<Route path="/home" component="{Home}" />
	<Redirect to="/about" />
</Switch>
```

### 4. BrowserRouter 和 HashRouter

1. 底层原理:
    - `BrowserRouter` 使用的是 H5 的 history API，不兼容 IE9 及以下版本
    - `HashRouter` 使用的是 URL 的哈希值
2. `path` 表现形式:
    - `BrowserRouter` 的路径中没有 # ，如：`localhost:3000/demo/test`
    - `HashRouter` 的路径包含#，如：`localhost:3000/#/demo/test`
3. 刷新后对路由 `state` 参数影响:
    - `BrowserRouter` 没有影响，因为 state 保存在 history 对象中
    - `HashRouter` 刷新后会导致路由 state 参数的丢失！

### 5. withRouter

加工一般组件, 使其具备路由组件所持有的 API, 返回值是一个新组件

```jsx

import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  ...
}

export default withRouter(Header)
```

## 其他特性

### 模糊匹配和严格匹配

-   模糊匹配(默认)  
    输入的路径须包含要匹配的路径，且顺序一致

```jsx
export default class App extends Component {
	render() {
		return (
			<div>
				{/* 链接 */}
				<Link to="/home/a/b">Home</Link>
				{/* 页面 */}
				<Route path="/home" component={Home} />
			</div>
		)
	}
}
```

-   严格匹配  
    输入的路径必须和要匹配的路径完全一致, 且需要时再开启, 否则会导致无法继续匹配**二级路由**

```jsx
<Route exact path="/about" component={About} />
```

### 样式丢失问题

跳转多级路径后, 刷新页面样式会丢失(新版本已经修复), 解决方法:

1. _public/index.html_ 中 引入样式时不写 `./` 写 `/` （常用）
2. _public/index.html_ 中 引入样式时不写 `./` 写 `%PUBLIC_URL%` （常用）
3. 使用 `HashRouter`

```html
<!-- index.html -->
<!-- 第一种 -->
<link rel="stylesheet" href="/css/bootstrap.css" />
<!-- 第二种 -->
<link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css" />
```

## 嵌套路由

注册子路由时要写上**父路由**的 `path` 值; 路由的匹配按照**注册路由的顺序**进行

-   父组件

```jsx
//...
export default class Farther extends Component {
	render() {
		return (
			<div>
				{/* 路由链接 */}
				<NavLink to="/about">About</NavLink>
				<NavLink to="/home">Home</NavLink>
				{/* 页面 */}
				<Route path="/about" component="{About}" />
				<Route path="/home" component="{Home}" />
			</div>
		)
	}
}
```

-   子组件

```jsx{8-9}
// home.js
// ...
export default class Son extends Component {
	render() {
		return (
			<div>
				{/* 路由链接 */}
				<NavLink to="/home/news">News</NavLink>
				<NavLink to="/home/message">Message</NavLink>
				{/* 页面 */}
				<Route path="/home/news" component="{News}" />
				<Route path="/home/message" component="{Message}" />
			</div>
		)
	}
}
```

## 路由传参

### 1. params 参数

-   路由链接(携带参数): `<Link to='/demo/test/tom/18'}>详情</Link>`
-   注册路由(声明接收参数): `<Route path="/demo/test/:name/:age" component={Test}/>`
-   跳转路由内接收使用: `this.props.match.params`

### 2. search 参数

-   路由链接(携带参数)：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`
-   注册路由(无需声明参数)：`<Route path="/demo/test" component={Test}/>`
-   跳转路由内接收使用：`this.props.location.search`

> tip：获取到的 search 是 urlencoded 编码字符串，需要借助 querystring 解析: `qs.parse(xxx)`

### 3. state 参数

-   路由链接(携带参数)：

```
<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
```

-   注册路由(无需声明参数)：`<Route path="/demo/test" component={Test}/>`
-   跳转路由内接收使用：`this.props.location.state`

> 备注：刷新也可以保留住参数, 保存在浏览器 history 中

## 编程式导航

-   借助 `this.props.history` 对象上的 API 对操作路由跳转、前进、后退

```js
this.props.history.push()
this.props.history.replace()
this.props.history.goBack()
this.props.history.goForward()
this.props.history.go()
```

-   传递参数

```js
// params
this.props.history.push(`/home/message/detail/${id}/${title}`)
// search
this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
// state
this.props.history.push(`/home/message/detail`, { id: id, title: title })
```
