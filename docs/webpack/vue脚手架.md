# Vue 脚手架

## 目录结构

```
react_cli
    ├─ node_modules
    ├─ config
    │  ├─ webpack.config.common.js #公共配置
    │  ├─ webpack.dev.js #开发配置
    │  └─ webpack.prod.js #生产配置
    ├─ public
    │  ├─ favicon.ico
    │  └─ index.html
    ├─ src
    │  ├─ views
    │  ├─ router
    │  │  └─ index.js
    │  ├─ main.js
    │  └─ App.vue
    ├─ .eslintrc.js
    ├─ babel.config.js
    └─ package.json
```

## 公共配置

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

// 样式处理函数
const getStyleLoader = () => {
	return [
		isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: ['postcss-preset-env'], //处理绝大多数样式兼容问题
				},
			},
		},
	]
}
module.exports = {
	entry: './src/main.js',

	// 解析器
	module: {
		rules: [
			{
				oneOf: [
					{ test: /\.css$/, use: [...getStyleLoader()] },
					{
						test: /\.less$/,
						use: [...getStyleLoader(), 'less-loader'],
					},
					{
						test: /\.s[ac]ss$/,
						use: [...getStyleLoader(), 'sass-loader'],
					},
					{
						test: /\.(jpe?g|png|gif|svg)$/,
						type: 'asset',
						parser: {
							dataUrlCondition: {
								maxSize: 10 * 1024, //小于10kb的图片将会被转化为base64格式
							},
						},
					},
					{
						test: /\.(ttf|woff2?)$/,
						type: 'asset/resource',
					},
					{
						test: /\.js$/,
						include: path.resolve(__dirname, '../src'),
						loader: 'babel-loader',
						options: {
							cacheDirectory: true, //开启缓存
							cacheCompression: false, //关闭缓存压缩
						},
					},
				],
			},
			//vue-loader 不支持oneOf
			{
				test: /\.vue$/,
				loader: 'vue-loader', //该插件内部会给vue文件注入HMR功能
				options: {
					//开启缓存
					cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/vue-loader'),
				},
			},
		],
	},
	// 插件
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
		}),
		new EslintWebpackPlugin({
			context: path.resolve(__dirname, '../src'),
			exclude: 'node_modules',
			cache: true,
			cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
		}),
		// 处理vue文件
		new VueLoaderPlugin(),
		// 解决页面警告
		new DefinePlugin({
			__VUE_OPTIONS_API__: 'true',
			__VUE_PROD_DEVTOOLS__: 'false',
		}),
	],
	// 优化
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				elementUI: {
					name: 'chunk-elementPlus',
					test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
					priority: 30,
				},
				vue: {
					name: 'vue',
					test: /[\\/]node_modules[\\/]vue(.*)[\\/]/,
					chunks: 'initial',
					priority: 20,
				},
				libs: {
					name: 'chunk-libs',
					test: /[\\/]node_modules[\\/]/,
					priority: 10, // 权重最低，优先考虑前面内容
					chunks: 'initial',
				},
			},
		},
	},

	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			'@': path.resolve(__dirname, '../src'),
		},
	},
}
```

## 开发配置

```js
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')
const devConfig = {
	output: {
		path: undefined,
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
	},

	devServer: {
		host: 'localhost',
		port: '3000',
		open: false,
		historyApiFallback: true, // 解决router刷新404问题
	},
	mode: 'development',
	devtool: 'cheap-module-source-map',
}
// 合并公共配置
module.exports = merge(commonConfig, devConfig)
```

## 生产配置

```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common')

const prodConfig = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'static/js/[name].[chunkhash:8].js',
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
		clean: true,
	},

	// 插件
	plugins: [
		// 抽离css
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css',
			chunkFilename: 'static/css[name].[contenthash:8].chunk.css',
		}),
	],
	// 优化
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(), //压缩css
			//压缩js
			new TerserWebpackPlugin({
				extractComments: false, //不将注释提取到单独文件
			}),
		],
	},

	mode: 'production',
	devtool: 'source-map',
	performance: false, // 关闭性能分析，提示速度
}

module.exports = merge(CommonConfig, prodConfig)
```

## 其他配置

### package.json

```json
{
	"name": "vue-cli",
	"version": "1.0.0",
	"description": "",
	"main": ".eslintrc.js",
	"scripts": {
		"start": "npm run dev",
		"dev": "cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js",
		"build": "cross-env NODE_ENV=production webpack --config ./config/webpack.prod.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"@babel/core": "^7.20.5",
		"@babel/eslint-parser": "^7.19.1",
		"@vue/cli-plugin-babel": "^5.0.8",
		"babel-loader": "^9.1.0",
		"cross-env": "^7.0.3",
		"css-loader": "^6.7.2",
		"css-minimizer-webpack-plugin": "^4.2.2",
		"eslint": "^8.29.0",
		"eslint-plugin-vue": "^9.8.0",
		"eslint-webpack-plugin": "^3.2.0",
		"html-webpack-plugin": "^5.5.0",
		"less-loader": "^11.1.0",
		"mini-css-extract-plugin": "^2.7.2",
		"postcss-loader": "^7.0.2",
		"postcss-preset-env": "^7.8.3",
		"sass": "^1.56.1",
		"sass-loader": "^13.2.0",
		"style-loader": "^3.3.1",
		"vue-loader": "^17.0.1",
		"vue-style-loader": "^4.1.3",
		"webpack": "^5.75.0",
		"webpack-cli": "^5.0.0",
		"webpack-dev-server": "^4.11.1",
		"webpack-merge": "^5.8.0"
	},
	"dependencies": {
		"element-plus": "^2.2.26",
		"vue": "^3.2.45",
		"vue-router": "^4.1.6"
	},
	"browserslist": ["> 1%", "not dead", "last 2 versions"]
}
```

### .eslintrc.js

```js
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	parserOptions: {
		parser: '@babel/eslint-parser', //解析babel
	},
}
```

### babel.config.js

```js
module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
}
```

## vue 相关配置

### App.vue

```vue
<template>
	<div>
		<h1 class="title">hello app</h1>
		<el-button type="primary" @click="toggleDark()">按钮</el-button>
		<ul>
			<li>
				<router-link to="/home">home</router-link>
			</li>
			<li>
				<router-link to="/about">about</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<style scoped lang="scss">
.title {
	color: yellowgreen;
}
</style>
```

### main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './styles/element/index.scss'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(ElementPlus).mount(document.getElementById('app'))
```

### router

```js
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/home'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/about'),
	},
]

let router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
```
