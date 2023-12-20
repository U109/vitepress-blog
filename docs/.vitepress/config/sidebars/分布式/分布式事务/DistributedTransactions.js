const DistributedTransactions = [
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
]

export default DistributedTransactions;