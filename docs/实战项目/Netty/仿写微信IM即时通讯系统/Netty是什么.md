---
outline: {
  level: [ 1,6 ],
}
---

在开始了解 Netty 是什么之前，我们先来回顾一下，如果我们需要实现一个客户端与服务端通信的程序，使用传统的 IO 编程，应该如何来实现？

# IO编程

我们简化下场景：客户端每隔两秒发送一个带有时间戳的 `"hello world"` 给服务端，服务端收到之后打印。

为了方便演示，下面例子中，服务端和客户端各一个类，把这两个类拷贝到你的 `IDE` 中，先后运行 `IOServer.java` 和 `IOClient.java` 可看到效果。

下面是传统的 `IO` 编程中服务端实现

::: code-group
```java [IOServer.java]
public class IOServer {
    public static void main(String[] args) throws Exception {

        ServerSocket serverSocket = new ServerSocket(8000);

        // (1) 接收新连接线程
        new Thread(() -> {
            while (true) {
                try {
                    // (1) 阻塞方法获取新的连接
                    Socket socket = serverSocket.accept();

                    // (2) 每一个新的连接都创建一个线程，负责读取数据
                    new Thread(() -> {
                        try {
                            int len;
                            byte[] data = new byte[1024];
                            InputStream inputStream = socket.getInputStream();
                            // (3) 按字节流方式读取数据
                            while ((len = inputStream.read(data)) != -1) {
                                System.out.println(new String(data, 0, len));
                            }
                        } catch (IOException e) {
                        }
                    }).start();

                } catch (IOException e) {
                }

            }
        }).start();
    }
}
```
:::

`Server` 端首先创建了一个`serverSocket`来监听 `8000` 端口，然后创建一个线程，线程里面不断调用阻塞方法 `serversocket.accept()`获取新的连接，见(1)，当获取到新的连接之后，给每条连接创建一个新的线程，
这个线程负责从该连接中读取数据，见(2)，然后读取数据是以字节流的方式，见(3)。

下面是传统的IO编程中客户端实现

:::code-group
```java [IOClient.java]
public class IOClient {

    public static void main(String[] args) {
        new Thread(() -> {
            try {
                Socket socket = new Socket("127.0.0.1", 8000);
                while (true) {
                    try {
                        socket.getOutputStream().write((new Date() + ": hello world").getBytes());
                        Thread.sleep(2000);
                    } catch (Exception e) {
                    }
                }
            } catch (IOException e) {
            }
        }).start();
    }
}
```
:::

客户端的代码相对简单，连接上服务端 `8000` 端口之后，每隔 `2` 秒，我们向服务端写一个带有时间戳的 `"hello world"`。

`IO` 编程模型在客户端较少的情况下运行良好，但是对于客户端比较多的业务来说，单机服务端可能需要支撑成千上万的连接，`IO` 模型可能就不太合适了，我们来分析一下原因。

上面的 `demo`，从服务端代码中我们可以看到，在传统的 `IO` 模型中，每个连接创建成功之后都需要一个线程来维护，每个线程包含一个 `while` 死循环，那么 `1w` 个连接对应 `1w` 个线程，继而 `1w` 个 `while` 死循环，这就带来如下几个问题：

1. `线程资源受限`：线程是操作系统中非常宝贵的资源，同一时刻有大量的线程处于阻塞状态是非常严重的资源浪费，操作系统耗不起
2. `线程切换效率低下`：单机 `CPU` 核数固定，线程爆炸之后操作系统频繁进行线程切换，应用性能急剧下降。
3. 除了以上两个问题，`IO` 编程中，我们看到数据读写是以`字节流`为单位。

为了解决这三个问题，`JDK` 在 `1.4` 之后提出了 `NIO`。