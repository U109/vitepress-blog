## 1. 数据库引擎不支持事务

从 `MySQL 5.5.5` 开始的默认存储引擎是：`InnoDB`，之前默认的都是：`MyISAM` .

其 `MyISAM` 引擎是不支持事务操作的，`InnoDB` 才是支持事务的引擎，一般要支持事务都会使用 `InnoDB`。

## 2. 没有被 Spring 管理

```java
// @Service
public class OrderServiceImpl implements OrderService {

    @Transactional
    public void updateOrder(Order order) {
        // update order
    }
}
```

如果此时把 `@Service` 注解注释掉，这个类就不会被加载成一个 `Bean`，那这个类就不会被 `Spring` 管理了，事务自然就失效了。

## 3. 自身调用问题

来看两个示例：

```java

@Service
public class OrderServiceImpl implements OrderService {

    public void update(Order order) {
        updateOrder(order);
    }

    @Transactional
    public void updateOrder(Order order) {
        // update order
    }

}
```

`update`方法上面没有加 `@Transactional` 注解，调用有 `@Transactional` 注解的 `updateOrder` 方法，`updateOrder` 方法上的事务管用吗？

再来看下面这个例子：

```java

@Service
public class OrderServiceImpl implements OrderService {

    @Transactional
    public void update(Order order) {
        updateOrder(order);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void updateOrder(Order order) {
        // update order
    }
}
```

这次在 `update` 方法上加了 `@Transactional`，`updateOrder` 加了 `REQUIRES_NEW` 新开启一个事务，那么新开的事务管用么？

这两个例子的答案是：不管用！

因为它们发生了自身调用，就调该类自己的方法，而**没有经过 Spring 的代理类**，默认只有在外部调用事务才会生效，这也是老生常谈的经典问题了。

## 4. 注解所在的方法是否为public

以下来自 Spring 官方文档：

> When using proxies, you should apply the @Transactional annotation only to methods with public visibility. If you do
> annotate protected,
> private or package-visible methods with the @Transactional annotation, no error is raised,
> but the annotated method does not exhibit the configured transactional settings. Consider the use of AspectJ (see
> below) if you need to annotate non-public methods.

大概意思就是 `@Transactional` 只能用于 `public` 的方法上，否则事务不会失效，如果要用在非 `public`
方法上，可以开启 `AspectJ` 代理模式。

## 5. 异常被吃了

```java
// @Service
public class OrderServiceImpl implements OrderService {

    @Transactional
    public void updateOrder(Order order) {
        try {
            // update order
        } catch {
        }
    }
}
```

把异常吃了，然后又不抛出来，事务怎么回滚吧！

## 6. 异常类型错误

```java
// @Service
public class OrderServiceImpl implements OrderService {

    @Transactional
    public void updateOrder(Order order) {
        try {
            // update order
        } catch {
            throw new Exception("更新错误");
        }
    }
}
```

这样事务也是不生效的，因为默认回滚的是：`RuntimeException`，如果你想触发其他异常的回滚，需要在注解上配置一下，如：

```java
@Transactional(rollbackFor = Exception.class)
```

这个配置仅限于 `Throwable` 异常类及其子类。

## 7. 数据源没有配置事务管理器

```java
@Bean
public PlatformTransactionManager transactionManager(DataSource dataSource){
        return new DataSourceTransactionManager(dataSource);
        }
```

如上面所示，当前数据源若没有配置事务管理器，那也是白搭！

## 8. 不支持事务

来看下面这个例子：

```java

@Service
public class OrderServiceImpl implements OrderService {

    @Transactional
    public void update(Order order) {
        updateOrder(order);
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void updateOrder(Order order) {
        // update order
    }

}
```

`Propagation.NOT_SUPPORTED`： 表示不以事务运行，当前若存在事务则挂起

都主动不支持以事务方式运行了，那事务生效也是白搭！
