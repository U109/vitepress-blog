# React 脚手架

## 目录结构

```
react_cli
    ├─ node_modules
    ├─ config
    │  ├─ webpack.config.base.js  #公共配置
    │  ├─ webpack.dev.js #开发配置
    │  └─ webpack.prod.js #生产配置
    ├─ public
    │  ├─ favicon.ico
    │  └─ index.html
    ├─ src
    │  ├─ pages
    │  ├─ main.js
    │  └─ App.jsx
    ├─ .eslintrc.js
    ├─ babel.config.js
    └─ package.json
```

## 共用配置

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'
// 样式文件处理函数
function getStyleLoaders() {
	return [
		isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: ['postcss-preset-env'], //处理绝大多数样式兼容
				},
			},
		},
	]
}
module.exports = {
	// 入口
	entry: './src/main.js',
	// 解析器
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.css$/,
						use: [...getStyleLoaders()],
					},
					{
						test: /\.less$/,
						use: [...getStyleLoaders(), 'less-loader'],
					},
					{
						test: /\.s[ac]ss$/,
						use: [...getStyleLoaders(), 'sass-loader'],
					},
					{
						test: /\.(jpe?g|png|gif|svg)$/,
						type: 'asset',
						parser: {
							dataUrlCondition: {
								maxSzie: 10 * 1024, //小于10kb的图片会被转换为base64格式
							},
						},
					},
					{
						test: /\.(tff|woff2?)$/,
						type: 'asset/resource', //字体文件会被直接输出
					},
					{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
						options: {
							cacheDirectory: true, //开启缓存
							cacheCompression: false, //缓存不压缩
						},
					},
				],
			},
		],
	},
	// 插件
	plugins: [
		new EslintWebpackPlugin({
			context: path.resolve(__dirname, '../src'),
			exclude: 'node_modules',
			cache: true, //开启缓存
			cacheLocation: path.resolve(__dirname, '../node_modules/.cahe/.eslintcahe'), //缓存位置
		}),
		new HtmlWebpackPlugin({
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		// 抽离css样式文件
		new MiniCssExtractPlugin({
			filename: 'static/css/[contenthash:8].css',
			chunkFilename: 'static/css/[contenthash:8].chunk.css',
		}),
	],
	// 优化
	optimization: {
		// 代码分割配置
		splitChunks: {
			chunks: 'all',
			//提取模块的方案
			cacheGroups: {
				antd: {
					name: 'chunk-antd',
					test: /[\\/]node_modules[\\/]antd(.*)/,
					priority: 30,
				},
				// 将react相关的库单独打包，减少node_modules的chunk体积。
				react: {
					name: 'react',
					test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
					chunks: 'initial',
					priority: 20,
				},
				libs: {
					name: 'chunk-vendors',
					test: /[\\/]node_modules[\\/]/,
					priority: 10, // 权重最低，优先考虑前面内容
					chunks: 'initial',
				},
			},
		},
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'], // 自动补全文件扩展名，让jsx可以使用
	},
}
```

## 开发模式配置

```js
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const devConfig = {
	// 输出
	output: {
		path: undefined, //开发模式 缓存在内存
		filename: 'static/js/[name].[chunkhash:8].js',
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
	},
	// 解析器
	module: {
		rules: [
			{
				oneOf: [
					{
						test: /\.(jsx|js)$/,
						include: path.resolve(__dirname, '../src'),
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							cacheCompression: false,
							plugins: [
								// "@babel/plugin-transform-runtime", // presets中包含了
								'react-refresh/babel', // 开启js的HMR功能
							],
						},
					},
				],
			},
		],
	},
	// 插件
	plugins: [
		// js热更新HMR
		new ReactRefreshWebpackPlugin(),
	],
	// 优化
	optimization: {},
	resolve: {},
	devServer: {
		host: 'localhost',
		port: 3000,
		open: false,
		historyApiFallback: true, // 解决react-router刷新404问题
	},
	mode: 'development',
	devtool: 'cheap-module-source-map', //代码错误提示形式
}
// 将公共配置合并
module.exports = merge(baseConfig, devConfig)
```

## 生产模式配置

```js
const path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const prodConfig = {
	// 输出
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'static/js/[name].[chunkhash:8].js',
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
		// 清除原打包文件
		clean: true,
	},
	// 解析器
	module: {},
	// 插件
	plugins: [],
	// 优化
	optimization: {
		// 文件压缩
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserWebpackPlugin({
				extractComments: false, //不将注释提取到单独文件
			}),
		],
	},
	resolve: {},
	mode: 'production',
	devtool: 'source-map', //代码错误提示形式
	performance: false, // 关闭性能分析，提升打包速度
}
// 将公共配置合并
module.exports = merge([baseConfig, prodConfig])
```

## 其他配置

### package.json

```json
{
	"name": "react-cli",
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
		"@babel/core": "^7.20.2",
		"@pmmmwh/react-refresh-webpack-plugin": "^0.5.10",
		"babel-loader": "^9.1.0",
		"babel-preset-react-app": "^10.0.1",
		"cross-env": "^7.0.3",
		"css-loader": "^6.7.2",
		"css-minimizer-webpack-plugin": "^4.2.2",
		"eslint-config-react-app": "^7.0.1",
		"eslint-plugin-import": "^2.26.0",
		"eslint-webpack-plugin": "^3.2.0",
		"html-webpack-plugin": "^5.5.0",
		"less-loader": "^11.1.0",
		"mini-css-extract-plugin": "^2.7.0",
		"postcss-loader": "^7.0.1",
		"postcss-preset-env": "^7.8.3",
		"react-refresh": "^0.14.0",
		"sass": "^1.56.1",
		"sass-loader": "^13.2.0",
		"style-loader": "^3.3.1",
		"webpack": "^5.75.0",
		"webpack-cli": "^5.0.0",
		"webpack-dev-server": "^4.11.1",
		"webpack-merge": "^5.8.0"
	},
	"browserslist": ["last 2 version", "> 1%", "not dead"],
	"dependencies": {
		"antd": "^5.0.3",
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"react-router-dom": "^6.4.3"
	}
}
```

### .eslintrc.js

```js
module.exports = {
	extends: ['react-app'], // 继承 react 官方规则
	parserOptions: {
		babelOptions: {
			presets: [
				// 解决页面报错问题
				['babel-preset-react-app', false],
				'babel-preset-react-app/prod',
			],
		},
	},
}
```

### babel.config.js

```js
module.exports = {
	// 使用react官方规则
	presets: ['react-app'],
}
```

## react 配置

### App.jsx

```jsx
import React, { Suspense, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ConfigProvider } from 'antd'

const About = lazy(() => import(/* webpackChunkName:'about' */ './pages/about'))
const Home = lazy(() => import(/* webpackChunkName:'home' */ './pages/home'))

export default function App() {
	return (
		<div>
			<h1>APP</h1>
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>

			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#00b96b',
					},
				}}
			>
				<Suspense fallback={<p>loading...</p>}>
					<Routes>
						<Route path="/home" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
					</Routes>
				</Suspense>
			</ConfigProvider>
		</div>
	)
}
```

### main.js

```js
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
