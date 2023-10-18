# react-router6

## 基本使用

```shell
npm i react-router-dom -S
```

- 注册路由

```jsx
import { NavLink, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

// React 18 默认使用函数式组件了
export default function App() {
  return (
    <div>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/home">Home</NavLink>
      <hr />
      <Routes>
        {/* react5 是 component={xxx}, 现改为 element={<xxx/>} */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
```

- 整体包裹路由器(`BrowserRouter` 或 `HashRouter`)

```js
// 从 react-dom/client 引入 ReactDOM
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// React 18 的语法发生改变了
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## 内置组件

### BrowserRouter&HashRouter

同 React Router5 版本使用一样

### Routes 与 Route

- React Router6 中移除了 `Switch`, 用 `Routes` 代替。
- `Routes` 与 `Route` 配合使用, 且 `Routes` 必须包裹 `Route`

```jsx
<Routes>
  <Route path="/about" element={<About />}></Route>
  <Route path="/home" element={<Home />}></Route>
</Routes>
```

### NavLink(路由高亮)

React Router6 中无法通过 `activeClassName` 来指定激活样式类名, 需要通过函数返回

```jsx
//NavLink 默认激活类名是 active, 自定义类名通过 isActive 来判断添加
<NavLink
  className={({ isActive }) =>
    isActive ? 'list-group-item active_menu' : 'list-group-item'
  }
  to="/about"
>
```

默认情况下, 子路由匹配成功, 父路由导航也会高亮; 给父路由 `NavLink` 上添加 `end` 属性, 则父路由不会一起高亮

```jsx
<NavLink to="home" end>
  home
</NavLink>
```

### Navigate(重定向)

只要`<Navigate>`组件**被渲染** , 就会修改路径 , 切换到对应视图

- 重定向

```jsx{4}
<Routes>
  <Route path="/about" element={<About />}></Route>
  <Route path="/hello" element={<Hello />}></Route>
  <Route path="/" element={<Navigate to="/about" />}></Route>
</Routes>
```

- 根据条件切换

```jsx{6}
export default function Home() {
  const [sum, setSum] = useState(1);
  return (
    <div>
      {/* 根据sum的值决定是否切换视图 */}
      {sum === 1 ? <h4>Messages</h4> : <Navigate to="/about" replace={true} />}
      <button onClick={() => setSum(2)}>将sum变为 2</button>
    </div>
  );
}
```

通过设置 `replace` 控制路由跳转模式, `true` 为 `replace` 模式; 默认是 `push`

## 路由表

将路由规则抽离成单独的一个模块

- 路由表

```js
// routes/index.js
import { Navigate } from "react-router-dom";

import Home from "@/pages/home";
import About from "@/pages/about";

const routes = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];

export default routes;
```

- 引入使用

```js
// App.js
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";

export default function App() {
  // 生成路由规则
  const element = useRoutes(routes);

  return (
    <div>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/hello">Hello</NavLink>
      <hr />
      {element}
      {/* <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes> */}
    </div>
  );
}
```

## Outlet(路由嵌套)

### 常规嵌套

```jsx
<Routes>
  <Route path="about" element={<About />} />
  <Route path="hello" element={<Hello />}>
    <Route path="news" element={<News />} />
    <Route path="message" element={<Message />} />
  </Route>
  <Route path="/" element={<Navigate to="about" />} />
