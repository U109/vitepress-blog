## 单Redis节点模式

程序化配置方法：

```java
// 默认连接地址 127.0.0.1:6379
RedissonClient redisson = Redisson.create();

Config config = new Config();
config.useSingleServer().setAddress("myredisserver:6379");
RedissonClient redisson = Redisson.create(config);
```

### 单节点设置

Redis程序的配置和架设文档在。Redisson的单Redis节点模式的使用方法如下：

```java
SingleServerConfig singleConfig = config.useSingleServer();
```

`SingleServerConfig` 类的设置参数如下：

#### address（节点地址）

可以通过`host:port`的格式来指定节点地址。

#### subscriptionConnectionMinimumIdleSize（发布和订阅连接的最小空闲连接数）

默认值：`1`

用于发布和订阅连接的最小保持连接数（长连接）。Redisson内部经常通过发布和订阅来实现许多功能。长期保持一定数量的发布订阅连接是必须的。

#### subscriptionConnectionPoolSize（发布和订阅连接池大小）

默认值：`50`

用于发布和订阅连接的连接池最大容量。连接池的连接数量自动弹性伸缩。

#### connectionMinimumIdleSize（最小空闲连接数）

默认值：`32`

最小保持连接数（长连接）。长期保持一定数量的连接有利于提高瞬时写入反应速度。

#### connectionPoolSize（连接池大小）

默认值：`64`

连接池最大容量。连接池的连接数量自动弹性伸缩。

#### dnsMonitoring（是否启用DNS监测）

默认值：`false`

在启用该功能以后，Redisson将会监测DNS的变化情况。

#### dnsMonitoringInterval（DNS监测时间间隔，单位：毫秒）

默认值：`5000`

监测DNS的变化情况的时间间隔。

#### idleConnectionTimeout（连接空闲超时，单位：毫秒）

默认值：`10000`

#### connectTimeout（连接超时，单位：毫秒）

默认值：`10000`

同节点建立连接时的等待超时。时间单位是毫秒。

#### timeout（命令等待超时，单位：毫秒）

默认值：`3000`

等待节点回复命令的时间。该时间从命令发送成功时开始计时。

#### retryAttempts（命令失败重试次数）

默认值：`3`

如果尝试达到 **retryAttempts（命令失败重试次数）** 仍然不能将命令发送至某个指定的节点时，将抛出错误。如果尝试在此限制之内发送成功，则开始启用 **timeout（命令等待超时）** 计时。

#### retryInterval（命令重试发送时间间隔，单位：毫秒）

默认值：`1500`

在一条命令发送失败以后，等待重试发送的时间间隔。时间单位是毫秒。

#### reconnectionTimeout（重新连接时间间隔，单位：毫秒）

默认值：`3000`

当与某个节点的连接断开时，等待与其重新建立连接的时间间隔。时间单位是毫秒。

#### failedAttempts（执行失败最大次数）

默认值：`3`

在某个节点执行相同或不同命令时， **连续** 失败 **failedAttempts（执行失败最大次数）** 时，该节点将被从可用节点列表里清除，直到
**reconnectionTimeout（重新连接时间间隔）** 超时以后再次尝试。

#### database（数据库编号）

默认值：`0`

尝试连接的数据库编号。

#### password（密码）

默认值：`null`

用于节点身份验证的密码。

#### subscriptionsPerConnection（单个连接最大订阅数量）

默认值：`5`

每个连接的最大订阅数量。

#### clientName（客户端名称）

默认值：`null`

在Redis节点里显示的客户端名称。

#### sslEnableEndpointIdentification（启用SSL终端识别）

默认值：`true`

开启SSL终端识别能力。

#### sslProvider（SSL实现方式）

默认值：`JDK`

确定采用哪种方式（JDK或OPENSSL）来实现SSL连接。

#### sslTruststore（SSL信任证书库路径）

默认值：`null`

指定SSL信任证书库的路径。

#### sslTruststorePassword（SSL信任证书库密码）

默认值：`null`

指定SSL信任证书库的密码。

#### sslKeystore（SSL钥匙库路径）

默认值：`null`

