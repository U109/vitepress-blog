![img_2.png](img_2.png)

* **Broker**： 简单来说就是消息队列服务器实体
* **Exchange**： 消息交换机，它指定消息按什么规则，路由到哪个队列
* **Queue**： 消息队列载体，每个消息都会被投入到一个或多个队列
* **Binding**： 绑定，它的作用就是把`exchange`和`queue`按照路由规则绑定起来
* **Routing Key**： 路由关键字，`exchange`根据这个关键字进行消息投递
* **VHost**： `vhost` 可以理解为虚拟 `broker` ，即 `mini-RabbitMQ server`。其内部均含有独立的 `queue`、`exchange` 和 `binding` 等，但最最重要的是，其拥有独立的权限系统，
  可以做到 `vhost` 范围的用户控制。当然，从 `RabbitMQ` 的全局角度，`vhost` 可以作为不同权限隔离的手段（一个典型的例子就是不同的应用可以跑在不同的 `vhost` 中）。
* **Producer**： 消息生产者，就是投递消息的程序
* **Consumer**： 消息消费者，就是接受消息的程序
* **Channel**： 消息通道，在客户端的每个连接里，可建立多个`channel`，每个`channel`代表一个会话任务

