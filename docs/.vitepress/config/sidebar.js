export default {
    '/Java/Java/生产环境下性能监控与调优/': [
        {text: '为什么要学习这课程', link: '/Java/Java/生产环境下性能监控与调优/为什么要学习这课程'},
        {
            text: '基于 JDK 命令行工具的监控',
            collapsed: true,
            items: [
                {text: 'JVM 参数类型', link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/JVM参数类型'},
                {text: '查看运行时 JVM 参数', link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/查看运行时JVM参数'},
                {text: '查看 JVM 统计信息', link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/查看JVM统计信息'},
                {text: 'jmap + MAT 实战内存溢出', link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/jmapMAT实战内存溢出'},
                {text: 'jstack 实战死循环与死锁', link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/jstack实战死循环与死锁'},
            ],
        },
        {
            text: '基于 JVisualVM 的可视化监控',
            collapsed: true,
            items: [
                {text: '监控本地 JAVA 进程', link: '/Java/Java/生产环境下性能监控与调优/基于JVisualVM的可视化监控/监控本地JAVA进程'},
                {text: '监控远程 JAVA 进程', link: '/Java/Java/生产环境下性能监控与调优/基于JVisualVM的可视化监控/监控远程JAVA进程'},
            ],
        },{
            text: '基于 Btrace 的监控调试',
            collapsed: true,
            items: [
                {text: 'Btrace安装使用入门', link: '/Java/Java/生产环境下性能监控与调优/基于Btrace的监控调试/Btrace安装使用入门'},
                {text: 'Btrace使用详解', link: '/Java/Java/生产环境下性能监控与调优/基于Btrace的监控调试/Btrace使用详解'},
            ],
        },{
            text: 'Tomcat 性能监控与调优',
            collapsed: true,
            items: [
                {text: 'Tomcat 远程 debug', link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/Tomcat远程debug'},
                {text: 'Tomcat-manager 监控 Tomcat', link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/Tomcat-manager监控Tomcat'},
                {text: 'psi-probe 监控 Tomcat', link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/psi-probe监控Tomcat'},
                {text: 'Tomcat 调优', link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/Tomcat调优'},
            ],
        },
        {
            text: 'Nginx 性能监控与调优',
            collapsed: true,
            items: [
                {text: 'nginx 简单安装', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/nginx简单安装'},
                {text: 'ngx_http_stub_status 监控链接信息', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/ngx_http_stub_status监控链接信息'},
                {text: 'ngxtop 监控请求信息', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/ngxtop监控请求信息'},
                {text: 'nginx-rrd 图形化监控', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/nginx-rrd图形化监控'},
                {text: 'nginx 调优', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/nginx调优'},
            ],
        },
        {
            text: 'JVM 层 GC 调优',
            collapsed: true,
            items: [
                {text: 'JVM 内存结构：基于 JDK 1.8', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/JVM内存结构'},
                {text: '垃圾回收算法', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/垃圾回收算法'},
                {text: '垃圾收集器', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/垃圾收集器'},
                {text: 'GC 日志格式与可视化日志分析工具', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/GC日志格式与可视化日志分析工具'},
                {text: 'Tomcat 的 GC 调优实战', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/Tomcat的GC调优实战'},
            ],
        },
        {
            text: 'Java 代码层优化',
            collapsed: true,
            items: [
                {text: 'JVM 字节码指令与 javap', link: '/Java/Java/生产环境下性能监控与调优/Java代码层优化/JVM字节码指令与javap'},
                {text: '字节码指令简单介绍', link: '/Java/Java/生产环境下性能监控与调优/Java代码层优化/字节码指令简单介绍'},
                {text: '常用代码优化方法', link: '/Java/Java/生产环境下性能监控与调优/Java代码层优化/常用代码优化方法'},
            ],
        },
    ],
    '/Java/JVM/深入浅出JVM/': [
        {
            text: '深入浅出JVM',
            // collapsed: true,
            items: [
                {text: '1、JVM 内存结构', link: '/Java/JVM/深入浅出JVM/JVM内存结构'},
                {text: '2、HotSpot虚拟机对象探秘', link: '/Java/JVM/深入浅出JVM/HotSpot虚拟机对象探秘'},
                {text: '3、垃圾收集策略与算法', link: '/Java/JVM/深入浅出JVM/垃圾收集策略与算法'},
                {text: '4、HotSpot垃圾收集器', link: '/Java/JVM/深入浅出JVM/HotSpot垃圾收集器'},
                {text: '5、内存分配与回收策略', link: '/Java/JVM/深入浅出JVM/内存分配与回收策略'},
                {text: '6、JVM性能调优', link: '/Java/JVM/深入浅出JVM/JVM性能调优'},
                {text: '7、类文件结构', link: '/Java/JVM/深入浅出JVM/类文件结构'},
                {text: '8、类加载的时机', link: '/Java/JVM/深入浅出JVM/类加载的时机'},
                {text: '9、类加载的过程', link: '/Java/JVM/深入浅出JVM/类加载的过程'},
                {text: '10、类加载器', link: '/Java/JVM/深入浅出JVM/类加载器'},
            ],
        }
    ],
    '/Java/JVM/常见问题/': [
        {
            text: '前置知识',
            items: [
                {text: '深入浅出JVM', link: '/Java/JVM/深入浅出JVM/JVM内存结构'},
            ],
        },
        {
            text: '单篇问题',
            items: [
                {text: 'Java中的对象一定是在堆上分配的吗', link: '/Java/JVM/常见问题/Java中的对象一定是在堆上分配的吗'},
                {text: '元空间会产生内存溢出么', link: '/Java/JVM/常见问题/元空间会产生内存溢出么'},
                {text: 'JVM的主要组成部分及其作用', link: '/Java/JVM/常见问题/JVM的主要组成部分及其作用'},
                {text: 'JVM 运行时堆内存如何分代', link: '/Java/JVM/常见问题/JVM运行时堆内存如何分代'},
                {text: 'JVM为什么要进行分代', link: '/Java/JVM/常见问题/JVM为什么要进行分代'},
                {text: 'JVM有哪些垃圾回收算法', link: '/Java/JVM/常见问题/JVM有哪些垃圾回收算法'},
                {text: 'JVM有哪些垃圾收集器', link: '/Java/JVM/常见问题/JVM有哪些垃圾收集器'},
                {text: '深拷贝和浅拷贝', link: '/Java/JVM/常见问题/深拷贝和浅拷贝'},
                {text: '说一下堆栈的区别', link: '/Java/JVM/常见问题/说一下堆栈的区别'},
            ],
        },
        {
            text: '问题合集',
            items: [
                {text: 'Java内存区域相关问题', link: '/Java/JVM/常见问题/Java内存区域相关问题'},
                {text: 'HotSpot虚拟机对象相关问题', link: '/Java/JVM/常见问题/HotSpot虚拟机对象相关问题'},
                {text: '内存溢出异常相关问题', link: '/Java/JVM/常见问题/内存溢出异常相关问题'},
                {text: '垃圾收集器相关问题', link: '/Java/JVM/常见问题/垃圾收集器相关问题'},
                {text: '类加载机制相关问题', link: '/Java/JVM/常见问题/类加载机制相关问题'},
                {text: 'JVM调优相关问题', link: '/Java/JVM/常见问题/JVM调优相关问题'},
            ],
        }
    ],
    '/Java/SpringBoot/常见问题/': [
        {
            text: '前置知识',
            items: [
            ],
        },
        {
            text: '单篇问题',
            items: [
            ],
        },
        {
            text: '问题合集',
            items: [
                {text: 'SpringBoot概述相关问题', link: 'Java/SpringBoot/常见问题/SpringBoot概述相关问题'},
                {text: '自动配置相关问题', link: 'Java/SpringBoot/常见问题/自动配置相关问题'},
                {text: '安全相关问题', link: 'Java/SpringBoot/常见问题/安全相关问题'},
                {text: '监视器相关问题', link: 'Java/SpringBoot/常见问题/监视器相关问题'},
            ],
        }
    ],
    '/分布式/消息队列/常见问题/': [
        {
            text: '消息队列',
            // collapsed: true,
            items: [
                {text: '为什么使用消息队列', link: '/分布式/消息队列/常见问题/为什么使用消息队列'},
                {text: '如何保证消息队列的高可用', link: '/分布式/消息队列/常见问题/如何保证消息队列的高可用'},
            ],
        }
    ],
    '/分布式/高并发系统/高并发系统设计40问/': [
        {
            text: '开篇',
            collapsed: true,
            items: [{text: '为什么你要学习高并发系统设计', link: '/分布式/高并发系统/高并发系统设计40问/开篇/为什么你要学习高并发系统设计'},],
        },
        {
            text: '基础篇',
            collapsed: true,
            items: [
                {text: '01丨它的通用设计方法是什么?', link: '/分布式/高并发系统/高并发系统设计40问/基础篇/它的通用设计方法是什么'},
                {text: '02丨我们为什么一定要这么做?', link: '/分布式/高并发系统/高并发系统设计40问/基础篇/我们为什么一定要这么做'},
                {text: '03丨如何提升系统性能?', link: '/分布式/高并发系统/高并发系统设计40问/基础篇/如何提升系统性能'},
                {text: '04丨系统怎样做到高可用?', link: '/分布式/高并发系统/高并发系统设计40问/基础篇/系统怎样做到高可用'},
                {text: '05丨如何让系统易于扩展?', link: '/分布式/高并发系统/高并发系统设计40问/基础篇/如何让系统易于扩展'},
                {text: '06丨当问到组件实现原理时，面试官是在刁难你吗?', link: '/分布式/高并发系统/高并发系统设计40问/基础篇/面试现场第1期'},
            ],
        },
        {
            text: '演进篇-数据库',
            collapsed: true,
            items: [
                {text: '07丨如何减少频繁创建数据库连接的性能损耗?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-数据库/如何减少频繁创建数据库连接的性能损耗'},
                {text: '08丨查询请求增加时，如何做主从分离?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-数据库/查询请求增加时，如何做主从分离'},
                {text: '09丨写入数据量增加时，如何实现分库分表?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-数据库/写入数据量增加时，如何实现分库分表'},
                {text: '10丨如何保证分库分表后ID的全局唯一性?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-数据库/如何保证分库分表后ID的全局唯一性'},
                {text: '11丨在高并发场景下，数据库和NoSQL如何做到互补?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-数据库/在高并发场景下，数据库和NoSQL如何做到互补'},
            ],
        },
        {
            text: '演进篇-缓存',
            collapsed: true,
            items: [
                {text: '12丨数据库成为瓶颈后，动态数据的查询要如何加速?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-缓存/数据库成为瓶颈后，动态数据的查询要如何加速'},
                {text: '13丨如何选择缓存的读写策略?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-缓存/如何选择缓存的读写策略'},
                {text: '14丨缓存如何做到高可用?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-缓存/缓存如何做到高可用'},
                {text: '15丨缓存穿透了怎么办?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-缓存/缓存穿透了怎么办'},
                {text: '16丨静态资源如何加速?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-缓存/静态资源如何加速'},
                {text: '加餐丨数据的迁移应该如何做?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-缓存/数据的迁移应该如何做'},
            ],
        },
        {
            text: '演进篇-消息队列',
            collapsed: true,
            items: [
                {text: '17丨秒杀时如何处理每秒上万次的下单请求?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-消息队列/秒杀时如何处理每秒上万次的下单请求'},
                {text: '18丨如何保证消息仅仅被消费一次?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-消息队列/如何保证消息仅仅被消费一次'},
                {text: '19丨如何降低消息队列系统中消息的延迟?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-消息队列/如何降低消息队列系统中消息的延迟'},
                {text: '20丨面试现场第2期', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-消息队列/面试现场第2期'},
                {text: '期中测试丨10道高并发系统设计题目自测', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-消息队列/10道高并发系统设计题目自测'},
            ],
        },
        {
            text: '演进篇-分布式服务',
            collapsed: true,
            items: [
                {text: '21丨每秒 1 万次请求的系统要做服务化拆分吗?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/每秒1万次请求的系统要做服务化拆分吗'},
                {text: '22丨微服务化后，系统架构要如何改造?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/微服务化后，系统架构要如何改造'},
                {text: '23丨10 万 QPS 下如何实现毫秒级的服务调用?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/10万QPS下如何实现毫秒级的服务调用'},
                {text: '24丨分布式系统如何寻址?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/分布式系统如何寻址'},
                {text: '25丨横跨几十个分布式组件的慢请求要如何排查?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/横跨几十个分布式组件的慢请求要如何排查'},
                {text: '26丨怎样提升系统的横向扩展能力?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/怎样提升系统的横向扩展能力'},
                {text: '27丨系统的门面要如何做呢?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/系统的门面要如何做呢'},
                {text: '28丨跨地域的分布式系统如何做?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/跨地域的分布式系统如何做'},
                {text: '29丨如何屏蔽服务化系统的服务治理细节?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-分布式服务/如何屏蔽服务化系统的服务治理细节'},
            ],
        },
        {
            text: '演进篇-维护',
            collapsed: true,
            items: [
                {text: '30丨服务端监控要怎么做?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/服务端监控要怎么做'},
                {text: '31丨用户的使用体验应该如何监控?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/用户的使用体验应该如何监控'},
                {text: '32丨怎样设计全链路压力测试平台?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/怎样设计全链路压力测试平台'},
                {text: '33丨成千上万的配置项要如何管理?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/成千上万的配置项要如何管理'},
                {text: '34丨如何屏蔽非核心系统故障的影响?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/如何屏蔽非核心系统故障的影响'},
                {text: '35丨高并发系统中我们如何操纵流量?', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/高并发系统中我们如何操纵流量'},
                {text: '36丨面试现场第3期', link: '/分布式/高并发系统/高并发系统设计40问/演进篇-维护/面试现场第3期'},
            ],
        },
        {
            text: '实战篇',
            collapsed: true,
            items: [
                {text: '37丨面对海量数据的计数器要如何做?', link: '/分布式/高并发系统/高并发系统设计40问/实战篇/面对海量数据的计数器要如何做'},
                {text: '38丨50万QPS下如何设计未读数系统?', link: '/分布式/高并发系统/高并发系统设计40问/实战篇/50万QPS下如何设计未读数系统'},
                {text: '39丨通用信息流系统的推模式要如何做?', link: '/分布式/高并发系统/高并发系统设计40问/实战篇/通用信息流系统的推模式要如何做'},
                {text: '40丨通用信息流系统的拉模式要如何做?', link: '/分布式/高并发系统/高并发系统设计40问/实战篇/通用信息流系统的拉模式要如何做'},
            ],
        }
    ],
    '/数据库/书籍鉴赏/': [
        {
            text: '字符集和比较规则',
            collapsed: true,
            items: [
                {
                    text: '字符集和比较规则简介',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/字符集和比较规则/字符集和比较规则简介'
                },
                {
                    text: 'MySQL支持的字符集和排序规则',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/字符集和比较规则/MySQL支持的字符集和排序规则'
                },
                {
                    text: '字符集和比较规则的应用',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/字符集和比较规则/字符集和比较规则的应用'
                },
                {text: '总结', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/字符集和比较规则/总结'},
            ],
        },
        {
            text: 'InnoDB记录结构',
            collapsed: true,
            items: [
                {text: 'InnoDB页简介', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB记录结构/InnoDB页简介'},
                {text: 'InnoDB行格式', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB记录结构/InnoDB行格式'},
                {text: '总结', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB记录结构/总结'},
            ],
        },
        {
            text: 'InnoDB数据页结构',
            collapsed: true,
            items: [
                {
                    text: '不同类型的页简介',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/不同类型的页简介'
                },
                {
                    text: '数据页结构的快速浏览',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/数据页结构的快速浏览'
                },
                {
                    text: '记录在页中的存储',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/记录在页中的存储'
                },
                {
                    text: 'Page Directory（页目录）',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/Page Directory（页目录）'
                },
                {
                    text: 'Page Header（页面头部）',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/Page Header（页面头部）'
                },
                {
                    text: 'File Header（文件头部）',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/File Header（文件头部）'
                },
                {text: 'File Trailer', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/File Trailer'},
                {text: '总结', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB数据页结构/总结'},
            ],
        },
        {
            text: 'B+树索引',
            collapsed: true,
            items: [
                {text: '没有索引的查找', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引/没有索引的查找'},
                {text: '索引', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引/索引'},
            ],
        },
        {
            text: 'B+树索引的使用',
            collapsed: true,
            items: [
                {text: '索引的代价', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引的使用/索引的代价'},
                {
                    text: 'B+树索引适用的条件',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引的使用/B+树索引适用的条件'
                },
                {text: '回表的代价', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引的使用/回表的代价'},
                {text: '如何挑选索引', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引的使用/如何挑选索引'},
                {text: '总结', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/B+树索引的使用/总结'},
            ],
        },
        {
            text: 'MySQL的数据目录',
            collapsed: true,
            items: [
                {
                    text: '数据库和文件系统的关系',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL的数据目录/数据库和文件系统的关系'
                },
                {text: 'MySQL数据目录', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL的数据目录/MySQL数据目录'},
                {text: '数据目录的结构', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL的数据目录/数据目录的结构'},
                {
                    text: '文件系统对数据库的影响',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL的数据目录/文件系统对数据库的影响'
                },
                {
                    text: 'MySQL系统数据库简介',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL的数据目录/MySQL系统数据库简介'
                },
            ],
        },
        {
            text: 'InnoDB的表空间',
            collapsed: true,
            items: [
                {text: '回忆一些旧知识', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB的表空间/回忆一些旧知识'},
                {text: '独立表空间结构', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB的表空间/独立表空间结构'},
                {text: '系统表空间', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB的表空间/系统表空间'},
                {text: '总结', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB的表空间/总结'},
            ],
        },
        {
            text: '单表访问方法',
            collapsed: true,
            items: [
                {
                    text: '访问方法（access method）的概念',
                    link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/访问方法（access method）的概念'
                },
                {text: 'const', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/const'},
                {text: 'ref', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/ref'},
                {text: 'ref_or_null', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/ref_or_null'},
                {text: 'range', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/range'},
                {text: 'index', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/index'},
                {text: 'all', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/all'},
                {text: '注意事项', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/单表访问方法/注意事项'},
            ],
        },
        {
            text: '连接的原理',
            collapsed: true,
            items: [
                {text: '连接简介', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/连接的原理/连接简介'},
                {text: '连接的原理', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/连接的原理/连接的原理'},
            ],
        },
        {
            text: 'MySQL基于成本的优化',
            collapsed: true,
            items: [
                {text: '什么是成本', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL基于成本的优化/什么是成本'},
                {text: '单表查询的成本', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL基于成本的优化/单表查询的成本'},
                {text: '连接查询的成本', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL基于成本的优化/连接查询的成本'},
                {text: '调节成本常数', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/MySQL基于成本的优化/调节成本常数'},
            ],
        },
    ],
    '/数据库/MySQL/': [
        {
            text: 'MySQL常见八股文',
            // collapsed: true,
            items: [
                {text: '基础', link: '/数据库/MySQL/常见问题/基础'},
                {text: '索引', link: '/数据库/MySQL/常见问题/索引'},
                {text: '存储', link: '/数据库/MySQL/常见问题/存储'},
                {text: '事务', link: '/数据库/MySQL/常见问题/事务'},
                {text: '锁', link: '/数据库/MySQL/常见问题/锁'},
                {text: '进阶功能', link: '/数据库/MySQL/常见问题/进阶功能'},
                {text: '集群', link: '/数据库/MySQL/常见问题/集群'},
                {text: 'SQL', link: '/数据库/MySQL/常见问题/SQL'},
            ],
        },
        {
            text: 'MySQL进阶八股文',
            // collapsed: true,
            items: [
                {
                    text: 'MySQL的索引为什么使用B+树而不是用跳表?',
                    link: '/数据库/MySQL/进阶问题/MySQL的索引为什么使用B+树而不是用跳表'
                }, {
                    text: 'MySQL一条查询语句的执行过程',
                    link: '/数据库/MySQL/进阶问题/MySQL一条查询语句的执行过程'
                },
            ],
        }
    ],
    '/数据库/Redis/': [
        {
            text: 'Redis常见八股文',
            // collapsed: true,
            items: [
                {text: '基本概念', link: '/数据库/Redis/常见问题/基本概念'},
                {text: '数据结构', link: '/数据库/Redis/常见问题/数据结构'},
                {text: '数据存储', link: '/数据库/Redis/常见问题/数据存储'},
                {text: '多线程', link: '/数据库/Redis/常见问题/多线程'},
                {text: '集群', link: '/数据库/Redis/常见问题/集群'},
                {text: '业务场景', link: '/数据库/Redis/常见问题/业务场景'},
                {text: '优化', link: '/数据库/Redis/常见问题/优化'},
            ],
        },
        {
            text: 'Redis进阶八股文',
            // collapsed: true,
            items: [
                {text: '如何保证Redis的高并发', link: '/数据库/Redis/进阶问题/如何保证Redis的高并发'},
                {text: 'Redis实现分布式锁的7种方案', link: '/数据库/Redis/进阶问题/Redis实现分布式锁的7种方案'},
                {text: 'Redis实现排行榜', link: '/数据库/Redis/进阶问题/Redis实现排行榜'},
            ],
        }
    ],
    '/数据库/GBase/': [
        {
            text: '开发技巧',
            // collapsed: true,
            items: [
                {text: '查看执行计划', link: '/数据库/GBase/开发技巧/查看执行计划'},
            ],
        }
    ],
    '/开发技巧/坏味道/': [
        {
            text: '坏味道',
            // collapsed: true,
            items: [
                {text: '降低代码可读性的12个技巧', link: '/开发秘籍/招式下三滥/降低代码可读性的12个技巧'},
            ],
        }
    ],
    '/开发技巧/算法/常见算法': [
        {
            text: '较为常见的算法',
            // collapsed: true,
            items: [
                {text: '一致性Hash算法', link: '/开发技巧/算法/常见算法/一致性Hash算法'},
            ],
        }
    ],
    '/开发技巧/常用命令/Linux': [
        {
            text: 'Linux常用命令',
            // collapsed: true,
            items: [
                {text: 'Linux防火墙命令', link: '/开发技巧/常用命令/Linux/Linux防火墙命令'},
                {text: 'Linux端口命令', link: '/开发技巧/常用命令/Linux/Linux端口命令'},
            ],
        }
    ],
    '/开发技巧/常用命令/Redis': [
        {
            text: 'Redis命令',
            // collapsed: true,
            items: [
                {text: 'Redis常用命令', link: '/开发技巧/常用命令/Redis/Redis常用命令'},
            ],
        }
    ],
    '/框架配置/': [
        {
            text: 'VitePress',
            // collapsed: true,
            items: [
                {text: '图片缩放功能', link: '/框架配置/VitePress/图片缩放功能'},
            ],
        }
    ],
    '/实战项目/Netty/仿写微信IM即时通讯系统/': [
        {
            text: '仿写微信IM即时通讯系统',
            // collapsed: true,
            items: [
                {text: '1、仿微信IM系统简介', link: '/实战项目/Netty/仿写微信IM即时通讯系统/仿微信IM系统简介'},
                {text: '2、Netty是什么', link: '/实战项目/Netty/仿写微信IM即时通讯系统/Netty是什么'},
                {text: '3、服务端启动流程', link: '/实战项目/Netty/仿写微信IM即时通讯系统/服务端启动流程'},
                {text: '4、客户端启动流程', link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端启动流程'},
                {
                    text: '5、客户端与服务端双向通讯',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端与服务端双向通讯'
                },
                {
                    text: '6、数据传输载体ByteBuf介绍',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/数据传输载体ByteBuf介绍'
                },
                {
                    text: '7、客户端与服务端通讯协议编解码',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端与服务端通讯协议编解码'
                },
                {text: '8、实现客户端登录', link: '/实战项目/Netty/仿写微信IM即时通讯系统/实现客户端登录'},
                {
                    text: '9、实现客户端与服务端收发消息',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/实现客户端与服务端收发消息'
                },
                {
                    text: '10、pipeline与channelHandler',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/pipeline与channelHandler'
                },
                {
                    text: '11、构建客户端与服务端pipeline',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/构建客户端与服务端pipeline'
                },
                {
                    text: '12、拆包粘包理论与解决方案',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/拆包粘包理论与解决方案'
                },
                {
                    text: '13、channelHandler的生命周期',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/channelHandler的生命周期'
                },
                {
                    text: '14、使用channelHandler的热插拔实现客户端身份校验',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/使用channelHandler的热插拔实现客户端身份校验'
                },
                {text: '15、客户端互聊原理与实现', link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端互聊原理与实现'},
                {text: '16、群聊的发起与通知', link: '/实战项目/Netty/仿写微信IM即时通讯系统/群聊的发起与通知'},
                {text: '17、群聊的成员管理', link: '/实战项目/Netty/仿写微信IM即时通讯系统/群聊的成员管理'},
                {
                    text: '18、群聊消息的收发及Netty性能优化',
                    link: '/实战项目/Netty/仿写微信IM即时通讯系统/群聊消息的收发及Netty性能优化'
                },
                {text: '19、心跳与空间检测', link: '/实战项目/Netty/仿写微信IM即时通讯系统/心跳与空间检测'},
                {text: '20、总结', link: '/实战项目/Netty/仿写微信IM即时通讯系统/总结'},
            ],
        }
    ],
    '/书籍下载/Java/': [
        {
            text: 'Java',
            items: [
                {text: 'NIO', link: '/书籍下载/Java/Java#nio'},
                {text: '并发编程', link: '/书籍下载/Java/Java#并发编程'},
            ],
        },
    ],
    '/书籍下载/网络/': [
        {
            text: '网络',
            items: [
                {text: 'HTTP', link: '/书籍下载/网络/网络#http'},
            ],
        },
    ],
    '/书籍下载/数据库/': [
        {
            text: '数据库',
            items: [
                {text: 'MySQL', link: '/书籍下载/数据库/数据库#mysql'},
            ],
        },
    ],
    '/资源搜罗/VPN/': [
        {
            text: '一线机场',
            collapsed: true,
            items: [
                {text: 'nexitally(奶昔)', link: '/资源搜罗/VPN/机场#nexitally-奶昔'},
                {text: 'ytoo', link: '/资源搜罗/VPN/机场#ytoo'},
                {text: 'mesl', link: '/资源搜罗/VPN/机场#mesl'},
                {text: 'TAG', link: '/资源搜罗/VPN/机场#tag'},
                {text: 'flowercloud(花云)', link: '/资源搜罗/VPN/机场#flowercloud-花云'},
                {text: 'AmyTelecom', link: '/资源搜罗/VPN/机场#amytelecom'},
                {text: 'ImmTelecom', link: '/资源搜罗/VPN/机场#immtelecom'},
            ],
        },
        {
            text: '二线机场',
            collapsed: true,
            items: [
                {text: 'Bitz', link: '/资源搜罗/VPN/机场#bitz'},
                {text: 'Flyingbird', link: '/资源搜罗/VPN/机场#flyingbird'},
                {text: 'v2tun', link: '/资源搜罗/VPN/机场#v2tun'},
                {text: 'cnix(薯条)', link: '/资源搜罗/VPN/机场#cnix-薯条'},
                {text: 'WestData(西部数据)', link: '/资源搜罗/VPN/机场#westdata-西部数据'},
                {text: '跑路云', link: '/资源搜罗/VPN/机场#跑路云'},
                {text: 'FastLink', link: '/资源搜罗/VPN/机场#fastlink'},
                {text: 'Godetia', link: '/资源搜罗/VPN/机场#godetia'},
                {text: 'CTC', link: '/资源搜罗/VPN/机场#ctc'},
                {text: 'texon', link: '/资源搜罗/VPN/机场#texon'},
                {text: 'CreamData(奶油)', link: '/资源搜罗/VPN/机场#creamdata-奶油'},
                {text: '白月光', link: '/资源搜罗/VPN/机场#白月光'},
                {text: 'MDSS', link: '/资源搜罗/VPN/机场#mdss'},
            ],
        },
        {
            text: '中转机场',
            collapsed: true,
            items: [
                {text: '猫熊', link: '/资源搜罗/VPN/机场#猫熊'},
                {text: '魔戒', link: '/资源搜罗/VPN/机场#魔戒'},
                {text: '中国国际机场', link: '/资源搜罗/VPN/机场#中国国际机场'},
                {text: '次元云', link: '/资源搜罗/VPN/机场#次元云'},
                {text: 'CoffeeCloud', link: '/资源搜罗/VPN/机场#coffeecloud'},
                {text: 'COO NETWORK', link: '/资源搜罗/VPN/机场#coo-network'},
                {text: '奇妙之旅', link: '/资源搜罗/VPN/机场#奇妙之旅'},
            ],
        },
    ],
}
