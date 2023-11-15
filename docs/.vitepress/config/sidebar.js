export default {
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
                {text: 'MySQL的索引为什么使用B+树而不是用跳表？', link: '/数据库/MySQL/进阶问题/MySQL的索引为什么使用B+树而不是用跳表'},
            ],
        }
    ],
    '/数据库/Redis/常见问题/': [
        {
            text: 'Redis常见八股文',
            // collapsed: true,
            items: [
                {text: '基本概念', link: '/数据库/Redis/常见问题/基本概念'},
                {text: '集群', link: '/数据库/Redis/常见问题/集群'},
                {text: '业务场景', link: '/数据库/Redis/常见问题/业务场景'},
                {text: '优化', link: '/数据库/Redis/常见问题/优化'},
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