</Routes>
```

### 路由表嵌套

- 路由表

```js
const routes = [
  { path: "/about", element: <About /> },
  {
    path: "/hello",
    element: <Hello />,
    // 定义二级路由，不要加 /
    children: [
      { path: "news", element: <News /> },
      { path: "message", element: <Message /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];
```

- 子组件使用

```jsx{12}
import { NavLink, Outlet } from "react-router-dom";

export default function Hello() {
  return (
    <div>
      <h2>I am Hello!</h2>
      {/* 子路由链接, 可以省略父级前缀 */}
      <NavLink to="news">News</NavLink>
      <NavLink to="message">Message</NavLink>
      <hr />
      {/* 指定路由呈现位置 */}
      <Outlet />
    </div>
  );
}
```

## 路由懒加载

- 路由表

```js
// routes/index.js
import { Navigate } from "react-router-dom";
import { lazy } from "react";

import Login from "@/pages/login";
import Page404 from "@/pages/error-pages/404.jsx";

// 懒加载导入工具函数
const lazyLoad = (moduleName) => {
  const Module = lazy(() => import(`@/pages/${moduleName}`));
  return <Module />;
};

const routes = [
  { path: "login", element: <Login /> },
  {
    path: "profile",
    children: [
      {
        path: "account",
        element: lazyLoad("profile/account"),
      },
      {
        path: "password",
        element: lazyLoad("profile/password"),
      },
    ],
  },
  { path: "*", element: <Page404 /> },
];

export default routes;
```

- 使用

```js
// index.js
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "./App";
import Loading from "./components/Loading";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* 在实现懒加载时，使用 Suspense 包裹路由组件 */}
    {/* fallback 表示是在还没有成功加载路由组件时，会先执行fallback的内容，加载完毕之后才会渲染路由子组件 */}
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
```

## 路由传参

### 1. params 参数

- 路由链接(携带参数):

```js
<Link to={`detail/${name}/${age}`}>详情</Link>
```

- 路由表中(声明接收参数): `path: 'detail/:name/:age'`
- 跳转路由内接收使用:

```jsx
import React from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  // 解构赋值
  const { name, age } = useParams();
  return (
    <div>
      <li>name:{name}</li>
      <li>age:{age}</li>
    </div>
  );
}
```

### search

- 路由链接(携带参数)：

```js
<Link to={`detail?name=${name}&age=${age}`}>详情</Link>
```

- 路由表(无需声明参数)：`path: 'detail'`
- 跳转路由内接收使用：

```jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Detail() {
  // 数组的解构赋值
  const [searchParams, setSearchParams] = useSearchParams();
  // 需要调用 get() 方法获取对应的参数值
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  function change() {
    setSearchParams("name=Jack&age=18");
  }

  return (
    <div>
      <li>name:{name}</li>
      <li>age:{age}</li>
      <button onClick={change}>Change search params</button>
    </div>
  );
}
```

`useSearchParams()` 返回一个数组, 包含 `search` 参数和修改 `search` 参数的方法  
`useLocation().search` 和 `router5` 一样返回 `urlencoded`字符串; 也能得到 `search` 参数

### state

- 路由链接(携带参数)：

```jsx
<Link to="detail" state={{ name: item.name, age: item.age }}>
  详情
</Link>
```

- 路由表(无需声明参数)：`path: 'detail'`
- 跳转路由内接收使用：

```jsx
import { useLocation } from "react-router-dom";

export default function Detail() {
  const {
    state: { name, age },
  } = useLocation();

  return (
    <div>
      <li>name:{name}</li>
      <li>age:{age}</li>
    </div>
  );
}
```

`useLocation()` 返回中包含一个 `state` 对象, 其中包含 `state` 参数

## 编程式导航

通过 `useNavigate()` 函数实现

```jsx
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate();

  function showDetail() {
    navigate("detail", {
      replace: true,
      state: {
        name: "jack",
        age: 18,
      },
    });
  }
  // 前进
  function back() {
    navigate(1);
  }
  // 后退
  function forward() {
    navigate(-1);
  }

  return (
    <div>
      <li>
        <button onClick={() => showDetail()}>查看详情</button>
        <button onClick={back}>后退</button>
        <button onClick={forward}>前进</button>
      </li>
      <Outlet />
    </div>
  );
}
```

:::tip
路由传参时, `useNavigate()` 只接收 `replace` 和 `state` 两个参数; 想要实现`params` 和 `search` 路由传参, 直接拼接在路由 URL 上
:::

## 其它 hooks

### useInRouterContext()

组件如果被 `<BrowserRouter>` 所包裹, 在组件内部调用返回 `true`

### useNavigationType()

跳转到当前页面的方式: `POP`、`PUSH`、`REPLACE`  
`POP` 是指在浏览器中直接打开了这个路由组件（刷新页面）

### useOutlet()

用来呈现当前组件中渲染的嵌套路由

```js
const result = useOutlet();
console.log(result);
// 如果嵌套路由没有挂载,则返回 null
// 如果嵌套路由已经挂载,则展示嵌套的路由对象
```

### useMatch()

返回路由组件的 `match` 数据，即 router5 版本中的 `match` 属性。

必须传入该组件对应的路由规则才能正确返回，否则返回 null

```jsx
import { useMatch } from "react-router-dom";

export default function Detail() {
  const match = useMatch("hello/message/detail/:id/:name/:age");
  console.log(match);
  return (
    <div>
      <li>id</li>
    </div>
  );
}

/*
params: {id: '1', name: 'tom', age: '23'}
pathname: "/hello/message/detail/1/tom/23"
pathnameBase: "/hello/message/detail/1/tom/23"
pattern: {path: 'hello/message/detail/:id/:name/:age', caseSensitive: false, end: true}
*/
```

### useResolvedPath()

给定一个 URL 值，解析其中的：path、search、hash 值

```js
const res = useResolvedPath("/user?id=001&name=Tom#React");
console.log(res);

/*
hash: '#React'
pathname: '/user'
search: '?id=001&name=Tom'
*/
```
