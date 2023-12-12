针对2PC的缺点，研究者提出了3PC，即`Three-Phase Commit`。

作为2PC的改进版，3PC将原有的两阶段过程，重新划分为`CanCommit`、`PreCommit`和`DoCommit`三个阶段。

3PC 协议将 2PC 协议的准备阶段一分为二，从而形成了三个阶段：

![img_18.png](img_18.png)

## 详解三个阶段

所谓的三个阶段分别是：询问，然后再锁资源，最后真正提交。

* 第一阶段：`CanCommit`

* 第二阶段：`PreCommit`

* 第三阶段：`DoCommit`

![img_19.png](img_19.png)

