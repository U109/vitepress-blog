import FrameConfiguration from "./sidebars/Java/FrameConfiguration";
import IMSystem from "./sidebars/实战项目/Netty/IMSystem";
import MonitoringAndTuning from "./sidebars/Java/Java/MonitoringAndTuning";
import InDepthIntroductionToJVM from "./sidebars/Java/JVM/InDepthIntroductionToJVM";
import Questions from "./sidebars/分布式/高并发系统/40Questions";
import MySQLQuestions from "./sidebars/数据库/MySQL/MySQLQuestions";
import HowDoesMySQLRun from "./sidebars/数据库/书籍鉴赏/HowDoesMySQLRun";

export default {
    '/Java/Java/生产环境下性能监控与调优/': MonitoringAndTuning,
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
                {text: 'Spring中事务传播行为', link: '/Java/SpringBoot/常见问题/Spring中事务传播行为'},
                {text: 'Spring事务失效的问题', link: '/Java/SpringBoot/常见问题/Spring事务失效的问题'},
                {text: 'Spring中有哪些方式可以把Bean注入到IOC容器', link: '/Java/SpringBoot/常见问题/Spring中有哪些方式可以把Bean注入到IOC容器'},
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
    '/分布式/高并发系统/高并发系统设计40问/': Questions,
    '/数据库/书籍鉴赏/': HowDoesMySQLRun,
    '/数据库/MySQL/': MySQLQuestions,
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
    '/框架配置/': FrameConfiguration,
    '/实战项目/Netty/仿写微信IM即时通讯系统/': IMSystem,
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
