# nodejs 中的模块化

## 模块分类

### 内置模块

-   node.js 官方提供的内置模块，加载优先级最高
-   即使存在第三方模块名称相同，始终返回内置模块

### 自定义模块（用户创建的.js 文件）

-   加载自定义模块 require，要以`./`，`../`路径标识符开头，否则会被当做内置或第三方模块
-   使用 `require()` 导入自定义模块时，若省略文件扩展名，则 Node.js 会按顺序分别尝试加载以下的文件
-   确切的文件名称 => 补全.js 扩展名加载 => 补全.json 扩展名加载
    => 补全.node 扩展名加载 => 加载失败，报错

### 第三发模块（由第三方开发的模块，使用前需要下载依赖）

-   优先在当前模块的父目录，尝试从 node_modules 文件夹中加载第三方模块
-   若当前目录下没找到，则移动到上一层父目录，直至文件夹的根目录

## 加载模块

```js
// 加载内置的模块
const fs = require('fs')
// 加载用户自定义模块
const custom = require('./custom.js')
// 加载第三方模块
const moment = requrie('moment')
```

:::tip
使用 require() 方法加载其它模块时，会执行被加载模块中的代码
:::

### 优先从缓存中加载

-   模块在第一次被加载后会被缓存，之后即使多次调用 require，不会导致模块代码被执行多次
-   不论是内置模块、用户自定义模块、第三方模块，都会优先从缓存中加载

### 文件目录作为加载模块

-   在被加载的目录下找到 package.json 文件,寻找 main 属性，作为加载的入口
-   如果没有 package.json 文件，或者 main 入口不存在或者解析失败，则尝试加载根目录下的 index.js 文件
-   上面两种不通则会报错

## 模块作用域

类似函数作用域，自定义模块中定义的成员、方法名等，只能在当前模块内访问。

custom.js

```js
const username = 'jack'
function Hello() {
	console.log('hello nodejs')
}
```

main.js

```js
const custom = require('./custom.js')
// custom中没有暴露，无法访问其中的私有变量
console.log(custom) //{}
```

**好处：** 防止全局变量污染

## 向外共享模块中的对象或变量

### 1. module 对象

每个.js 自定义模块中都有一个 module 对象，存储了和当前模块有关的信息

```js
Module{

...
id:'',
exports:{}
...

}
```

### 2. module.exports

共享模块内的变量、对象，供外界使用。外界用 require()导入得到 module.exports**所指向的对象**
::: tip 注意点：
使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准
:::
custom.js

```js
module.exports.username = 'tom'
module.exports.fn1 = (){
  console.log('hello nodejs')
}
module.exports = {
  username:'jack',
  fn2(){
    console.log('hi react')
  }
}

```

main.js

```js
const custom  require('./custom.js')
console.log(custom)// {username:jack, fn2:[Function: fn2]}
```

### 3. exports

为了简化向外共享成员的代码，默认和 module.exports 指向同一个对象.区别在于它公开的是它**指向的对象的属性**

### 4. exports 和 module.exports

最终指向结果永远以 module.exports 指向为准，以下示例：

```js
exports.name = 'jack'

module.exports = {
	sex: 'man',
	age: 23,
}
// 引用结果：{sex:'man',age:23}
```

```js
module.exports.name = 'jack'

exports = {
	sex: 'man',
	age: 23,
}
// 引用结果：{name:'jack'}
```

```js
exports.name = 'jack'

module.exports.sex = 'man'
// 引用结果：{sex:'man',name:'jack'}
```

::: warning 注意
为了防止混乱，建议不要在同一个模块中同时使用 exports 和 module.exports
:::
