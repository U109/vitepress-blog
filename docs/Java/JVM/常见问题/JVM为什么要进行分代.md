这样划分的目的是为了使 `JVM` 能够更好的管理堆内存中的对象，包括内存的分配以及回收。

给堆内存分代 是为了**提高对象内存分配和垃圾回收的效率**

**1）共享内存区划分**

* 共享内存区 = 永久代 + 堆
* 永久代 = 方法区 + 其他
* Java堆 = 老年代 + 新生代
* 新生代 = Eden + S0 + S1

**2）一些参数的配置**

* 默认的，新生代 ( `Young` ) 与老年代 ( `Old` ) 的比例的值为 `1:2` ，可以通过参数 `–XX:NewRatio` 配置。

* 默认的，`Eden : from : to = 8 : 1 : 1` ( 可以通过参数 `–XX:SurvivorRatio` 来设定)。

* `Survivor`区中的对象被复制次数为`15`(对应虚拟机参数 `-XX:+MaxTenuringThreshold`)。

**3)为什么要分为Eden和Survivor?为什么要设置两个Survivor区？**

* 如果没有`Survivor`，`Eden`区每进行一次`Minor GC`，存活的对象就会被送到老年代。老年代很快被填满，触发`Major GC`.老年代的内存空间远大于新生代，进行一次`Full GC`消耗的时间比`Minor GC`长得多,所以需要分为`Eden`和`Survivor`。

* `Survivor`的存在意义，就是**减少被送到老年代的对象，进而减少Full GC的发生**，`Survivor`的预筛选保证，只有经历`16`次`Minor GC`还能在新生代中存活的对象，才会被送到老年代。

* 设置两个`Survivor`区最大的好处就是`解决了碎片化`，刚刚新建的对象在`Eden`中，经历一次`Minor GC`，`Eden`中的存活对象就会被移动到第一块`survivor space S0`，`Eden`被清空；
等`Eden`区再满了，就再触发一次`Minor GC`，`Eden`和`S0`中的存活对象又会被复制送入第二块`survivor space S1`（这个过程非常重要，因为这种复制算法保证了`S1`中来自`S0`和`Eden`两部分的存活对象占用连续的内存空间，
避免了碎片化的发生）