指定SSL钥匙库的路径。

#### sslKeystorePassword（SSL钥匙库密码）

默认值：`null`

指定SSL钥匙库的密码。

### 通过JSON、YAML和Spring XML文件配置单节点模式

配置单节点模式可以通过指定一个JSON格式的文件来实现。以下是JSON格式的配置文件样本。文件中的字段名称必须与`SingleServerConfig`和`Config`对象里的字段名称相符。

```json
{
   "singleServerConfig":{
      "idleConnectionTimeout":10000,
      "pingTimeout":1000,
      "connectTimeout":10000,
      "timeout":3000,
      "retryAttempts":3,
      "retryInterval":1500,
      "reconnectionTimeout":3000,
      "failedAttempts":3,
      "password":null,
      "subscriptionsPerConnection":5,
      "clientName":null,
      "address": "redis://127.0.0.1:6379",
      "subscriptionConnectionMinimumIdleSize":1,
      "subscriptionConnectionPoolSize":50,
      "connectionMinimumIdleSize":32,
      "connectionPoolSize":64,
      "database":0,
      "dnsMonitoring":false,
      "dnsMonitoringInterval":5000
   },
   "threads":0,
   "nettyThreads":0,
   "codec":{
      "class":"org.redisson.codec.JsonJacksonCodec"
   },
   "transportMode":"NIO"
}
```

配置单节点模式可以通过指定一个YAML格式的文件来实现。以下是YAML格式的配置文件样本。文件中的字段名称必须与`SingleServerConfig`和`Config`对象里的字段名称相符。

```yaml
---
singleServerConfig:
  idleConnectionTimeout: 10000
  pingTimeout: 1000
  connectTimeout: 10000
  timeout: 3000
  retryAttempts: 3
  retryInterval: 1500
  reconnectionTimeout: 3000
  failedAttempts: 3
  password: null
  subscriptionsPerConnection: 5
  clientName: null
  address: "redis://127.0.0.1:6379"
  subscriptionConnectionMinimumIdleSize: 1
  subscriptionConnectionPoolSize: 50
  connectionMinimumIdleSize: 32
  connectionPoolSize: 64
  database: 0
  dnsMonitoring: false
  dnsMonitoringInterval: 5000
threads: 0
nettyThreads: 0
codec: !<org.redisson.codec.JsonJacksonCodec> {}
"transportMode":"NIO"
```

配置单节点模式还可以通过Spring XML的命名空间来实现。以下是Spring XML格式的配置文件样本。文件中的属性名称在采用了Spring框架的命名规范并与`SingleServerConfig`和`Config`对象里的字段名称相符。

```xml
<redisson:client
    id="redisson"
    name="redisson1,redisson2"
    threads="0"
    netty-threads="0"
    codec-ref="myCodec" 
    transport-mode="NIO"
    redisson-reference-enabled="true"
    codec-provider-ref="myCodecProvider"
    resolver-provider-ref="myResolverProvider"
    executor-ref="myExecutor"
    event-loop-group-ref="myEventLoopGroup"
>
    <!--
    这里的name属性和qualifier子元素不能同时使用。
    id和name的属性都可以被用来作为qualifier的备选值。
    -->
    <!--<qualifier value="redisson3"/>-->
    <redisson:single-server
        idle-connection-timeout="10000"
        ping-timeout="1000"
        connect-timeout="10000"
        timeout="3000"
        retry-attempts="3"
        retry-interval="1500"
        reconnection-timeout="3000"
        failed-attempts="3"
        password="do_not_use_if_it_is_not_set"
        subscriptions-per-connection="5"
        client-name="none"            
        address="redis://127.0.0.1:6379"
        subscription-connection-minimum-idle-size="1"
        subscription-connection-pool-size="50"
        connection-minimum-idle-size="10"
        connection-pool-size="64"
        database="0"
        dns-monitoring="false"
        dns-monitoring-interval="5000"
    />            
</redisson:client>
<!-- 最基本配置 -->
<!-- 默认地址是 127.0.0.1:6379 -->
<redisson:client>
    <redisson:single-server/>
</redisson:client>
```