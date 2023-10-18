# Redux

![redux原理](../public/redux%E5%8E%9F%E7%90%86%E5%9B%BE.png)

## action

动作的对象, 传递两个属性

```js
{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }
```

- type: 要执行动作的标识符, 值为字符串且必须
- data: 数据体,任意类型且非必填

## reducer

用于初始化状态、加工状态。加工时，根据旧的 `state` 和 `action`， 产生新的 `state` 的**纯函数**
:::tip
reducer 由 store 自动触发首次调用，传递的 preState 为 `undefined`， action 为 `{type: '@@REDUX/ININT_a.5.v.9'}`
:::

## store

将`state`、`action`、`reducer`联系在一起的对象

```js
import { createStore } from "redux";
// 整合所有 reducer 的汇总
import reducer from "./reducers";
// 创建一个 store来存放应用共用状态
const store = createStore(reducer);
```

创建的 `store` 拥有三个 `Api` 属性:

- getState(): 获取状态 `state`
- dispatch(action): 分发`action`, 触发`reducer`调用, 产生新的`state`
- subscribe(listener): 注册监听, 当产生了新的`state`时, 自动调用

## combineReducers()

合并多个`reducer` 函数

```js
import { combineReducers } from "redux";

import count from "./count";
import persons from "./person";

// 汇总所有reducer为一个总的reducer
export default combineReducers({
  count,
  persons,
});
```

## 基本应用

#### src 目录文件结构

```
src
├── redux
│   ├── constant.js  #action对象中type类型的常量
│   ├── count_reducer.js  #reducer函数
│   ├── count_action.js  #action对象
│   └── store.js  #全局唯一store对象
└── components
    └── Count.jsx  #Count组件
```

- App.jsx

```jsx
import React, { Component } from "react";
import Count from "./components/Count";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}
```

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById("root"));
// 状态改变重新渲染 App 组件
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
```

- constant.js

```js
/* 该模块用于定义action对象中type类型的常量值，目的便于管理,同时防止单词写错 */
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
```

- count_reducer.js

```js
/* 
	1.该文件是用于创建一个为Count组件服务的reducer，本质是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import { INCREMENT, DECREMENT } from "./constant";

const initState = 0; //初始化状态
export default function countReducer(preState = initState, action) {
  //从action对象中获取：type、data
  const { type, data } = action;
  //根据type决定如何加工数据
  switch (type) {
    case INCREMENT: //如果是加
      return preState + data;
    case DECREMENT: //若果是减
      return preState - data;
    default:
      return preState;
  }
}
```

- count_action.js

```js
/* 该文件专门为Count组件生成action对象 */
import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
```

- store.js

```js
/* 该文件用于暴露一个store对象，整个应用只有一个store对象 */

//引入createStore，创建store对象
import { createStore } from "redux";
//引入为Count组件服务的reducer
import countReducer from "./count_reducer";
//暴露store
export default createStore(countReducer);
```

- Count.js

```jsx
import React, { Component } from "react";
//引入store，用于获取redux中保存状态
import store from "@/redux/store";
//引入actionCreator，专门用于创建action对象
import { createIncrementAction, createDecrementAction } from "@/redux/count_action";

export default class Count extends Component {
  /* componentDidMount(){
		//检测redux中状态的变化，只要变化，就调用render
		store.subscribe(()=>{
			this.setState({})
		})
	} */

  //加法
  increment = () => {
    store.dispatch(createIncrementAction(2));
  };
  //减法
  decrement = () => {
    store.dispatch(createDecrementAction(2));
  };
  //异步加
  incrementAsync = () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(2));
    }, 500);
  };

  render() {
    return (
      <div>
        {/* 获取state状态值 */}
        <h1>当前求和为：{store.getState()}</h1>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
```

## Redux 异步编程

异步操作交给 store 处理, 不在组件中操作

```shell
# 异步中间件
npm install redux-thunk -S
```

- 返回异步 action

```js
// count_action.js
import { INCREMENT, DECREMENT } from "./constant.js";
//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
```

- 引入`redux-thunk`，用于支持异步 action

```js
// store.js
import { createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));
```

- 组件内调用

```js
// Count.jsx

//...
// incrementAsync = () => {
//     setTimeout(() => {
//       store.dispatch(createIncrementAction(2));
//     }, 500);
//   };

incrementAsync = () => {
  store.dispatch(createIncrementAsyncAction(1));
};
//...
```
