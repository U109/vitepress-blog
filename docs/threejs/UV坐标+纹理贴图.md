# 顶点 UV 坐标/纹理贴图

## 一.创建纹理贴图

### 1.纹理贴图加载器: `TextureLoader`

```js
//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load("./earth.jpg");
const material = new THREE.MeshLambertMaterial({
  // 设置纹理贴图：Texture对象作为材质map属性的属性值
  map: texture, //map表示材质的颜色贴图属性
});
```

### 2.圆形平面纹理贴图

```js
//CircleGeometry的顶点UV坐标是按照圆形采样纹理贴图
const geometry = new THREE.CircleGeometry(60, 100);
//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load("./texture.jpg");
const material = new THREE.MeshBasicMaterial({
  map: texture, //map表示材质的颜色贴图属性
  side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);
```

## 二.纹理对象阵列

- wrapS: 纹理贴图在水平方向上如何显示, 在 UV 映射中对应 U
- wrapT: 纹理贴图在垂直方向如何显示, 在 UV 中映射中对应 V

```js
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load("./瓷砖.jpg");
// 设置阵列模式: 简单重复
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
texture.repeat.set(12, 12); //注意选择合适的阵列数量
```

### 单个方向的阵列

```js
// 设置U方向阵列模式
texture.wrapS = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
texture.repeat.x = 50; //注意选择合适的阵列数量
```

## 三.背景透明贴图

将背景透明的图像作为网格模型的贴图, 设置材质`transparent: true`

```js
const textureLoader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: textureLoader.load("./指南针.png"),
  transparent: true, //使用背景透明的png贴图，注意开启透明计算
});
```

- 网格地面辅助观察: `GridHelper(size, divisions, colorCenterLine, colorGrid)`
  - size -- 坐标格尺寸. 默认为 10.
  - divisions -- 坐标格个数. 默认为 10.
  - colorCenterLine -- 中线颜色. 默认为 0x444444
  - colorGrid -- 坐标格网格线颜色. 默认为 0x888888

```js
// 添加一个辅助网格地面
const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
```

## 四.UV 动画

改变纹理对象的 `offset`值, 来偏移纹理贴图在`mesh`上的位置

```js
texture.offset.x += 0.5; //纹理U方向偏移
texture.offset.y += 0.5; //纹理V方向偏移
```

### 纹理 UV 动画

```js
// 渲染循环
function render() {
  texture.offset.x += 0.001; //设置纹理动画：偏移量根据纹理和动画需要，设置合适的值
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
```
