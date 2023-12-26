:::tip
尽管使用 `direct` 交换机改进了我们的系统，但是它仍然存在局限性。比方说我们想接收的日志类型有 `error` 和 `warning` 两种，但某个队列只想 `error` 的消息，
那这个时候 `direct` 交换机就办不到了。这就引入了 `topic` 类型。
:::

发送到类型是 `topic` 交换机的消息的` routing_key` 不能随意写，必须满足一定的要求，它必须是一个单词列表，以点号分隔开。这些单词可以是任意单词，
比如说：`“stock.usd.nyse”`、`“nyse.vmw”`、`“quick.orange.rabbit”` 这种类型的。当然这个单词列表最多不能超过 `255` 个字节。

在这个规则列表中，其中有两个替换符是大家需要注意的：

* 星号`*`可以代替一个单词
* 井号`#`可以替代零个或多个单词

此外，当队列绑定关系是下列情况时需要引起注意：

* 当一个队列绑定键是`#`,那么这个队列将接收所有数据，就有点像 `fanout`
* 如果队列绑定键当中没有`#`和`*`出现，那么该队列绑定类型就是 `direct`

📃 案例演示：如下图所示，我们首先分析该模式消息的路由结果，然后我们通过代码来验证一下结果是否正确

![img_16.png](img_16.png)

* Q1–>绑定的是：中间带 `orange` 带 3 个单词的字符串(`.orange.`)
* Q2–>绑定的是：最后一个单词是 `rabbit` 的 3 个单词(`..rabbit`)，第一个单词是 `lazy` 的多个单词(`lazy.#`)

上图是一个队列绑定关系图，我们来看看他们之间数据接收情况是怎么样的：

```shell
quick.orange.rabbit				被队列 Q1Q2 接收到
lazy.orange.elephant			被队列 Q1Q2 接收到
quick.orange.fox					被队列 Q1 接收到
lazy.brown.fox						被队列 Q2 接收到
lazy.pink.rabbit					虽然满足两个绑定但只被队列 Q2 接收一次
quick.brown.fox						不匹配任何绑定不会被任何队列接收到会被丢弃
quick.orange.male.rabbit	是四个单词不匹配任何绑定会被丢弃
lazy.orange.male.rabbit		是四个单词但匹配 Q2
```

## 生产者Producer

```java
package mode2_WorkQueues.exchange.topic;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;

import java.util.HashMap;
import java.util.Map;

public class Producer {
    private static final String EXCHANGE_NAME = "topic_logs";

    public static void main(String[] args) throws Exception {
        // 创建channel
        Channel channel = utils.RabbitMqUtils.getChannel();
        // 声明交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);
        // 发送消息
        Map<String, String> messageMap = new HashMap<>();
        messageMap.put("quick.orange.rabbit", "被队列 Q1Q2 接收到");
        messageMap.put("lazy.orange.elephant", "被队列 Q1Q2 接收到");
        messageMap.put("quick.orange.fox", "被队列 Q1 接收到");
        messageMap.put("lazy.brown.fox", "被队列 Q2 接收到");
        messageMap.put("lazy.pink.rabbit", "虽然满足两个绑定但只被队列 Q2 接收一次");
        messageMap.put("quick.brown.fox", "不匹配任何绑定不会被任何队列接收到会被丢弃");
        messageMap.put("quick.orange.male.rabbit", "是四个单词不匹配任何绑定会被丢弃");
        messageMap.put("lazy.orange.male.rabbit", "是四个单词但匹配 Q2");
        for (Map.Entry<String, String> mes : messageMap.entrySet()) {
            String message = mes.getValue();
            String routingKey = mes.getKey();
            channel.basicPublish(EXCHANGE_NAME, routingKey, null, message.getBytes());
            System.out.println("消息发送完毕" + message);
        }
    }
}
```

## 消费者Consumer01

```java
package mode2_WorkQueues.exchange.topic;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.CancelCallback;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.DeliverCallback;

public class Consumer01 {
    private static final String EXCHANGE_NAME = "topic_logs";
    private static final String QUEUE_NAME = "Q1";

    public static void main(String[] args) throws Exception {
        // 创建channel
        Channel channel = utils.RabbitMqUtils.getChannel();
        // 声明交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);
        // 创建Q1队列
        channel.queueDeclare(QUEUE_NAME, false, false, false, null);
        // 绑定队列与交换机
        channel.queueBind(QUEUE_NAME, EXCHANGE_NAME, "*.orange.*");
        // 消费消息
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            System.out.println("获得消息:" + new String(message.getBody()));
        };
        CancelCallback cancelCallback = (consumerTag) -> {
            System.out.println("消息消费被中断");
        };
        channel.basicConsume(QUEUE_NAME, true, deliverCallback, cancelCallback);
    }
}
```

## 消费者Consumer02

```java
package mode2_WorkQueues.exchange.topic;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.CancelCallback;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.DeliverCallback;

public class Consumer02 {
    private static final String EXCHANGE_NAME = "topic_logs";
    private static final String QUEUE_NAME = "Q2";

    public static void main(String[] args) throws Exception {
        // 创建channel
        Channel channel = utils.RabbitMqUtils.getChannel();
        // 声明交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);
        // 创建Q1队列
        channel.queueDeclare(QUEUE_NAME, false, false, false, null);
        // 绑定队列与交换机
        channel.queueBind(QUEUE_NAME, EXCHANGE_NAME, "*.*.rabbit");
        channel.queueBind(QUEUE_NAME, EXCHANGE_NAME, "lazy.#");
        // 消费消息
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            System.out.println("获得消息:" + new String(message.getBody()));
        };
        CancelCallback cancelCallback = (consumerTag) -> {
            System.out.println("消息消费被中断");
        };
        channel.basicConsume(QUEUE_NAME, true, deliverCallback, cancelCallback);
    }
}
```

## 测试

然后我们运行测试，当发送者发送我们指定当那些消息后：

![img_17.png](img_17.png)

我们来看两个消费者消费的消息，与我们上述假定的一致。

![img_18.png](img_18.png)

![img_19.png](img_19.png)