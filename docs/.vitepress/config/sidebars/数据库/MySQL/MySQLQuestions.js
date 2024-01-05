const MySQLQuestions = [
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
                link: '/数据库/MySQL/常见问题/进阶问题/MySQL的索引为什么使用B+树而不是用跳表'
            }, {
                text: 'MySQL一条查询语句的执行过程',
                link: '/数据库/MySQL/常见问题/进阶问题/MySQL一条查询语句的执行过程'
            },
        ],
    }
]

export default MySQLQuestions;