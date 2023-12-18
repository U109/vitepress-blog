import FrameConfiguration from "./sidebars/Java/FrameConfiguration";
import IMSystem from "./sidebars/实战项目/Netty/IMSystem";
import MonitoringAndTuning from "./sidebars/Java/Java/MonitoringAndTuning";
import InDepthIntroductionToJVM from "./sidebars/Java/JVM/InDepthIntroductionToJVM";
import Questions from "./sidebars/分布式/高并发系统/40Questions";
import MySQLQuestions from "./sidebars/数据库/MySQL/MySQLQuestions";
import HowDoesMySQLRun from "./sidebars/数据库/书籍鉴赏/HowDoesMySQLRun";
import VPN from "./sidebars/资源搜罗/VPN";
import Redis from "./sidebars/数据库/Redis/Redis";

export default {
    '/Java/Java/生产环境下性能监控与调优/': MonitoringAndTuning,
    '/Java/Java/常见问题/': [
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
                {text: 'Java概述', link: '/Java/Java/常见问题/Java概述'},
                {text: '面向对象', link: '/Java/Java/常见问题/面向对象'},
            ],
        }
    ],
    '/Java/JVM/深入浅出JVM/': InDepthIntroductionToJVM,
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
            items: [],
        },
        {
            text: '单篇问题',
            items: [
                {text: 'Spring Bean的生命周期', link: '/Java/SpringBoot/常见问题/SpringBean的生命周期'},
                {text: 'Spring如何解决循环依赖', link: '/Java/SpringBoot/常见问题/Spring如何解决循环依赖'},
                {text: 'Spring中事务传播行为', link: '/Java/SpringBoot/常见问题/Spring中事务传播行为'},
                {text: 'Spring事务失效的问题', link: '/Java/SpringBoot/常见问题/Spring事务失效的问题'},
                {
                    text: 'Spring中有哪些方式可以把Bean注入到IOC容器',
                    link: '/Java/SpringBoot/常见问题/Spring中有哪些方式可以把Bean注入到IOC容器'
                },
                {text: 'SpringBoot常用注解', link: '/Java/SpringBoot/常见问题/SpringBoot常用注解'},
                {text: 'SpringIOC的工作流程', link: '/Java/SpringBoot/常见问题/SpringIOC的工作流程'},
                {text: 'IOC容器中只存放单例Bean吗', link: '/Java/SpringBoot/常见问题/IOC容器中只存放单例Bean吗'},
            ],
        },
        {
            text: '问题合集',
            items: [
                {text: 'SpringBoot概述相关问题', link: '/Java/SpringBoot/常见问题/SpringBoot概述相关问题'},
                {text: '自动配置相关问题', link: '/Java/SpringBoot/常见问题/自动配置相关问题'},
                {text: '安全相关问题', link: '/Java/SpringBoot/常见问题/安全相关问题'},
                {text: '监视器相关问题', link: '/Java/SpringBoot/常见问题/监视器相关问题'},
                {text: '注解相关问题', link: '/Java/SpringBoot/常见问题/注解相关问题'},
            ],
        }
    ],
    '/Java/Netty/常见问题/': [
        {
            text: '前置知识',
            items: [],
        },
        {
            text: '单篇问题',
            items: [
                {text: 'Netty架构设计', link: '/Java/Netty/常见问题/Netty架构设计'},
            ],
        },
        {
            text: '问题合集',
            items: [
                {text: 'Netty理论相关问题', link: '/Java/Netty/常见问题/Netty理论相关问题'},
            ],
        }
    ],
    '/分布式/消息队列/常见问题/': [
        {
            text: '消息队列',
            // collapsed: true,
            items: [
                {text: 'RabbitMQ', link: '/分布式/消息队列/常见问题/RabbitMQ'},
                {text: '为什么使用消息队列', link: '/分布式/消息队列/常见问题/为什么使用消息队列'},
                {text: '如何保证消息队列的高可用', link: '/分布式/消息队列/常见问题/如何保证消息队列的高可用'},
            ],
        },
    ],
    '/分布式/高并发系统/高并发系统设计40问/': Questions,
    '/分布式/分布式事务/常见问题/': [
        {
            text: '单篇问题',
            // collapsed: true,
            items: [
                {text: '为什么使用消息队列', link: '/分布式/消息队列/常见问题/为什么使用消息队列'},
                {text: '如何保证消息队列的高可用', link: '/分布式/消息队列/常见问题/如何保证消息队列的高可用'},
            ],
        },
        {
            text: '问题合集',
            // collapsed: true,
            items: [
                {text: '为什么使用消息队列', link: '/分布式/消息队列/常见问题/为什么使用消息队列'},
                {text: '如何保证消息队列的高可用', link: '/分布式/消息队列/常见问题/如何保证消息队列的高可用'},
            ],
        },

    ],
    '/分布式/分布式事务/': [
        {
            text: '分布式事务',
            collapsed: true,
            items: [
                {text: '一图解读分布式事务', link: '/分布式/分布式事务/一图解读分布式事务'},
                {text: '分布式事务的基本概念', link: '/分布式/分布式事务/分布式事务的基本概念'},
                {text: 'CAP理论', link: '/分布式/分布式事务/CAP理论'},
                {text: 'BASE理论', link: '/分布式/分布式事务/BASE理论'},
                {text: '分布式事务分类：柔性事务和刚性事务', link: '/分布式/分布式事务/分布式事务分类'},
                {text: '刚性事务:XA模型、XA接口规范、XA实现', link: '/分布式/分布式事务/刚性事务'},
                {text: '柔性事务的分类', link: '/分布式/分布式事务/柔性事务的分类'},
                {text: '总体的方案对比', link: '/分布式/分布式事务/总体的方案对比'},
            ],
        },
        {
            text: '刚性事务',
            collapsed: true,
            items: [
                {text: '2PC(标准XA模型)', link: '/分布式/分布式事务/2PC'},
                {text: '3PC', link: '/分布式/分布式事务/3PC'},
            ],
        },
        {
            text: '柔性事务',
            collapsed: true,
            items: [
                {
                    text: '通知型事务',
                    items: [
                        {text: '异步确保型事务', link: '/分布式/分布式事务/异步确保型事务'},
                        {text: '最大努力通知事务', link: '/分布式/分布式事务/最大努力通知事务'},
                    ],
                },
                {
                    text: '补偿型事务',
                    items: [
                        {text: 'TCC事务模型', link: '/分布式/分布式事务/TCC事务模型'},
                        {text: 'SAGA长事务模型', link: '/分布式/分布式事务/SAGA长事务模型'},
                    ],
                },
            ],
        },
        {
            text: 'Seata',
            collapsed: true,
            items: [
                {text: 'Seata简介', link: '/分布式/分布式事务/Seata简介'},
                {text: 'Seata AT模式', link: '/分布式/分布式事务/Seata-AT模式'},
                {text: 'Seata TCC模式', link: '/分布式/分布式事务/Seata-TCC模式'},
                {text: 'Seata Saga模式', link: '/分布式/分布式事务/Seata-Saga模式'},
                {text: 'Seata XA模式', link: '/分布式/分布式事务/Seata-XA模式'},
            ],
        },
        {
            text: '一致性协议',
            collapsed: true,
            items: [
                {text: '2PC', link: '/分布式/分布式事务/协议/一致性协议/2PC'},
                {text: '3PC', link: '/分布式/分布式事务/协议/一致性协议/3PC'},
                {text: 'Paxos协议', link: '/分布式/分布式事务/协议/一致性协议/Paxos'},
                {text: 'Raft协议', link: '/分布式/分布式事务/协议/一致性协议/Raft协议'},
                {text: 'ZAB协议', link: '/分布式/分布式事务/协议/一致性协议/ZAB协议'},
            ],
        },
        {
            text: '常见问题',
            collapsed: true,
            items: [
                {text: '如何解决分布式事务问题', link: '/分布式/分布式事务/常见问题/如何解决分布式事务问题'},
                {text: '3PC', link: '/分布式/分布式事务/3PC'},
            ],
        },
    ],
    '/分布式/分布式锁/':[
        {
            text: '分布式锁',
            collapsed: true,
            items: [
                {text: '跨JVM的线程安全问题', link: '/分布式/分布式锁/跨JVM的线程安全问题'},
            ],
        },
        {
            text: '基于Redis实现',
            collapsed: true,
            items: [
                {text: '基于Jedis的API实现分布式锁', link: '/分布式/分布式锁/基于Jedis的API实现分布式锁'},
                {text: '基于Lua脚本实现分布式锁', link: '/分布式/分布式锁/基于Lua脚本实现分布式锁'},
                {text: 'STW导致的锁过期问题', link: '/分布式/分布式锁/STW导致的锁过期问题'},
            ],
        },
    ],
    '/数据库/书籍鉴赏/': HowDoesMySQLRun,
    '/数据库/MySQL/': MySQLQuestions,
    '/数据库/Redis/': Redis,
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
    '/开发技巧/框架配置/': FrameConfiguration,
    '/实战项目/Netty/仿写微信IM即时通讯系统/': IMSystem,
    '/实战项目/Java/监听MySQL的Binlog/': [
        {
            text: '监听MySQL的Binlog',
            items: [
                {text: 'Java监听MySQL的Binlog', link: '/实战项目/Java/监听MySQL的Binlog/Java监听MySQL的Binlog'},
                {text: 'Canal监听MySQL的Binlog', link: '/实战项目/Java/监听MySQL的Binlog/Canal监听MySQL的Binlog'},
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
    '/资源搜罗/VPN/': VPN,
}
