export default {
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
    '/开发秘籍/招式下三滥/': [
        {
            text: '踢裆、插眼、搞偷袭',
            // collapsed: true,
            items: [
                {text: '降低代码可读性的12个技巧', link: '/开发秘籍/招式下三滥/降低代码可读性的12个技巧'},
            ],
        }
    ],
    '/开发秘籍/葵花宝典/': [
        {
            text: '葵花宝典',
            // collapsed: true,
            items: [
                {text: '测试', link: '/开发秘籍/葵花宝典/测试'},
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
                {text: '5、客户端与服务端双向通讯', link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端与服务端双向通讯'},
                {text: '6、数据传输载体ByteBuf介绍', link: '/实战项目/Netty/仿写微信IM即时通讯系统/数据传输载体ByteBuf介绍'},
                {text: '7、客户端与服务端通讯协议编解码', link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端与服务端通讯协议编解码'},
                {text: '8、实现客户端登录', link: '/实战项目/Netty/仿写微信IM即时通讯系统/实现客户端登录'},
                {text: '9、实现客户端与服务端收发消息', link: '/实战项目/Netty/仿写微信IM即时通讯系统/实现客户端与服务端收发消息'},
                {text: '10、pipeline与channelHandler', link: '/实战项目/Netty/仿写微信IM即时通讯系统/pipeline与channelHandler'},
                {text: '11、构建客户端与服务端pipeline', link: '/实战项目/Netty/仿写微信IM即时通讯系统/构建客户端与服务端pipeline'},
                {text: '12、拆包粘包理论与解决方案', link: '/实战项目/Netty/仿写微信IM即时通讯系统/拆包粘包理论与解决方案'},
                {text: '13、channelHandler的生命周期', link: '/实战项目/Netty/仿写微信IM即时通讯系统/channelHandler的生命周期'},
                {text: '14、使用channelHandler的热插拔实现客户端身份校验', link: '/实战项目/Netty/仿写微信IM即时通讯系统/使用channelHandler的热插拔实现客户端身份校验'},
                {text: '15、客户端互聊原理与实现', link: '/实战项目/Netty/仿写微信IM即时通讯系统/客户端互聊原理与实现'},
                {text: '16、群聊的发起与通知', link: '/实战项目/Netty/仿写微信IM即时通讯系统/群聊的发起与通知'},
                {text: '17、群聊的成员管理', link: '/实战项目/Netty/仿写微信IM即时通讯系统/群聊的成员管理'},
                {text: '18、群聊消息的收发及Netty性能优化', link: '/实战项目/Netty/仿写微信IM即时通讯系统/群聊消息的收发及Netty性能优化'},
                {text: '19、心跳与空间检测', link: '/实战项目/Netty/仿写微信IM即时通讯系统/心跳与空间检测'},
                {text: '20、总结', link: '/实战项目/Netty/仿写微信IM即时通讯系统/总结'},
            ],
        }
    ],
    '/书籍下载/': [
        {
            text: 'Java',
            collapsed: true,
            items: [
                {text: 'Java', link: '/书籍下载/Java/Java'},
            ],
        },
        {
            text: '网络',
            collapsed: true,
            items: [
                {text: 'HTTP', link: '/书籍下载/网络/网络'},
            ],
        },
    ]
}
