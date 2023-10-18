# PBR 材质与纹理贴图

## 一.金属度和粗糙度

### 金属度`metalness`

- 表示材质像金属的程度, 非金属取 0, 金属取 1
- 默认 0.5, 取值范围 0~1

```js
mesh.material = new THREE.MeshStandardMaterial({
  metalness: 1.0, //金属度属性
});
```

### 粗糙度`roughness`

- 表示材质粗糙度, 越光滑反射能力越强, 反之反射能力越弱
- 默认 0.5, 取值 0~1, 0 表示平滑镜面反射, 1 表示完全漫反射

```js
mesh.material = new THREE.MeshStandardMaterial({
  roughness: 0.5, //表面粗糙度
});
```

## 二.环境贴图

环境贴图模拟周围环境映射在 PBR 材质上的效果

### 立方体纹理加载器`CubeTextureLoader`

立方体纹理加载器加载 6 张图片, 返回一个立方体纹理对象, 模拟模型材质周围的环境图像

```js
// 上下左右前后6张贴图构成一个立方体空间
// 'px.jpg', 'nx.jpg'：x轴正方向、负方向贴图  p:正positive  n:负negative
// 'py.jpg', 'ny.jpg'：y轴贴图
// 'pz.jpg', 'nz.jpg'：z轴贴图
const textureCube = new THREE.CubeTextureLoader()
  .setPath("./环境贴图/环境贴图0/")
  .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
// CubeTexture表示立方体纹理对象，父类是纹理对象Texture
```

### MeshStandardMaterial 环境贴图配置

- 环境贴图属性`.envMap`
- 环境贴图反射率`.envMapIntensity`, 环境贴图对模型表面的影响能力, 默认 1, 范围:0~1

```js
// 加载环境贴图
const textureCube = new THREE.CubeTextureLoader()
  .setPath("./环境贴图/环境贴图0/")
  .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
new THREE.MeshStandardMaterial({
  metalness: 1.0,
  roughness: 0.5,
  envMap: textureCube, //设置pbr材质环境贴图
  envMapIntensity: 1, //设置为0,相当于没有环境贴图
});
```

## 三.清漆层

- 清漆层属性`.clearcoat`, 用来模拟物体表面一层透明图层, 默认 0, 范围 0~1

- 清漆层粗糙度`.clearcoatRoughness`, 表示物体表面透明图层的粗糙度, 默认 0, 范围 0~1

```js
const mesh = gltf.scene.getObjectByName("外壳01");
mesh.material = new THREE.MeshPhysicalMaterial({
  clearcoat: 1.0, //物体表面清漆层或者说透明涂层的厚度
  clearcoatRoughness: 0.1, //透明涂层表面的粗糙度
});
```

## 四.物理材质透光率

- 透光率`.transmission`, 模拟透明物体材质透光率, 默认 0, 范围 0~1
- 折射率`.ior`, 非金属材质折射率, 默认 1.5, 范围 1~2.333

```js
const mesh = gltf.scene.getObjectByName("玻璃01");
mesh.material = new THREE.MeshPhysicalMaterial({
  metalness: 0.0, //玻璃非金属
  roughness: 0.0, //玻璃表面光滑
  envMap: textureCube, //环境贴图
  envMapIntensity: 1.0, //环境贴图对Mesh表面影响程度
  transmission: 1.0, //玻璃材质透光率，transmission替代opacity
  ior: 1.5, //折射率
});
```
