# React Redux

React-Redux 是一个插件库，用于简化 React 中使用 Redux

## 概念

![react-redux概念](../public/react-redux%E6%A8%A1%E5%9E%8B%E5%9B%BE.png)

### UI 组件

- 只负责 UI 的呈现，不带有任何业务逻辑
- 通过 props 接收数据(一般数据和函数)
- 不使用任何 Redux 的 API

### 容器组件

- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 使用 Redux 的 API

## 基本使用

#### 容器组件

```js
// count/index.js
import CountUI from "./CountUI";
import { connect } from "react-redux";
// 存放action的方法, 参考redux
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "@/redux/count_action";

/*
 * 1.返回的是一个对象, 用于传递状态
 * 2.返回的对象中的key、value分别作为传递给UI组件props的key、value
 */
function mapStateToProps(state) {
  return { count: state };
}
/*
 * 1.返回的是一个对象；用于传递操作状态的方法
 * 2.返回的对象中的key、value分别作为传递给UI组件props的key、value
 */
function mapDispatchToProps(dispatch) {
  return {
    add: (number) => dispatch(createIncrementAction(number)),
    sub: (number) => dispatch(createDecrementAction(number)),
    addAsync: (number) => dispatch(createIncrementAsyncAction(number, time)),
  };
}
/**
 * 使用connect()()创建并暴露一个Count的容器组件
 * 传递store中的state和dispatch, 分别作为mapStateToProps和mapDispatchToProps的参数
 */
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
```

#### 调用并向容器组件传递`store`

容器组件中的 `store` 是靠 `props` 传进去，而不是在容器组件中直接引入

```js
// App.jsx
import React, { Component } from "react";
import Count from "@/count/index.js"; //容器组件
import store from "@/redux/store.js"; //全局store对象

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    );
  }
}
```

#### UI 组件

```jsx
// count/CountUI.jsx
import React, { Component } from "react";

export default class Count extends Component {
  increment = () => {
    this.props.add(2);
  };
  decrement = () => {
    this.props.sub(2);
  };
  incrementAsync = () => {
    this.props.addAsync(2, 500);
  };

  render() {
    return (
      <div>
        {/* 此处 count 是容器组件传递而来 */}
        <h1>当前求和为：{this.props.count}</h1>
        <button onClick={this.increment}>加</button>&nbsp;
        <button onClick={this.decrement}>减</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
```

## 优化

### 简化写法

`mapDispatchToProps` 可以写成对象形式，React-Redux 底层会帮助自动分发

```js
// 直接把两个方法写在 connect 内部
export default connect((state) => ({ count: state }), {
  add: createIncrementAction,
  sub: createDecrementAction,
  addAsync: createIncrementAsyncAction,
})(CountUI);
```

### 使用 Provider 组件

用`Provider`包裹 `<App/>` 让所有组件都可以得到 `state` 数据

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### 整合 UI 组件和容器组件

将 UI 组件和容器组件放在同一个文件中, 最终只暴露容器组件

```js
import React, { Component } from "react";
import { createIncrementAction, createDecrementAction } from "@/redux/count_action";
import { connect } from "react-redux";

// 定义 UI 组件
class Count extends Component {
  // ...
}
// 创建容器组件
export default connect((state) => ({ count: state }), {
  add: createIncrementAction,
  sub: createDecrementAction,
})(Count);
```

## 多组件数据共享

- 目录结构

```
src
├── redux
│   ├── actions #存放各个组件action
│   │   ├── count.js
│   │   └── person.js
│   ├── reducers #存放各个组件reducer
│   │   ├── count.js
│   │   └── person.js
│   └── store.js #全局唯一store对象
└── pages
    ├── Count.jsx #count容器组件
    └── Person.jsx #person容器组件
```

#### 1. 创建 store 对象, 合并所有 reducer

```js
// redux/store.js

import { createStore, combineReducers } from "redux";
//引入为Count组件服务的reducer
import countReducer from "./reducers/count";
//引入为Count组件服务的reducer
import personReducer from "./reducers/person";

//汇总所有的reducer变为一个总的reducer, 各个reducer名称自定义
const allReducer = combineReducers({
  total: countReducer,
  personList: personReducer,
});

//暴露store
export default createStore(allReducer);
```

#### 2. 组件内部调用

```jsx
// person 组件
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddPersonAction } from "@/redux/actions/person";

class Person extends Component {
  addPerson = () => {
    this.props.addPerson({ id: "007", name: "tom", age: 28 });
  };
  render() {
    return (
      <div>
        <h2>people列表</h2>
        <h4>当前求和为{this.props.count}</h4>
        <button onClick={this.addPerson}>添加</button>
        {this.props.persons.map((item) => {
          return (
            <li key={item.id}>
              {item.name}---{item.age}
            </li>
          );
        })}
      </div>
    );
  }
}

// 从 Redux 中取出所需要的状态数据, 传递给UI组件
const mapStateToProps = (state) => ({
  persons: state.personList,
  count: state.total,
});
const mapDispatchToProps = { addPerson: createAddPersonAction };
export default connect(mapStateToProps, mapDispatchToProps)(Person);
```

:::tip 注意
组件的 reducer 文件修改状态值时，如果只改变值而引用地址依旧相同, `React`不会检测更新重新渲染页面，如下方式一会重新渲染页面，而方式二不会
:::

```js
// 方式一
switch (type) {
  case ADD_PERSON:
    return [data, ...preState];
  default:
    return preState;
}

// 方式二
switch (type) {
  case ADD_PERSON:
    preState.unshift(data);
    return preState;
  default:
    return preState;
}
```

## Redux 开发者工具

Chrome 安装 Redux DevTools 开发者工具, 项目中安装依赖:

```shell
npm i redux-devtools-extension --save-dev
```

在`redux/store.js`中配置

```js
import { composeWithDevTools } from 'redux-devtools-extension'
...
export default createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)))
// 不需要异步中间件
export default createStore(Reducers, composeWithDevTools())
```

## React Redux8.x 最新

> 最新的 React Redux8.x 需要 React16.x 以上的版本, 写法与旧版有所不同, 更精简易用。官方文档有详细的使用教程 : [官方中文文档](https://cn.react-redux.js.org/introduction/getting-started)
