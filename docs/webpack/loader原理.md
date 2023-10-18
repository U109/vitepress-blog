# loader 原理

帮助 webpack 将不同类型的文件转换为 webpack 可识别的模块

## 执行顺序

- 不同级别的 `loader` 优先级如下
  1. pre（前置 loader）
  2. normal（普通 loader）
  3. inline（内联 loader）
  4. post（后置 loader）
- 相同级别的 `loader` 执行顺序为**从右到左，从下至上**

例：

```js
// 调用顺序为：loader3 - loader2 - loader1
module: {
  rules: [
    { test: /\.js$/, loader: "loader1" },
    { test: /\.js$/, loader: "loader2" },
    { test: /\.js$/, loader: "loader3" },
  ];
}
```

```js
// 执行顺序为：loader1-loader2-loader3
module: {
  rules: [
    { enforce: "pre", test: /\.js$/, loader: "loader1" },
    //没enforce，默认normal
    { test: /\.js$/, loader: "loader2" },
    { enforce: "post", test: /\.js$/, loader: "loader3" },
  ];
}
```

- `inline loader` 可以通过添加不同前缀，跳过其他类型 loader
  - `!` 跳过 normal loader
  - `-!` 跳过 pre 和 normal loader
  - `!!` 跳过 pre、 normal 和 post loader

## loader 格式

接受要处理的源码作为参数，输出转换后的 js 代码

```js
// loaders/loader1.js
module.exports = function loader1(content, map, meta) {
  console.log("this is loader1");
  return content;
};
```

接收参数:

- `content` 源文件的内容
- `map` SourceMap 数据
- `meta` 数据，可以是任何内容

## loader 分类

### 1. 同步 loader

无论是 `return` 还是 `this.callback` 都可以同步地返回转换后的 content 值

```js
module.exports = function (content, map, meta) {
  return someSyncOperation(content);
};
```

`this.callback` 方法则更灵活，因为它允许传递多个参数，而不仅仅是 `content`

```js
module.exports = function (content, map, meta) {
  this.callback(null, someSyncOperation(content), map, meta);
  return; // 当调用 callback() 函数时，总是返回 undefined
};
```

### 2. 异步 loader

```js
module.exports = function (content, map, meta) {
  const callback = this.async();
  // 进行异步操作
  setTimeout(() => {
    callback(null, result, map, meta);
  }, 1000);
};
```

::: tip
由于同步计算过于耗时，在 Node.js 这样的单线程环境下进行此操作并不是好的方案，建议尽可能地使 loader 异步化。但如果计算量很小，同步 loader 也是可以的
:::

### 3. Raw loader

默认情况下，资源文件会被转化为 UTF-8 字符串，然后传给 loader。通过设置 raw 为 true，loader 可以接收原始的 Buffer

```js
module.exports = function (content) {
  // content是一个Buffer数据
  return content;
};
module.exports.raw = true; // 开启 Raw Loader
```

### 4. Pitching loader

当 loader 只关心 request 后面的 元数据(metadata)，并且忽略前一个 loader 的结果。在实际（从右到左）执行 loader 之前，会先 从左到右 调用 loader 上的 pitch 方法

```js
module.exports = function (content) {
  return content;
};
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("do somethings");
};
```

- webpack 会先**从左到右**执行 loader 链中的每个 loader 上的 `pitch` 方法（如果有），然后再**从右到左**执行 loader 链中的每个 loader 上的普通 loader 方法
- 在这个过程中如果任何 `pitch` 有返回值，则 loader 链被阻断。webpack 会跳过后面所有的的 `pitch` 和 loader，直接进入上一个 loader
  ![pitch](../public/webpack-pitch.png)

