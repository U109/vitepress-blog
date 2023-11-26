## 1、常用的JVM启动参数有哪些?

JVM可配置参数已经达到`1000`多个，其中`GC`和`内存配置`相关的JVM参数就有`600`多个。但在绝大部分业务场景下，常用的JVM配置参数也就10来个:

```shell
# 设置堆内存
-Xmx4g -Xms4g
# 指定GC算法
-XX:+UseG1GC -XX:MaxGCPauseMillis=50
# 指定GC并行线程数
-XX:ParallelGCThreads=4
# 打印GC日志
-XX:+PrintGCDetails -XX:+PrintGCDateStamps
# 指定GC日志文件
-Xloggc:gc.log
# 指定Meta区的最大值
-XX:MaxMetaspaceSize=2g
# 设置单个线程栈的大小
-Xss1m
# 指定堆内存溢出时自动进行Dump
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/usr/local/
# 指定默认的连接超时时间
-Dsun.net.client.defaultConnectTimeout=2000
-Dsun.net.client.defaultReadTimeout=2000
# 指定时区
-Duser.timezone=GMT+08
# 设置默认的文件编码为UTF-8
-Dfile.encoding=UTF-8
# 指定随机数熵源(Entropy Source)
-Djava.security.egd=file:/dev/./urandom
```

## 2、JVM上的随机数与熵池策略

在apache-tomcat官方文档提到了一些启动时的优化项，其中一项是关于`随机数`生成时，采用的`“熵源”(entropy source)`的策略。

他提到tomcat7的`session id`的生成主要通过 `java.security.SecureRandom` 生成随机数来实现，随机数算法使用的是`”SHA1PRNG”`:

```java
private String secureRandomAlgorithm = "SHA1PRNG";
```

在sun/oracle的jdk里，这个算法的提供者在底层依赖到操作系统提供的随机数据，在linux上，与之相关的是 `/dev/random` 和 `/dev/urandom` ，对于这两个设备块的描述以前也见过讨论随机数的文章，wiki中有比较详细的描述，摘抄过来，先看 `/dev/random` ：

>在读取时，/dev/random设备会返回小于熵池噪声总数的随机字节。
>
> /dev/random可生成高随机性的公钥或一次性密码本。
> 
> 若熵池空了，对/dev/random的读操作将会被阻塞，直到收集到了足够的环境噪声为止

而 `/dev/urandom` 则是一个`非阻塞`的发生器:

>dev/random的一个副本是/dev/urandom （”unlocked”，非阻塞的随机数发生器），
>
> 它会重复使用熵池中的数据以产生伪随机数据。
> 
> 这表示对/dev/urandom的读取操作不会产生阻塞，但其输出的熵可能小于/dev/random的。
> 
> 它可以作为生成较低强度密码的伪随机数生成器，不建议用于生成高强度长期密码

另外wiki里也提到了为什么linux内核里的随机数生成器采用`SHA1散列算法`而非加密算法，是为了避开法律风险(密码出口限制)。

回到tomcat文档里的建议，采用非阻塞的`熵源(entropy source)`，通过java系统属性来设置：

```java
-Djava.security.egd=file:/dev/./urandom
```

这个系统属性egd表示熵收集守护进程(entropy gathering daemon)，但这里值为何要在 dev 和 random 之间加一个点呢？

是因为一个jdk的bug，在这个bug的连接里有人反馈及时对 `securerandom.source` 设置为 `/dev/urandom` 它也仍然使用的 `/dev/random` ，有人提供了变通的解决方法，其中一个变通的做法是对`securerandom.source`设置为 `/dev/./urandom` 才行。也有人评论说这个不是bug，是有意为之。

## 3、你知道的几种主要的JVM参数

### 1）堆栈配置相关

```shell
java -Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:MaxPermSize=16m -XX:NewRatio=4 -XX:SurvivorRatio=4 -XX:MaxTenuringThreshold=0
```

**-Xmx3550m**： 最大堆大小为`3550m`。

**-Xms3550m**： 设置初始堆大小为`3550m`。

**-Xmn2g**： 设置年轻代大小为`2g`。

**-Xss128k**： 每个线程的堆栈大小为`128k`。

**-XX:MaxPermSize**： 设置永久代大小为`16m`

**-XX:NewRatio=4**: 设置年轻代（包括Eden和两个Survivor区）与年老代的比值（除去永久代）。

**-XX:SurvivorRatio=4**： 设置年轻代中Eden区与Survivor区的大小比值。设置为4，则两个Survivor区与一个Eden区的比值为`2:4`，一个Survivor区占整个年轻代的`1/6`

**-XX:MaxTenuringThreshold=0**： 设置垃圾最大年龄。如果设置为0的话，则年轻代对象不经过Survivor区，直接进入年老代。

### 2）垃圾收集器相关

