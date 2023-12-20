## BitSet

Redisson的分布式RBitSetJava对象采用了与java.util.BiteSet类似结构的设计风格。可以理解为它是一个分布式的可伸缩式位向量。需要注意的是RBitSet的大小受Redis限制，最大长度为4 294 967 295。除了同步接口外，还提供了异步（Async）、反射式（Reactive）和RxJava2标准的接口。

```java
RBitSet set = redisson.getBitSet("simpleBitset");
set.set(0, true);
set.set(1812, false);
set.clear(0);
set.addAsync("e");
set.xor("anotherBitset");
```

### BitSet数据分片（Sharding）（分布式RoaringBitMap）

基于Redis的Redisson集群分布式BitSet通过RClusteredBitSet接口，为集群状态下的Redis环境提供了BitSet数据分片的功能。通过优化后更加有效的分布式RoaringBitMap算法，突破了原有的BitSet大小限制，达到了集群物理内存容量大小。在这里可以获取更多的内部信息。

```java
RClusteredBitSet set = redisson.getClusteredBitSet("simpleBitset");
set.set(0, true);
set.set(1812, false);
set.clear(0);
set.addAsync("e");
set.xor("anotherBitset");
```

_该功能仅限于Redisson PRO版本。_