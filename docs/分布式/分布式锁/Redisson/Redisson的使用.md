## 如何安装 Redisson

安装 Redisson 最便捷的方法是使用 `Maven` 或者 `Gradle`：

### Maven

```xml
<dependency>	
    <groupId>org.redisson</groupId>	
    <artifactId>redisson</artifactId>	
    <version>3.11.4</version>	
</dependency>
```

### Gradle

```shell
compile group: 'org.redisson', name: 'redisson', version: '3.11.4'
```

目前 Redisson 最新版是 `3.11.4`，当然你也可以通过搜索 `Maven` 中央仓库 `mvnrepository[1]` 来找到 Redisson 的各种版本。

## 获取RedissonClient对象

`RedissonClient`有多种模式，主要的模式有：

* 单节点模式
* 哨兵模式
* 主从模式
* 集群模式

### 单节点模式

单节点模式的程序化配置方法，大致如下：

```java
// 默认连接地址 127.0.0.1:6379
RedissonClient redisson = Redisson.create();
Config config = new Config();
config.useSingleServer().setAddress("myredisserver:6379");
RedissonClient redisson = Redisson.create(config);
```

Redisson的单Redis节点模式的使用方法如下：`SingleServerConfig singleConfig = config.useSingleServer();`

`SingleServerConfig` 类的设置参数如下：

