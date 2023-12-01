const HowDoesMySQLRun = [
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
    {
        text: 'InnoDB统计数据是如何收集的',
        collapsed: true,
        items: [
            {text: '两种不同的统计数据存储方式', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB统计数据是如何收集的/两种不同的统计数据存储方式'},
            {text: '基于磁盘的永久性统计数据', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB统计数据是如何收集的/基于磁盘的永久性统计数据'},
            {text: '基于内存的非永久性统计数据', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB统计数据是如何收集的/基于内存的非永久性统计数据'},
            {text: 'innodb_stats_method的使用', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB统计数据是如何收集的/innodb_stats_method的使用'},
            {text: '总结', link: '/数据库/书籍鉴赏/MySQL是怎样运行的/InnoDB统计数据是如何收集的/总结'},
        ],
    },
]

export default HowDoesMySQLRun;