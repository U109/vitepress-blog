export default [
    {
        text: "首页",
        link: "/",
    },
    {
        text: "Java",
        items: [
            {
                text: "JVM",
                items: [
                    {text: "深入浅出JVM", link: "/Java/JVM/深入浅出JVM/JVM内存结构",},
                    {text: "常见问题", link: "/Java/JVM/常见问题/元空间会产生内存溢出么",}
                ],
            },
            {
                text: "Spring",
                items: [],
            },
            {
                text: "SpringBoot",
                items: [
                    {text: "常见问题", link: "/Java/SpringBoot/常见问题/SpringBoot概述相关问题",}
                ],
            },
            {
                text: "Netty",
                items: [],
            },
        ],
    },
    {
        text: "分布式",
        items: [
            {
                text: "消息队列",
                items: [
                    {text: "常见问题", link: "/分布式/消息队列/常见问题/为什么使用消息队列",},
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
        text: "实战项目",
        items: [
            {
                text: "Netty",
                items: [
                    {text: "仿写微信IM即时通讯系统", link: "/实战项目/Netty/仿写微信IM即时通讯系统/仿微信IM系统简介",},
                ],
            },
        ],
    },
    {
        text: "开发技巧",
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
                text: "坏味道",
                items: [
                    {text: "降低可读性", link: "/开发技巧/坏味道/降低代码可读性的12个技巧",},
                ],
            },
        ],
    },
    {
        text: "框架配置",
        items: [
            {text: "VitePress博客", link: "/框架配置/VitePress/图片缩放功能",},
        ],
    },
    {
        text: "书籍下载",
        items: [
            {text: "Java", link: "/书籍下载/Java/Java",},
            {text: "网络", link: "/书籍下载/网络/网络",},
            {text: "数据库", link: "/书籍下载/数据库/数据库",},
        ],
    },
    {
        text: "资源搜罗",
        items: [
            {text: "机场", link: "/资源搜罗/VPN/机场",},
            {text: "神站", link: "/资源搜罗/神站/神站",},
        ],
    },
];
