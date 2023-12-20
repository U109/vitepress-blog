分布式锁`ZLock`自主实现主要的价值：学习一下分布式锁的原理和基础开发，仅此而已。实际的开发中，如果需要使用到分布式锁，并建议去自己造轮子，建议直接使用`Curator`客户端中的各种官方实现的分布式锁，比如其中的`InterProcessMutex`
可重入锁。

这里提供一个简单的`InterProcessMutex`可重入锁的使用实例，代码如下：

```java
@Test
public void testzkMutex() throws InterruptedException {

    CuratorFramework client = ZKclient.instance.getClient();
    final InterProcessMutex zkMutex = new InterProcessMutex(client, "/mutex");
    for (int i = 0; i < 10; i++) {
        FutureTaskScheduler.add(() -> {

            try {
                //获取互斥锁
                zkMutex.acquire();

                for (int j = 0; j < 10; j++) {
                    //公共的资源变量累加
                    count++;
                }
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                log.info("count = " + count);
                //释放互斥锁
                zkMutex.release();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
    Thread.sleep(Integer.MAX_VALUE);
}
```

