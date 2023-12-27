export default [
    {
        text: "首页",
        link: "/",
    },
    {
        text: "Java",
        items: [
            {
                text: "Java",
                items: [
                    {text: "生产环境下性能监控与调优", link: "/Java/Java/生产环境下性能监控与调优/为什么要学习这课程",},
                    {text: "常见问题", link: "/Java/Java/常见问题/Java概述",}
                ],
            },
            {
                text: "JUC",
                items: [
                    {text: "并发编程", link: "/Java/JUC/JUC并发包与容器类/内存可见性指令有序性理论",},
                ],
            },
            {
                text: "JVM",
                items: [
                    {text: "深入浅出JVM", link: "/Java/JVM/深入浅出JVM/JVM内存结构",},
                    {text: "常见问题", link: "/Java/JVM/常见问题/元空间会产生内存溢出么",}
                ],
            },
            {
                text: "SpringBoot",
                items: [
                    {text: "常见问题", link: "/Java/SpringBoot/常见问题/SpringBoot概述相关问题",}
                ],
            },
            {
                text: "Netty",
                items: [
                    {text: "常见问题", link: "/Java/Netty/常见问题/Netty理论相关问题",}
                ],
            },
        ],
    },
    {
        text: "分布式",
        items: [
            {text: "思维导图", link: "/分布式/思维导图/三高系统",},
            {text: "分布式锁", link: "/分布式/分布式锁/跨JVM的线程安全问题",},
            {text: "分布式事务", link: "/分布式/分布式事务/一图解读分布式事务",},
            {
                text: "消息队列",
                items: [
                    {text: "RabbitMQ", link: "/分布式/消息队列/RabbitMQ/MQ相关的概念/MQ的基本概念",},
                    {text: "常见问题", link: "/分布式/消息队列/常见问题/为什么使用消息队列",},
                ],
            },
            {
                text: "系统设计",
                items: [
                    {text: "限流", link: "/分布式/系统设计/限流/限流的算法",},
                ],
            },
            {
                text: "高并发系统",
                items: [
                    {text: "高并发系统设计40问", link: "/分布式/高并发系统/高并发系统设计40问/开篇/为什么你要学习高并发系统设计",},
                ],
            },
        ],
    },
    {
        text: "数据库",
        items: [
            {
                text: "GBase8s",
                items: [
                    {text: "开发技巧", link: "/数据库/GBase/开发技巧/查看执行计划",},
                ],
            },
            {
                text: "MySQL",
                items: [
                    {text: "常见问题", link: "/数据库/MySQL/常见问题/基础",},
                ],
            },
            {
                text: "Redis",
                items: [
                    {text: "常见问题", link: "/数据库/Redis/常见问题/基本概念",},
                ],
            },
            {
                text: "书籍鉴赏",
                items: [
                    {
                        text: "MySQL是怎样运行的",
                        link: "/数据库/书籍鉴赏/MySQL是怎样运行的/字符集和比较规则/字符集和比较规则简介",
                    },
                ],
            },
        ],
    },
    {
        text: "Demo合集",
        items: [
            {
                text: "Java",
                items: [
                    {text: "数据库迁移", link: "/实战项目/Java/数据库迁移/数据迁移",},
                    {text: "监听MySQL的Binlog", link: "/实战项目/Java/监听MySQL的Binlog/Java监听MySQL的Binlog",},
                ],
            },
            {
                text: "Netty",
                items: [
                    {text: "仿写微信IM即时通讯系统", link: "/实战项目/Netty/仿写微信IM即时通讯系统/仿微信IM系统简介",},
                ],
            },
            {text: "12306抢票亿级流量架构演进", link: "/实战项目/12306抢票亿级流量架构演进",},
        ],
    },
    {
        text: "开发知识",
        items: [
            {
                text: "算法",
                items: [
                    {text: "常见算法", link: "/开发技巧/算法/常见算法/一致性Hash算法",},
                ],
            },
            {
                text: "常用命令",
                items: [
                    {text: "Linux", link: "/开发技巧/常用命令/Linux/Linux防火墙命令",},
                    {text: "Redis", link: "/开发技巧/常用命令/Redis/Redis常用命令",},
                ],
            },
            {
                text: "框架配置",
                items: [
                    {text: "IDEA远程Debug", link: "/开发技巧/框架配置/IDEA/IDEA远程Debug",},
                    {text: "VitePress博客", link: "/开发技巧/框架配置/VitePress/图片缩放功能",},
                    {text: "ChatGPT", link: "/开发技巧/框架配置/ChatGPT/免费搭建ChatGPT网站",},
                ],
            },
        ],
    },

    {
        text: "资源搜罗",
        items: [
            {text: "书籍下载", link: "/书籍下载/Java/Java",},
            {text: "机场", link: "/资源搜罗/VPN/机场",},
            {text: "音乐", link: "/资源搜罗/音乐/音乐",},
        ],
    },
];
