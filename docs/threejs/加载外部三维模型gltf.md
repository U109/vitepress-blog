# 加载外部三维模型(gltf)

## 一. gltf 格式

>gltf 格式是新 2015 发布的三维模型格式，类似.jpg、.png 格式的图片，现在的网站，图片基本是标配。图片有很多格式，对于三维模型自然也是如此，WebGL 三维引擎 three.js、cesium、babylonjs 都对 gltf 格式有良好的的支持

### gltf 包含内容

- 模型层级关系
- PBR 材质
- 纹理贴图
- 骨骼动画
- 变形动画...

### gltf 格式信息

1. GLTF 文件就是通过 JSON 的键值对方式来表示模型信息

   ```js
   {
   "asset": {
       "version": "2.0",
   },
   ...
   // 模型材质信息
   "materials": [
       {
       "pbrMetallicRoughness": {//PBR材质
           "baseColorFactor": [1,1,0,1],
           "metallicFactor": 0.5,//金属度
           "roughnessFactor": 1//粗糙度
       }
       }
   ],
   // 网格模型数据
   "meshes": ...
   // 纹理贴图
   "images": [
           {
               // uri指向外部图像文件
               "uri": "贴图名称.png"//图像数据也可以直接存储在.gltf文件中
           }
   ],
       "buffers": [
       // 一个buffer对应一个二进制数据块，可能是顶点位置 、顶点索引等数据
       {
       "byteLength": 840,
       //这里面的顶点数据，也快成单独以.bin文件的形式存在
       "uri": "data:application/octet-stream;base64,AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAC/.......
       }
   ],
   }
   ```

2. .bin 文件
   > .bin 文件以二进制形式存储了模型的顶点数据等信息, 相当于 gltf 文件中的 buffers 属性; 它既可以存储在.gltf 文件中, 也可以单独生成.bin 文件
3. 二进制.glb  
   .glb 就是 gltf 格式的二进制文件, .gltf 模型和贴图信息全部合成得到一个.glb 文件, .glb 文件相对.gltf 文件体积更小，传输更快

### gltf 不同文件形式

- 单独.gltf 文件
- 单独.glb 文件
- .gltf + .bin + 贴图文件

加载方式并无太大区别:

```js
// 单独.glb文件
loader.load("../../工厂.glb", function (gltf) {
  scene.add(gltf.scene);
});
```

## 二. 加载.gltf 文件

### 1.引入`GLTFLoader.js`

```js
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
```

### 2.gltf 加载器 `new GLTFLoader()`

```js
// 创建GLTF加载器对象
const loader = new GLTFLoader();
```

### 3.gltf 加载器方法`.load()`

```js
loader.load("gltf模型.gltf", function (gltf) {
  console.log("控制台查看加载gltf文件返回的对象结构", gltf);
  console.log("gltf对象场景属性", gltf.scene);
  // 返回的场景对象gltf.scene插入到threejs场景中
  scene.add(gltf.scene);
});
```

## 三.遍历层级模型

### 递归遍历方法`.traverse()`

```js
// 递归遍历所有模型节点
gltf.scene.traverse(function (obj) {
  if (obj.isMesh) {
    //判断是否是网格模型
    console.log("模型节点", obj);
    console.log("模型节点名字", obj.name);
  }
});
```

### 修改 gltf 默认材质

threejs 解析 gltf 模型默认材质一般是 `MeshStandardMaterial`或`MeshPhysicalMaterial`

- 批量修改默认材质

```js
gltf.scene.traverse(function (obj) {
  if (obj.isMesh) {
    // 重新设置材质
    obj.material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
    });
  }
});
```

### 模型材质共享

外部模型材质, 可能会共享同一个材质对象, 改变其中一个模型对象材质, 其它的也会受影响

- 解决方法: 克隆材质对象，重新赋值给 mesh 的材质属性

```js
//用代码方式解决mesh共享材质问题
gltf.scene.getObjectByName("小区房子").traverse(function (obj) {
  if (obj.isMesh) {
    // .material.clone()返回一个新材质对象，和原来一样，重新赋值给.material属性
    obj.material = obj.material.clone();
  }
});
mesh1.material.color.set(0xffff00);
mesh2.material.color.set(0x00ff00);
```
