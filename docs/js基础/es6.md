# es6

> [阮一峰 es6 入门](https://es6.ruanyifeng.com/)

## let & const

### let

##### 1. 不存在变量提升

`var` 声明的变量会提升, 在其声明之前可以调用, 输出 `undefined`

```js
console.log(a) //undefined
var a = 20
console.log(b) //ReferenceError
let b = 20
```

#### 2. 不能够重复声明

`let` 不允许在相同作用域内，重复声明同一个变量

```js
let a = 20
let a = 30 //error
```

#### 3. 块级作用域

`let` 声明的变量，只在 `let` 命令所在的代码块内有效

```js
{
	let a = 10
	var b = 20
}
console.log(a) //undefined
console.log(b) //20
```

### const

-   拥有和 `let`一样的特性
-   声明变量必须立即赋值, 且后续不可更改

```js
const a = 20
a = 30 //error
const b //只声明不赋值,报错
```

## 数组的扩展

### 1. Array.from()

将类数组转换为真正的数组

```js
let arr = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3,
}
let arr1 = Array.from(arr)
```

### 2. Array of()

将一组值，转换为数组

```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
```

## 对象的扩展

### 1. 属性名表达式

放入方括号中的表达式, 可以作为对象的属性名

```js
let propKey = 'age'
let obj = {
	['n' + 'ame']: 'Tom',
	[peopKey]: 28,
}
obj.name //'Tom'
obj.age //28
```

## Symbol

返回一个独一无二 symbol 类型的值, 用于定义属性名。可以看做一个特殊的字符串

### 1. 不同传参

-   字符串  
    对 symbol 实例的描述, 利于区分

```js
let s1 = Symbol('foo')
let s2 = Symbol('bar')
s1 // Symbol(foo)
s2 // Symbol(bar)
s1 === s2 // false
```

-   对象  
    当参数为对象时,调用该对象的 `toString()` 方法

```js
const obj = {
	toString() {
		return '123'
	},
}
console.log(Symbol(obj)) // Symbol(123)
```

-   不传参

```js
// 没有参数的情况
let s1 = Symbol()
let s2 = Symbol()
s1 === s2 // false
```

### 2. 作为属性名使用

```js
let sym = Symbol()
let sym2 = Symbol()
let obj = {
	[sym]: 'hello',
}
obj[sym2] = 'hi'
```

### 3. 属性名的遍历

```js
let a = Symbol('this is a')
let obj = {
	name: 'tom',
	[a]: 'hello',
}
// 输出:name ; Symbol命名的属性不会遍历打印
for (let k in obj) {
	console.log(k)
}
//getOwnPropertySymbols可以获取Symbol属性元素
console.log(Object.getOwnPropertySymbols(obj))
```

### 4. Symbol.for()，Symbol.keyFor()

-   ` Symbol.for()` 生成新 `Symbol` 登记在全局环境中供搜索, 如果 key 值相同, 返回相同的 `symbol`

```js
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')

s1 === s2 // true
```

-   `Symbol.keyFor()` 方法返回一个已登记的 `Symbol` 类型值的 `key`。

```js
let s1 = Symbol.for('foo')
Symbol.keyFor(s1) // "foo"

let s2 = Symbol('foo')
Symbol.keyFor(s2) // undefined
```

## Set & Map

### Set()

`Set` 本身是一个构造函数，用来生成 `Set` 数据结构。它类似于数组，但是成员的值都是唯一的，没有重复的值。

#### 1. 基本属性方法

```js
const s = new Set([1, 2, 3])
s.size //3
s.has(1) //true
s.add(4) //s->[1,2,3,4]
s.delete(2) //s->[1,3,4]
s.has(2) //false
s.clear() //清空
```

#### 2. 遍历

-   `keys()`，`values()`，`entries()`返回的都是遍历器对象, 键名和键值是同一个值

```js
let set = new Set(['red', 'green', 'blue'])
// 依次输出: red, green, blue
for (let item of set.keys()) {
	console.log(item)
}
// 依次输出: red, green, blue
for (let item of set.values()) {
	console.log(item)
}
// 依次输出: ["red", "red"], ["green", "green"], ["blue", "blue"]
for (let item of set.entries()) {
	console.log(item)
}
```

-   `forEach()`

```js
let set = new Set([1, 4, 9])
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1
// 4 : 4
// 9 : 9
```

#### 3. 数组去重

```js
let s = new Set([1, 2, 2, 3, 3, 4])
let arr = [...s] //[1,2,3,4]
```

### Map()

类似于对象，也是**键值对**的集合, 键可以是各种类型

#### 1. 基本应用

```js
const map = new Map()
map.set('name', 'hello')
map.get('name') //hello
map.has('name') //true
map.size //1
map.delete('name')
```

#### 2. 数组键值对创建

```js
const map = new Map([
	['a', 1],
	['b', 2],
])
```

## Iterator(遍历器)

`Iterator` 是一种接口，能快捷访问数据

### 1. 遍历过程

1. 创建一个**指针对象**, 指向当前数据起始位置
2. 第一次调用指针的 `next` 方法,将指针指向数据结构的第一个成员
3. 第二次调用则指向第二个成员
4. 不断调用直至指向数据结构的结束位置

每次调用 `next` 都会返回一个当前成员的信息对象, 包含 `value` 和 `done`:

-   value: 当前成员的值
-   done: 布尔值, 表示当前遍历是否结束

```js
let arr = [1, 2]
let ite = arr[Symbol.Iterater]()
ite.next() //{value: 1, done: false}
ite.next() //{value: 2, done: false}
ite.next() //{value: undefined, done: true}
```

## Generator(生成器)

ES6 提供的一种异步编程解决方案

### 1. 基本概念

-   是一个状态机, 封装了多个内部状态
-   执行会返回一个**遍历器对象**, 可以依次遍历函数内部的每一个状态
-   格式是 `function` 关键字加上`*`; 函数内部使用 `yeild`表达式定义状态

```js
function* func() {
	yield 'hello'
	yield 'world'
	return 'ending'
}
// 返回一个遍历器对象, 可以调用next()
let gen = func()
```

调用执行:

```js
gen.next() //{value:'hello',done:false}
gen.next() //{value:'world',done:false}
gen.next() //{value:'ending',done:false}
gen.next() //{value:undefined,done:true}
```

### 2. yield 表达式

1. 遇到 `yield`表达式, 暂停后续执行, 将`yield`后的表达式作为返回对象的`value` 值
2. 下次调用 `next()`, 继续执行, 直到下个 `yield` 表达式
3. 直到 `return` 语句为止, 将 `return` 后面的表达式作为返回对象的 `value`
4. 如果没有 `return`, 最后返回对象的 `value` 为 `undefined`

:::warning 注意
`yield`表达式后面的表达式，只有当调用`next`方法、内部指针指向该语句时才会执行
:::

### 3. next 的参数

```js
function* fn() {
	let a = yield '1'
	let b = yield '2'
	return a + b
}
let gen = fn()
gen.next() //{value:'1', done:false}
/**
 * yield会暂停后面操作, 所以上个let a=? 未执行
 * 此时再调用next,将其携带参数赋给 a
 * */
gen.next(10) //{value:'2', done:false}
gen.next(20) //{value:30, done:true}
```

### 4. 异步应用

用 `yield` 定义异步函数, 异步函数里执行完成后调用 `next()` 方法继续执行

```js{3,15}
function* fn() {
	showLoad()
	yield getData()
	hideLoad()
}
const gen = fn()
gen.next()

function showLoad() {
	console.log('未加载,显示loading')
}
function getData() {
	setTimeout(() => {
		console.log('数据加载...')
		gen.next()
	}, 1000)
}
function hideLoad() {
	console.log('加载完成,隐藏loading')
}
```

## Promise

### 1. 基本应用

```js
let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (true) {
			resolve('success')
		} else {
			reject('error')
		}
	}, 1000)
})
```

-   `resolve`: 将状态从 `pending` 变为 `resolved`, 并将异步操作结果作为参数传递出去

-   `reject`: 将状态从 `pending` 状态变为 `rejected`, 并将异步操作报错结果作为参数传递出去

### 2. Promise.all()

将多个 Promise 实例，包装成一个新的 Promise 实例

```js
// p1、p2、p3都是promise实例
const p = Promise.all([p1, p2, p3])
```

-   当所有实例状态都变成 `fulfilled`，p 的状态才会变成 `fulfilled`，实例返回值按定义时的**顺序**组成一个**数组**传给 p 的回调函数
-   实例中只要有一个被 `rejected`，p 的状态就会变为 `rejected`，第一个被 `rejected`的实例返回值，传递给 p 的回调函数

### 3. Promise.race()

```js
const p = Promise.race([p1, p2, p3])
```

-   只要有一个实例率先改变状态(fulfilled 或 rejected)，p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数

### 4. Promise.allSettled()

```js
const p = Promise.allSettled([p1, p2, p3])
```

-   当所有 Promise 实例状态都变更（不管是 fulfilled 还是 rejected）, p 才会发生状态变更, 且 p 的状态只有 `fulfilled`
-   p 的回调会接受到一个数组, 每个成员都是**固定格式对象**, 按照定义时的实例顺序

```js
;[
	{ status: 'fulfilled', value: value }, // 异步操作成功时
	{ status: 'rejected', reason: reason }, // 异步操作失败时
]
```

### 5. Promise.any()

```js
Promise.any([p1, p2, p3])
```

-   等到所有参数 `Promise` 变成`rejected`状态才会结束。抛出的错误是一个实例数组, 包含所有成员的错误
-   只要有一个变成`fulfilled`，`Promise.any()`返回的 `Promise` 对象就变成`fulfilled`

## async

本质是 `Generator` 函数的语法糖, 返回值是一个 `Promise` 对象

### 1. 使用形式

```js
// 函数声明
async function foo() {}
// 函数表达式
const foo = async function () {}
// 对象的方法
let obj = { async foo() {} }
obj.foo().then(/* ... */)
// 箭头函数
const foo = async () => {}
```

### 2. await

```js
async function fn() {
	return await Promise.resolve('success')
}
fn().then((val) => console.log(val)) //success
```

### 3. 错误处理

```js
async function main() {
	try {
		const val1 = await p1()
		const val2 = await p2(val1)
		const val3 = await p3(val1, val2)
	} catch (err) {
		console.error(err)
	}
	return val3
}
```

## class

### 1. 基本使用

```js
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	sayHello() {
		console.log('hello')
	}
}
const p = new Person('John', 18)
```

### 2. getter 和 setter

在类的内部可以使用 `get` 和 `set` 关键字，对某个属性设置存值函数和取值函数

```js
class Person {
	name = ''
	get name() {
		return this.name
	}
	set name(name) {
		this.name = name
	}
}
const p = new Person()
p.name = 'john'
```

### 3. 静态方法&静态属性

-   静态方法  
    如果在一个方法前，加上 `static`关键字，该方法就不会被实例**继承**，只能通过类直接调用

```js
class Foo {
	static classMethod() {
		return 'hello'
	}
}
// 类可以直接调用
Foo.classMethod() // 'hello'

var foo = new Foo()
//实例调用会报错
foo.classMethod() // TypeError: foo.classMethod is not a function
```

-   静态属性  
    在实例属性的前面加上 `static` 关键字, 可以定义一个静态属性

```js
class Foo {
	static prop = 1
	constructor() {
		console.log(Foo.prop) // 1
	}
}
```

### 4. 私有属性和方法

在属性或方法前添加 `#` 即可定义一个私有属性或方法

```js
class Counter {
	#count = 0
	get value() {
		console.log('current value!')
		return this.#count
	}
	#increment() {
		this.#count++
	}
}
```

私有属性只能在类的内部使用, 外部调用会报错

```js
const counter = new Counter()
counter.#count // 报错
counter.#count = 42 // 报错
```

## class 的继承

### 1. super 关键字

-   必须定义在子类的构造函数之中
-   子类的构造函数中，只有调用 `super()`之后，才可以使用 `this` 关键字
-   使用形参要声明
-   当子类不写`constructor`函数时, 默认其内部会调用 `super()`

```js
class Animal {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

class Dog extends Animal {
	constructor(name, age, color) {
		super(name, age)
		this.color = color
	}
	bark() {
		console.log(`${this.name},${this.color}:${this.age}岁`)
	}
}

const dog = new Dog('旺财', 4, '黑色')
dog.bark()
```

### 2. 私有属性和私有方法

子类无法继承父类的私有属性, 私有属性只能在定义它的 class 里面使用

```js
class Foo {
	#p = 1
	#m() {
		console.log('hello')
	}
}

class Bar extends Foo {
	constructor() {
		super()
		console.log(this.#p) // 报错
		this.#m() // 报错
	}
}
```

### 3. 静态属性和方法

父类的静态属性和静态方法，会被子类继承

```js
class A {
	static hello() {
		console.log('hello world')
	}
}

class B extends A {}

B.hello() // hello world
```

静态属性是通过**浅拷贝**实现继承, 当静态属性是**引用类型**时, 子类的静态属性也会指向这个对象

```js
class A {
	static foo = { n: 100 }
}

class B extends A {
	constructor() {
		super()
		B.foo.n--
	}
}

const b = new B()
B.foo.n // 99
A.foo.n // 99
```

当子类修改这个对象的属性值，会影响到父类