> loader 相关 Api [webpack 官网文档 loader Context](https://webpack.docschina.org/api/loaders/#the-loader-context)

## 简单 loader 实现

### 1. clean-log-loader

清理 js 代码中的 `console.log`

- loader

```js
// ./loaders/clean-log-loader.js
module.exports = function cleanLogLoader(content) {
  // 将console.log替换为空
  return content.replace(/console\.log\(.*\);?/g, "");
};
```

- 使用

```js
module: {
  rules: [{ test: /\.js$/, loader: "./loaders/clean-log-loader.js" }];
}
```

### 2. banner-loader

给 js 代码添加文本注释

- loader

```js
// loaders/banner-loader/index.js
const schema = require("./schema.json");

module.exports = function (content) {
  // 获取loader的options，同时对options内容进行校验
  // schema是options的校验规则（符合 JSON schema 规则）
  const options = this.getOptions(schema);
  const prefix = `
    /*
    * Author: ${options.author}
    */
  `;
  return `${prefix} \n ${content}`;
};
```

- 校验 JSON

```json
// loaders/banner-loader/schema.json
{
  "type": "object",
  "properties": {
    "author": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

- 使用

```js
rules: [
  {
    test: /\.js$/,
    loader: "./loaders/banner-loader",
    options: {
      author: "jack",
    },
  },
];
```

### 3. babel-loader

编译 js 代码，将 ES6+语法编译成 ES5-语法

- 安装依赖

```shell
npm i @babel/core @babel/preset-env -D
```

- 校验 JSON

```json
{
  "type": "object",
  "properties": {
    "presets": {
      "type": "array"
    }
  },
  "additionalProperties": true
}
```

- loader

```js
const schema = require("./schema.json");
const babel = require("@babel/core");

module.exports = function (content) {
  const options = this.getOptions(schema);
  // 使用异步loader
  const callback = this.async();
  // 使用babel对js代码进行编译
  babel.transform(content, options, function (err, result) {
    callback(err, result.code);
  });
};
```

- 使用

```js
rules: [
  {
    test: /\.js$/,
    loader: "./loaders/babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
];
```

### 4. file-loader

将文件原封不动输出出去

- loader

```js
const loaderUtils = require("loader-utils");

module.exports = function (content) {
  // 1、根据文件生成带hash值的文件名
  const fileHashName = loaderUtils.interpolateName(this, "[hash].[ext]", {
    content,
  });
  // 2、将文件输出出去
  this.emitFile(fileHashName, content);
  // 3、返回module.exports=“文件路径”
  return `module.exports = "${fileHashName}"`;
};
// loader 解决的是二进制的内容, 图片是 Buffer 数据
module.exports.raw = true;
```

- 使用

```js
rules: [
  {
    test: /\.(jp?eg|png|svg|gif)$/,
    loader: "./loaders/file-loader",
    type: "javascript/auto", // 解决图片重复打包问题
  },
];
```

### 5. style-loader

动态创建 style 标签，插入 js 中的样式代码，使样式生效

- loader

```js
const styleLoader = (content) => {
  /**
   * 此处 content 是经过 css-loader 编译处理后的内容
   * 返回内容为js脚本，非样式内容，处理起来较为复杂
   */
};
styleLoader.pitch = (remainingRequest) => {
  /**
   *remainingRequest 表示剩余需要处理loader的绝对路径字符串，以 ! 分割
   *D:\xxx\node_modules\css-loader\dist\cjs.js!D:\xxx\src\css\index.css
   */
  /**
   * remainingRequest路径为window磁盘路径
   * 需要将remainingRequest转化为相对路径，能够被webpack解析
   * 转换结果：'../../node_modules/css-loader/dist/cjs.js!./index.css'
   */
  const relativeRequest = remainingRequest
    .split("!")
    .map((path) => {
      // 将路径转化为相对路径
      const relativePath = this.utils.contextify(this.context, part);
      return relativePath;
    })
    .join("!");
  /**
   * !! 不再使用其他的 loader，只使用inline loader
   * 如果不加上，此处因为引入css，又会执行 style-loader 中 pitch 方法，会导致死循环
   */
  const script = `
	import style from "!!${relativeRequest}"
	const styleEl = document.createElement('style')
	styleEl.innerHTML = style
	document.head.appenChild(styleEl)
  `;

  /**
   * pitch-loader执行了熔断，所以立马返回执行上一个 normal-loader,
   * 由于 style-loader 是第一个，所以直接返回 pitch 的内容给 webpack 编译
   */
  return script;
};
module.exports = styleLoader;
```

- 使用

```js
rules: [
  {
    test: /\.css$/,
    use: ["./loaders/style-loader", "css-loader"],
  },
];
```
