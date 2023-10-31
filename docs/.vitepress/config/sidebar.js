export default {
    '/数据库/': [
        {
            text: '字符集和比较规则',
            collapsed: true,
            items: [
                {text: '字符集和比较规则简介', link: '/数据库/MySQL/字符集和比较规则/字符集和比较规则简介'},
                {
                    text: 'MySQL支持的字符集和排序规则',
                    link: '/数据库/MySQL/字符集和比较规则/MySQL支持的字符集和排序规则'
                },
                {text: '字符集和比较规则的应用', link: '/数据库/MySQL/字符集和比较规则/字符集和比较规则的应用'},
                {text: '总结', link: '/数据库/MySQL/字符集和比较规则/总结'},
            ],
        },
        {
            text: 'InnoDB记录结构',
            collapsed: true,
            items: [
                {text: 'InnoDB页简介', link: '/数据库/MySQL/InnoDB记录结构/InnoDB页简介'},
                {text: 'InnoDB行格式', link: '/数据库/MySQL/InnoDB记录结构/InnoDB行格式'},
                {text: '总结', link: '/数据库/MySQL/InnoDB记录结构/总结'},
            ],
        },
        {
            text: 'InnoDB数据页结构',
            collapsed: true,
            items: [
                {text: '不同类型的页简介', link: '/数据库/MySQL/InnoDB数据页结构/不同类型的页简介'},
                {text: '数据页结构的快速浏览', link: '/数据库/MySQL/InnoDB数据页结构/数据页结构的快速浏览'},
                {text: '记录在页中的存储', link: '/数据库/MySQL/InnoDB数据页结构/记录在页中的存储'},
                {text: 'Page Directory（页目录）', link: '/数据库/MySQL/InnoDB数据页结构/Page Directory（页目录）'},
                {text: 'Page Header（页面头部）', link: '/数据库/MySQL/InnoDB数据页结构/Page Header（页面头部）'},
                {text: 'File Header（文件头部）', link: '/数据库/MySQL/InnoDB数据页结构/File Header（文件头部）'},
                {text: 'File Trailer', link: '/数据库/MySQL/InnoDB数据页结构/File Trailer'},
                {text: '总结', link: '/数据库/MySQL/InnoDB数据页结构/总结'},
            ],
        },
        {
            text: 'B+树索引',
            collapsed: true,
            items: [
                {text: '没有索引的查找', link: '/数据库/MySQL/B+树索引/没有索引的查找'},
                {text: '索引', link: '/数据库/MySQL/B+树索引/索引'},
            ],
        },
        {
            text: 'B+树索引的使用',
            collapsed: true,
            items: [
                {text: '索引的代价', link: '/数据库/MySQL/B+树索引的使用/索引的代价'},
                {text: 'B+树索引适用的条件', link: '/数据库/MySQL/B+树索引的使用/B+树索引适用的条件'},
                {text: '回表的代价', link: '/数据库/MySQL/B+树索引的使用/回表的代价'},
                {text: '如何挑选索引', link: '/数据库/MySQL/B+树索引的使用/如何挑选索引'},
                {text: '总结', link: '/数据库/MySQL/B+树索引的使用/总结'},
            ],
        },
    ],
}
