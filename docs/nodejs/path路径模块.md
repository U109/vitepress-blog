:::info 简介
path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理
:::

## path.join()

把多个路径片段拼接为完整的路径字符串

-   为什么不使用路径拼接

    1. 对于 Windows 支持。Windows 使用反斜杠（\）而不是正斜杠（/）作为路径分隔符
    2. 用于处理边缘情况，例如重复的路径分隔符、开头结尾的斜杠

示例：

```js
const path = require('path')
const fs = require('fs')

// ../ 会抵消前面的路径
// ./ 会被忽略
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr) // \a\d\e
```

## path.resolve()

把一个路径或多个路径解析为一个绝对路径

1. 给定路径序列从右往左执行，直到构成绝对路径

```js
//遇到 '/' 开头，直接返回
path.resolve('foo', '/baz', 'bar') // 'C:\baz\bar'
```

2. 如果处理完所有的路径后还未生成绝对路径，会加上当前工作目录(绝对路径)

```js
path.resolve('bar', 'baz', 'foo')
// 'C:\Users\Desktop\Node_study\Node\5.path\bar\baz\foo'
```

3. 生成的路径是规范化后的，且末尾的斜杠会被删除，除非路径被解析为根目录

```js
path.resolve('/foo', 'bar/', 'baz/')
// 'C:\foo\bar\baz'
// 注意：foo前面的 '/' 代表根目录，即'C:'; 并且baz末尾的斜线会删除

path.resolve('/')
// 'C:\' 如果路径为根路径，末尾的斜线不会删除
```

4. 长度为零的 path 会被忽略

```js
path.resolve('foo', '/baz', '', 'bar')
// 'C:\baz\bar'
```

5. 如果没有传入 path 片段，则 resolve 会返回当前工作目录的绝对路径

```js
path.resolve()
// 'C:\Users\Desktop\Node_study\Node\5.path'
```

## path.dirname()

获取文件的父文件夹，例：

```js
const path = require('path')

const notes = '/users/joe/notes.txt'
path.dirname(notes) // /users/joe
```

## path.basename()

用来获取路径中的最后一部分，常通过该方法获取路径中的文件名

```js
path.basename(path[, ext])
```

-   path：文件路径
-   ext：扩展名（指定获取不带扩展名的文件名）

示例：

```js
const path = require('path')

const notes = '/users/joe/notes.txt'
path.basename(notes) // notes.txt
path.basename(notes, '.txt') //notes
```

## path.extname()

获取路径中的扩展名，例：

```js
const path = require('path')

const notes = '/users/joe/notes.txt'
path.extname(notes) // .txt
```
