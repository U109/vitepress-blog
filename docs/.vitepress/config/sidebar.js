import FrameConfiguration from "./sidebars/Java/FrameConfiguration";
import IMSystem from "./sidebars/实战项目/Netty/IMSystem";
import MonitoringAndTuning from "./sidebars/Java/Java/MonitoringAndTuning";
import InDepthIntroductionToJVM from "./sidebars/Java/JVM/InDepthIntroductionToJVM";
import Questions from "./sidebars/分布式/高并发系统/40Questions";
import MySQLQuestions from "./sidebars/数据库/MySQL/MySQLQuestions";
import HowDoesMySQLRun from "./sidebars/数据库/书籍鉴赏/HowDoesMySQLRun";
import VPN from "./sidebars/资源搜罗/VPN";
import Redis from "./sidebars/数据库/Redis/Redis";
import DistributedLocks from "./sidebars/分布式/分布式锁/DistributedLocks";
import DistributedTransactions from "./sidebars/分布式/分布式事务/DistributedTransactions";
import RabbitMQ from "./sidebars/分布式/消息队列/RabbitMQ/RabbitMQ";

export default {
    '/Java/Java/生产环境下性能监控与调优/': MonitoringAndTuning,
    '/Java/Java/常见问题/': [
        {
            text: '前置知识',
            items: [],
        },
        {
            text: '单篇问题',
            items: [],
        },
        {
            text: '问题合集',
            items: [
                {text: 'Java概述', link: '/Java/Java/常见问题/Java概述'},
                {text: '面向对象', link: '/Java/Java/常见问题/面向对象'},
                {text: '基础语法', link: '/Java/Java/常见问题/基础语法'},
            ],
        }
    ],
    '/Java/JUC/': [
        {
            text: '并发编程',
            collapsed: true,
            items: [
                {text: 'wait和sleep的区别', link: '/Java/JUC/并发编程/wait和sleep的区别'},
                {text: 'wait()方法为什么要放在同步块中？', link: '/Java/JUC/并发编程/wait方法为什么要放在同步块中'},
            ],
        },
        {
            text: 'JUC并发包与容器类',
            collapsed: true,
            items: [
                {text: '一、什么是JUC', link: '/Java/JUC/JUC并发包与容器类/什么是JUC'},
                {text: '二、基本知识', link: '/Java/JUC/JUC并发包与容器类/基本知识'},
                {text: '三、Lock锁', link: '/Java/JUC/JUC并发包与容器类/Lock锁'},
                {text: '四、生产者消费者问题', link: '/Java/JUC/JUC并发包与容器类/生产者消费者问题'},
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
                {text: 'Spring增强器', link: '/Java/SpringBoot/常见问题/Spring增强器'},
                {text: 'Controller增强器', link: '/Java/SpringBoot/常见问题/Controller增强器'},
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
    '/分布式/消息队列/RabbitMQ/': RabbitMQ,
    '/分布式/消息队列/常见问题/': [
        {
            text: '前置知识',
            // collapsed: true,
            items: [
                {text: 'RabbitMQ学习', link: '/分布式/消息队列/RabbitMQ/MQ相关的概念/MQ的基本概念'},
            ],
        },
        {
            text: '问题合集',
            // collapsed: true,
            items: [
                {text: 'RabbitMQ相关问题', link: '/分布式/消息队列/常见问题/RabbitMQ'},
                {text: '为什么使用消息队列', link: '/分布式/消息队列/常见问题/为什么使用消息队列'},
                {text: '如何保证消息队列的高可用', link: '/分布式/消息队列/常见问题/如何保证消息队列的高可用'},
            ],
        },
    ],
    '/分布式/思维导图/': [
        {
            text: '思维导图列表',
            // collapsed: true,
            items: [
                {text: '三高系统', link: '/分布式/思维导图/三高系统'},
            ],
        },
    ],
    '/分布式/系统设计/限流/': [
        {
            text: '限流',
            // collapsed: true,
            items: [
                {text: '限流的算法', link: '/分布式/系统设计/限流/限流的算法'},
                {text: '计数器算法', link: '/分布式/系统设计/限流/计数器算法'},
                {text: '滑动窗口算法', link: '/分布式/系统设计/限流/滑动窗口算法'},
                {text: '滑动日志算法', link: '/分布式/系统设计/限流/滑动日志算法'},
                {text: '令牌桶算法', link: '/分布式/系统设计/限流/令牌桶算法'},
                {text: 'Nginx漏桶限流', link: '/分布式/系统设计/限流/Nginx漏桶限流'},
                {text: 'Redis分布式限流', link: '/分布式/系统设计/限流/Redis分布式限流'},
                {text: '分布式限流组件', link: '/分布式/系统设计/限流/分布式限流组件'},
                {text: '总结', link: '/分布式/系统设计/限流/总结'},
            ],
        },
    ],
    '/分布式/高并发系统/高并发系统设计40问/': Questions,
    '/分布式/分布式事务/': DistributedTransactions,
    '/分布式/分布式锁/': DistributedLocks,
    '/数据库/书籍鉴赏/': HowDoesMySQLRun,
    '/数据库/MySQL/常见问题/': MySQLQuestions,
    '/数据库/MySQL/尚硅谷/': [
        {
            text: '尚硅谷大厂面试题',
            // collapsed: true,
            items: [
                {text: 'MySQL索引', link: '/数据库/MySQL/尚硅谷/面试题/MySQL索引'},
                {text: 'MySQL架构', link: '/数据库/MySQL/尚硅谷/面试题/MySQL架构'},
                {text: 'MySQL事务', link: '/数据库/MySQL/尚硅谷/面试题/MySQL事务'},
                {text: 'MySQL开发', link: '/数据库/MySQL/尚硅谷/面试题/MySQL开发'},
            ],
        },
        {
            text: '笔试真题',
            // collapsed: true,
            items: [
                {text: '笔试真题', link: '/数据库/MySQL/尚硅谷/笔试真题/笔试真题'},
            ],
        }
    ],
    '/数据库/Redis/': Redis,
    '/数据库/GBase/开发技巧/': [
        {
            text: '开发技巧',
            // collapsed: true,
            items: [
                {text: '查看执行计划', link: '/数据库/GBase/开发技巧/查看执行计划'},
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
    '/开发技巧/框架配置/VitePress/': FrameConfiguration,
    '/开发技巧/框架配置/ChatGPT/': [
        {
            text: 'ChatGPT',
            items: [
                {text: '免费搭建ChatGPT网站', link: '/开发技巧/框架配置/ChatGPT/免费搭建ChatGPT网站'},
            ],
        }
    ],
    '/开发技巧/框架配置/Docker/': [
        {
            text: 'Docker',
            items: [
                {text: 'Docker修改镜像存储位置', link: '/开发技巧/框架配置/Docker/Docker修改镜像存储位置'},
            ],
        }
    ],
    '/开发技巧/框架配置/IDEA/': [
        {
            text: 'IDEA',
            items: [
                {text: 'IDEA远程Debug', link: '/开发技巧/框架配置/IDEA/IDEA远程Debug'},
            ],
        }
    ],
    '/开发技巧/框架配置/安装手册/': [
        {
            text: '安装手册',
            items: [
                {text: 'Docker安装', link: '/开发技巧/框架配置/安装手册/Docker'},
                {text: 'Docker Desktop安装', link: '/开发技巧/框架配置/安装手册/DockerDesktop'},
                {text: 'RabbitMQ安装', link: '/开发技巧/框架配置/安装手册/RabbitMQ'},
            ],
        }
    ],
    '/实战项目/Netty/仿写微信IM即时通讯系统/': IMSystem,
    '/实战项目/Java/数据库迁移/': [
        {
            text: '数据库迁移',
            items: [
                {text: '数据迁移难点', link: '/实战项目/Java/数据库迁移/数据迁移难点'},
                {text: '数据迁移方案', link: '/实战项目/Java/数据库迁移/数据迁移'},
                {text: '数据迁移对象', link: '/实战项目/Java/数据库迁移/数据迁移对象'},
                {text: '数据迁移比对', link: '/实战项目/Java/数据库迁移/数据迁移比对'},
            ],
        }
    ],
    '/实战项目/Java/监听MySQL的Binlog/': [
        {
            text: '监听MySQL的Binlog',
            items: [
                {text: 'Java监听MySQL的Binlog', link: '/实战项目/Java/监听MySQL的Binlog/Java监听MySQL的Binlog'},
                {text: 'Canal监听MySQL的Binlog', link: '/实战项目/Java/监听MySQL的Binlog/Canal监听MySQL的Binlog'},
            ],
        }
    ],
    '/书籍下载/': [
        {
            text: 'Java',
            items: [
                {text: 'NIO', link: '/书籍下载/Java/Java#nio'},
                {text: '并发编程', link: '/书籍下载/Java/Java#并发编程'},
            ],
        },
        {
            text: '网络',
            items: [
                {text: 'HTTP', link: '/书籍下载/网络/网络#http'},
            ],
        },
        {
            text: '数据库',
            items: [
                {text: 'MySQL', link: '/书籍下载/数据库/数据库#mysql'},
            ],
        },
    ],
    '/资源搜罗/VPN/': VPN,
}
