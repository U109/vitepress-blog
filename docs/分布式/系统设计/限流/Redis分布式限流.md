Redis 是一个开源的内存数据库，可以用来作为数据库、缓存、消息中间件等。Redis 是单线程的，又在内存中操作，所以速度极快，得益于 Redis 的各种特性，所以使用 Redis 实现一个限流工具是十分方便的。
下面的演示都基于Spring Boot 项目，并需要以下依赖。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

配置 Redis 信息：

```xml
spring:
  redis:
    database: 0
    password: 
    port: 6379
    host: 127.0.0.1
    lettuce:
      shutdown-timeout: 100ms
      pool:
        min-idle: 5
        max-idle: 10
        max-active: 8
        max-wait: 1ms
```

## 固定窗口限流

Redis 中的固定窗口限流是使用 `incr` 命令实现的，`incr` 命令通常用来自增计数；如果我们使用时间戳信息作为 key，自然就可以统计每秒的请求量了，以此达到限流目的。
这里有两点要注意。

- 对于不存在的 key，第一次新增时，value 始终为 1。
- `INCR` 和 `EXPIRE` 命令操作应该在一个原子操作中提交，以保证每个 key 都正确设置了过期时间，不然会有 key 值无法自动删除而导致的内存溢出。

由于 Redis 中实现事务的复杂性，所以这里直接只用 lua 脚本来实现原子操作。下面是 lua 脚本内容。

```shell
local count = redis.call("incr",KEYS[1])
if count == 1 then
  redis.call('expire',KEYS[1],ARGV[2])
end
if count > tonumber(ARGV[1]) then
  return 0
end
return 1
```

下面是使用 Spring Boot 中 `RedisTemplate` 来实现的 lua 脚本调用测试代码：

```java

@SpringBootTest
class RedisLuaLimiterByIncr {
    private static String KEY_PREFIX = "limiter_";
    private static String QPS = "4";
    private static String EXPIRE_TIME = "1";
 
    @Autowired
    private StringRedisTemplate stringRedisTemplate;
 
    @Test
    public void redisLuaLimiterTests() throws InterruptedException, IOException {
        for (int i = 0; i < 15; i++) {
            Thread.sleep(200);
            System.out.println(LocalTime.now() + " " + acquire("user1"));
        }
    }
 
    /**
     * 计数器限流
     *
     * @param key
     * @return
     */
    public boolean acquire(String key) {
        // 当前秒数作为 key
        key = KEY_PREFIX + key + System.currentTimeMillis() / 1000;
        DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>();
        redisScript.setResultType(Long.class);
        //lua文件存放在resources目录下
        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("limiter.lua")));
        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), QPS, EXPIRE_TIME) == 1;
    }
}
```

代码中虽然限制了 QPS 为 4，但是因为这种限流实现是把毫秒时间戳作为 key 的，所以会有临界窗口突变的问题，下面是运行结果，可以看到因为时间窗口的变化，导致了 QPS 超过了限制值 4。

```text
17:38:23.122044 true
17:38:23.695124 true
17:38:23.903220 true
# 此处有时间窗口变化，所以下面继续 true
17:38:24.106206 true
17:38:24.313458 true
17:38:24.519431 true
17:38:24.724446 true
17:38:24.932387 false
17:38:25.137912 true
17:38:25.355595 true
17:38:25.558219 true
17:38:25.765801 true
17:38:25.969426 false
17:38:26.176220 true
17:38:26.381918 true
```

## 滑动窗口限流

通过对上面的基于 `incr` 命令实现的 Redis 限流方式的测试，我们已经发现了固定窗口限流所带来的问题，在这篇文章的第三部分已经介绍了滑动窗口限流的优势，
它可以大幅度降低因为窗口临界突变带来的问题，那么如何使用 Redis 来实现滑动窗口限流呢？

这里主要使用 `ZSET` 有序集合来实现滑动窗口限流，`ZSET` 集合有下面几个特点：

- `ZSET` 集合中的  key 值可以自动排序。
- `ZSET` 集合中的 value 不能有重复值。
- `ZSET` 集合可以方便的使用 `ZCARD` 命令获取元素个数。
- `ZSET` 集合可以方便的使用 `ZREMRANGEBYLEX` 命令移除指定范围的 key 值。

基于上面的四点特性，可以编写出基于 `ZSET` 的滑动窗口限流 lua 脚本。

```shell
--KEYS[1]: 限流 key
--ARGV[1]: 时间戳 - 时间窗口
--ARGV[2]: 当前时间戳（作为score）
--ARGV[3]: 阈值
--ARGV[4]: score 对应的唯一value
-- 1. 移除时间窗口之前的数据
redis.call('zremrangeByScore', KEYS[1], 0, ARGV[1])
-- 2. 统计当前元素数量
local res = redis.call('zcard', KEYS[1])
-- 3. 是否超过阈值
if (res == nil) or (res < tonumber(ARGV[3])) then
    redis.call('zadd', KEYS[1], ARGV[2], ARGV[4])
    return 1
else
    return 0
```

下面是使用 Spring Boot 中 `RedisTemplate` 来实现的 lua 脚本调用测试代码：

```java
@SpringBootTest
class RedisLuaLimiterByZset {
 
    private String KEY_PREFIX = "limiter_";
    private String QPS = "4";
 
    @Autowired
    private StringRedisTemplate stringRedisTemplate;
 
    @Test
    public void redisLuaLimiterTests() throws InterruptedException, IOException {
        for (int i = 0; i < 15; i++) {
            Thread.sleep(200);
            System.out.println(LocalTime.now() + " " + acquire("user1"));
        }
    }
 
    /**
     * 计数器限流
     *
     * @param key
     * @return
     */
    public boolean acquire(String key) {
        long now = System.currentTimeMillis();
        key = KEY_PREFIX + key;
        String oldest = String.valueOf(now - 1_000);
        String score = String.valueOf(now);
        String scoreValue = score;
        DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>();
        redisScript.setResultType(Long.class);
        //lua文件存放在resources目录下
        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("limiter2.lua")));
        return stringRedisTemplate.execute(redisScript, Arrays.asList(key), oldest, score, QPS, scoreValue) == 1;
    }
}
```

代码中限制 QPS 为 4，运行结果信息与之一致。

```text
17:36:37.150370 true
17:36:37.716341 true
17:36:37.922577 true
17:36:38.127497 true
17:36:38.335879 true
17:36:38.539225 false
17:36:38.745903 true
17:36:38.952491 true
17:36:39.159497 true
17:36:39.365239 true
17:36:39.570572 false
17:36:39.776635 true
17:36:39.982022 true
17:36:40.185614 true
17:36:40.389469 true
```