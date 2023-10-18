:::info 简介
fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求
:::

## 读取指定文件中的内容

### fs.readFile() 的语法格式

```js
fs.readFile(path[,options],callback)
```

-   path：必填，字符串，表示文件路劲
-   options：可选，表示以什么编码格式来读取文件
-   callback：必填，文件读取完成后的回调结果

### 示例代码

```js
const fs = require('fs')

fs.readFile('./files/1.txt', 'utf-8', (err, dataStr) => {
	if (err) {
		console.log('文件读取失败！' + err.message)
	}
	console.log('文件读取成功，结果是：', dataStr)
})
```

## 向指定的文件中写入内容

### fs.writeFile() 的语法格式

```js
fs.writeFile(file,data[,options],callback)
```

-   file：必填，指定文件的字符串，表示文件的存放路径
-   data：必填，表示要写入的内容
-   options：可选，写入文件内容的格式，默认 utf8
-   callback:必填，文件写入完成后的回调

### 示例代码

判断 err 是否为 null，获取写入结果

```js
const fs = require('fs')

fs.writeFile('./files/2.txt', '写入数据...', (err) => {
  if(err){
    return console.log('文件写入失败！'，err.meaasge)
  }
	console.log('文件写入成功')
})
```

### 注意点

1. fs.writeFile() 方法只能用来创建文件，不能用来创建路径
2. 重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容

## fs-路径动态拼接

-   在使用 fs 模块操作文件时，如果提供的操作路径是以 `./` 或 `../` 开头的相对路径时，容易出现路径动态拼接错误的问题
-   解决方案：在使用 fs 模块操作文件时，直接提供完整的路径
-   `__dirname` 当前文件所在文件夹的绝对路径

```js
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, data) {
  ...
})
```
