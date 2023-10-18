# typescript

## 基础类型

-   `number`
-   `string`
-   `boolean`
-   字面量 (限制变量的值就是该字面量的值)
-   `any` (任意类型)
-   `unknown` (类型安全的 any)
-   `never` (不能是任何值)
-   `void` (没有值或 undefined)
-   `object`
-   `array`
-   `tuple` (元祖, 固定长度数组)
-   `enum` (枚举)

### 字面量

```ts
let color: 'red' | 'blue' | 'black'
let num: 1 | 2 | 3 | 4 | 5
```

### any

相当于对该变量关闭 ts 检测

```ts
let d: any = 4
d = 'hello'
d = true
```

### unknown

类型安全的 any, 不能直接赋值给其他变量

```ts
let notSure: unknown = 4
let a: string = 'hello'
a = notSure //会报错
```

### void

没有返回值或返回 undefined

```ts
function fn(): void {
	return undefined
}
```

### never

永不存在的值的类型,如:抛出异常

```ts
function error(message: string): never {
	throw new Error(message)
}
```

### array

```ts
let arr: number[] = [1, 2, 3]
let arr2: Array<string> = ['tom', 'jack']
```

### tuple

固定长度数组

```ts
let x: [string, number]
x = ['hello', 10] // OK
```

### enum

```ts
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green //1
```

默认初始下标编号为 0, 也可以指定数值或其他任意值, 未指定的按照前面的顺序赋值

```ts
enum Color {
	Red = 1,
	Green,
	Blue,
}
let colorName: string = Color[2]
console.log(colorName) //Green
```

### 扩展-类型的别名

```ts
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
k = 4 //ok
k = 8 //error
```

## 断言

### 1. 基础使用

1. as 写法(推荐)

```ts
let str: any
let len = (str as string).length
```

2. <> 写法(存在兼容性问题)

```ts
let str: any
let len = (<string>str).length
```

### 2. const 断言

```ts
// a为宽泛类型可以更改, b, c, d为值类型
let a: string = 'yoho~'

let b: 'hello' = 'hello'
const c = 'hi'
let d = true as const
```

-   数组 const

没有声明`as const`的数组包含多个值类型, 声明后变成了一个元组

```ts
let a: string = 'yoho~'
let b = 666 as const
const arr1 = [a, 123, true]
//arr1: (string | number | boolean)[]
const arr2 = [a, b, 123, 'qq', true] as const
// arr2: readonly [string, 666, 123, "qq", true]
```

-   对象 const

```ts
let obj = { name: 'wow' } //obj: {name: string;}
let obj1 = { name: 'wow' } as const //obj1: { readonly name: "wow";}

// 当为变量宽泛类型
let a: string = 'yoho~'
let obj2 = { name: a } as const //obj2: {readonly name: string;}

// 当为值类型
const c = 99
let obj3 = { name: c } as const //obj3: {readonly name: 99;}
```

### 3. 非空断言

断言值不会为 null 或 undefined, 在变量最后添加 `!`

```ts
let el = document.getElementById('box')!
el.innerHTML
```

## 接口

一种规范; 只定义对象结构, 不考虑实际值

### 应用

1. 定义对象类型

```ts
interface Person {
	name: string
	age: number
	isYoung?: boolean
}

let p1: Person = { name: 'Tom', age: 12 }
```

2. 让一个类去实现接口

```ts
interface Person {
	name: string
	sayHello(): void
}

class MyPerson implements Person {
	name: string
	constructor(name: string) {
		this.name = name
	}
	sayHello() {
		console.log('hello~')
	}
}
```

:::tip
与 type 区别: type 不能重复声明, interface 可以再次定义, 声明的内容会合并到一起
:::

```ts
interface Person {
	name: string
	sayHello(): void
}
interface Person {
	sex: number
}
```

## 泛型

-   基础应用

```ts
function fn<T>(a: T): T {
	return a
}

fn<string>('hello')
```

-   多个泛型

```ts
function fn<T, K>(a: T, b: K): T {
	return a
}

fn<string, number>('hello', 123)
```

-   通过接口实现泛型约束

```ts
interface P {
	length: number
}
function fn<T extends P>(a: T): number {
	return a.length
}
fn('hello')
```

理解: 类似于 class 类, 泛型 T 继承了 interface 声明的属性, 便具有这些特性