```shell
-XX:+UseParallelGC-XX:ParallelGCThreads=20-XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=5-XX:+UseCMSCompactAtFullCollection
```

**-XX:+UseParallelGC**： 选择垃圾收集器为并行收集器。

**-XX:ParallelGCThreads=20**： 配置并行收集器的线程数

**-XX:+UseConcMarkSweepGC**： 设置年老代为并发收集。

**-XX:CMSFullGCsBeforeCompaction**：由于并发收集器不对内存空间进行压缩、整理，所以运行一段时间以后会产生“碎片”，使得运行效率降低。此值设置运行多少次GC以后对内存空间进行压缩、整理。

**-XX:+UseCMSCompactAtFullCollection**： 打开对年老代的压缩。可能会影响性能，但是可以消除碎片

### 3）辅助信息相关

```shell
-XX:+PrintGC-XX:+PrintGCDetails
```

**-XX:+PrintGC 输出形式**: [GC 118250K->113543K(130112K), 0.0094143 secs] [Full GC 121376K->10414K(130112K), 0.0650971 secs]

**-XX:+PrintGCDetails 输出形式**: [GC [DefNew: 8614K->781K(9088K), 0.0123035 secs] 118250K->113543K(130112K), 0.0124633 secs] [GC [DefNew: 8614K->8614K(9088K), 0.0000665 secs][Tenured: 112761K->10414K(121024K), 0.0433488 secs] 121376K->10414K(130112K), 0.0436268 secs

## 4、说一下JVM调优的工具？

常用调优工具分为两类,jdk自带监控工具：`jconsole`和`jvisualvm`，第三方有：`MAT(Memory AnalyzerTool)`、`GChisto`：

1. **jconsole**： Java Monitoring and Management Console是从java5开始，在JDK中自带的java监控和管理控制台，用于对JVM中内存， 线程和类等的监控
2. **jvisualvm**： jdk自带全能工具，可以分析内存快照、线程快照；监控内存变化、GC变化等。
3. **MAT**： 一个基于Eclipse的内存分析工具，是一个快速、功能丰富的Javaheap分析工具，它可以帮助我们查找内存泄漏和减少内存消耗
4. **GChisto**： 一款专业分析gc日志的工具

## 5、调优命令有哪些？

Sun JDK监控和故障处理命令有`jps`、`jstat`、`jmap`、`jhat`、`jstack`、`jinfo`：

1. **jps**: JVM Process Status Tool,显示指定系统内所有的HotSpot虚拟机进程。
2. **jstat**: JVM statistics Monitoring是用于监视虚拟机运行时状态信息的命令，它可以显示出虚拟机进程中的类装载、内存、垃圾收集、JIT编译等运行数据。
3. **jmap**: JVM Memory Map命令用于生成heap dump文件
4. **jhat**: JVM Heap Analysis Tool命令是与jmap搭配使用，用来分析jmap生成的dump，jhat内置了一个微型的HTTP/HTML服务器，生成dump的分析结果后，可以在浏览器中查看
5. **jstack**: 用于生成java虚拟机当前时刻的线程快照。
6. **jinfo**: JVM Configuration info 这个命令作用是实时查看和调整虚拟机运行参数

## 6、设置堆内存XMX应该考虑哪些因素？

需要根据系统的配置来确定，要给操作系统和JVM本身留下一定的剩余空间。推荐配置系统或容器里可用内存的 `70 - 80%` 最好。

## 7、假设物理内存是8G，设置多大堆内存比较合适?

比如说系统有 8G 物理内存，系统自己可能会用掉一点，大概还有 `7.5G` 可以用，那么建议配置 `‐Xmx6g`

说明：

`7.5G*0.8 = 6G`

如果知道系统里有明确使用堆外内存的地方，还需要进一步降低这个值。

## 8、XM设置的值与JVM进程所占用的内存有什么关系?

`JVM总内存=栈+堆+非堆+直接内存+Native`

`整个堆大小=年轻代大小 + 年老代大小 + 永久代大小`

## 9、怎样开启GC日志？

一般来说，JDK8及以下版本通过以下参数来开启GC日志：

```shell
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:gc.log
```

如果是在JDK9及以上的版本，则格式略有不同：

```shell
-# JDK 11 环境，输出 info 级别的 GC 日志
java -Xms512m -Xmx512m
-Xlog:gc*=info:file=gc.log:time:filecount=0
demo.jvm0204.GCLogAnalysis
```

## 10、怎么打出线程栈信息？

1. 输入`jps`，获得进程号。
2. `top -Hp pid` 获取本进程中所有线程的CPU耗时性能
3. `jstack pid`命令查看当前java进程的堆栈状态 或者 `jstack -l > /tmp/output.txt` 把堆栈信息打到一个txt文件。
4. 可以使用 `fastthread` 堆栈定位

## 11、请指定使用G1垃圾收集器来启动程序

```shell
‐XX:+UseG1GC
```

