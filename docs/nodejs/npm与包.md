# npm 与包

## 包的语义化版本规范

以点分十进制定义，例如：2.28.0

-   第一位数：大版本
-   第二位数：功能版本
-   第三位数：bug 修复版本

## 规范的包结构

-   必须以单独的目录存在
-   包的顶级目录下要包含 package.json 配置文件
-   package.json 中需包含 name,version,main 属性，分别代表包名、版本号、包的入口

## npm 镜像源管理

### 1. 切换镜像源

```shell
# 查看当前镜像源
npm config get registry
# 切换淘宝镜像
npm config set registry=https://registry.npm.taobao.org/
# 检查镜像源是否下载成功
npm config get registry
```

### 2. nrm 全局镜像管理工具

```shell
# 安装 nrm 管理工具
npm i nrm -g
# 查看所有可用的镜像源
nrm ls
# 切换下包的镜像源（服务器）
nrm use taobao
```

## 开发自己的包

### 1. 初始化包的结构，包含以下文件

-   package.json （包管理配置文件）
-   index.js （包的入口文件）
-   README （包的说明文档）
-   功能文件

### 2. 初始化 package.json

```json
{
	"name": "xxxx",
	"version": "1.0.0",
	"main": "index.js",
	"description": "....",
	"keywords": ["xxx", "xxx"],
	"license": "ISC"
}
```

### 3. 引用

1. 在 index.js 中导入需要的功能模块
2. 在 index.js 中使用`module.exports`把对应功能共享出去

### 4. 编写 README 说明文档

描述下包的作用、用法、注意事项等信息

### 5. 发布包

#### 1. 注册 npm 账号

https://www.npmjs.com/

#### 2. 登录 npm 账号

终端执行`npm login ` 命令，依次输入账号信息

#### 3. 将包发布到 npm 上

将终端切换到包的根目录，运行`npm publish`

#### 4. 删除已发布的包

运行`npm unpublish` 包名 --force
::: warning 注意
npm unpublish 命令只能删除 72 小时以内发布的包

npm unpublish 删除的包，在 24 小时内不允许重复发布

发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包！
:::
