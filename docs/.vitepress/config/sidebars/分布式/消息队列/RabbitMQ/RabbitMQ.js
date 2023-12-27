const RabbitMQ = [
    {
        text: '一、MQ相关的概念',
        collapsed: true,
        items: [
            {text: '1.1、MQ的基本概念', link: '/分布式/消息队列/RabbitMQ/MQ相关的概念/MQ的基本概念'},
            {text: '1.2、消息队列协议', link: '/分布式/消息队列/RabbitMQ/MQ相关的概念/消息队列协议'},
            {text: '1.3、消息队列持久化', link: '/分布式/消息队列/RabbitMQ/MQ相关的概念/消息队列持久化'},
            {text: '1.4、消息的分发策略', link: '/分布式/消息队列/RabbitMQ/MQ相关的概念/消息的分发策略'},
            {
                text: '1.5、消息队列的高可用和高可靠',
                link: '/分布式/消息队列/RabbitMQ/MQ相关的概念/消息队列的高可用和高可靠'
            },
        ],
    },
    {
        text: '二、RabbitMQ安装启动',
        collapsed: true,
        items: [
            {text: '2.1、简介', link: '/分布式/消息队列/RabbitMQ/RabbitMQ安装启动/简介'},
            {text: '2.2、下载安装启动RabbitMQ', link: '/分布式/消息队列/RabbitMQ/RabbitMQ安装启动/下载安装启动RabbitMQ'},
            {
                text: '2.3、RabbitMQWeb管理界面及授权操作',
                link: '/分布式/消息队列/RabbitMQ/RabbitMQ安装启动/RabbitMQWeb管理界面及授权操作'
            },
            {text: '2.4、Docker安装RabbitMQ', link: '/分布式/消息队列/RabbitMQ/RabbitMQ安装启动/Docker安装RabbitMQ'},
        ],
    },
    {
        text: '三、RabbitMQ快速入门',
        collapsed: true,
        items: [
            {text: '3.1、RabbitMQ的概念', link: '/分布式/消息队列/RabbitMQ/RabbitMQ快速入门/RabbitMQ的概念'},
            {text: '3.2、AMQP协议', link: '/分布式/消息队列/RabbitMQ/RabbitMQ快速入门/AMQP协议'},
            {text: '3.3、RabbitMQ架构组成', link: '/分布式/消息队列/RabbitMQ/RabbitMQ快速入门/RabbitMQ架构组成'},
            {text: '3.4、四大核心概念', link: '/分布式/消息队列/RabbitMQ/RabbitMQ快速入门/四大核心概念'},
            {text: '3.5、RabbitMQ角色分类', link: '/分布式/消息队列/RabbitMQ/RabbitMQ快速入门/RabbitMQ角色分类'},
            {text: '3.6、RabbitMQ消息模式', link: '/分布式/消息队列/RabbitMQ/RabbitMQ快速入门/RabbitMQ消息模式'},
        ],
    },
    {
        text: '四、简单-工作模式',
        collapsed: true,
        items: [
            {text: '4.1、简单模式——Hello Word', link: '/分布式/消息队列/RabbitMQ/简单-工作模式/简单模式'},
            {text: '4.2、工作模式——Work Queues', link: '/分布式/消息队列/RabbitMQ/简单-工作模式/工作模式'},
        ],
    },
    {
        text: '五、Exchange模式',
        collapsed: true,
        items: [
            {text: '5.1、Exchanges简介', link: '/分布式/消息队列/RabbitMQ/Exchange模式/Exchanges简介'},
            {text: '5.2、Fanout模式——RabbitMQ发布订阅模式', link: '/分布式/消息队列/RabbitMQ/Exchange模式/Fanout模式'},
            {text: '5.3、Direct模式——RabbitMQ路由模式', link: '/分布式/消息队列/RabbitMQ/Exchange模式/Direct模式'},
            {text: '5.4、Topics模式——RabbitMQ主题模式', link: '/分布式/消息队列/RabbitMQ/Exchange模式/Topics模式'},
        ],
    },
    {
        text: '六、RabbitMQ的一些机制',
        collapsed: true,
        items: [
            {text: '6.1、消息应答', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/消息应答'},
            {text: '6.2、持久化', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/持久化'},
            {text: '6.3、不公平分发', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/不公平分发'},
            {text: '6.4、预取值', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/预取值'},
            {text: '6.5、发布确认', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/发布确认'},
            {text: '6.6、死信队列', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/死信队列'},
            {text: '6.7、延迟队列', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/延迟队列'},
            {text: '6.8、发布确认高级', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/发布确认高级'},
            {text: '6.9、幂等性', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/幂等性'},
            {text: '6.10、优先级队列', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/优先级队列'},
            {text: '6.11、惰性队列', link: '/分布式/消息队列/RabbitMQ/RabbitMQ的一些机制/惰性队列'},
        ],
    },
    {
        text: '七、RabbitMQ集群',
        collapsed: true,
        items: [
            {text: '7.1、三节点RabbitMQ集群搭建', link: '/分布式/消息队列/RabbitMQ/RabbitMQ集群/三节点RabbitMQ集群搭建'},
            {text: '7.2、镜像队列', link: '/分布式/消息队列/RabbitMQ/RabbitMQ集群/镜像队列'},
            {
                text: '7.3、Haproxy+Keepalive实现高可用负载均衡',
                link: '/分布式/消息队列/RabbitMQ/RabbitMQ集群/Haproxy+Keepalive实现高可用负载均衡'
            },
            {text: '7.4、Federation Exchange', link: '/分布式/消息队列/RabbitMQ/RabbitMQ集群/Federation-Exchange'},
            {text: '7.5、Federation Queue', link: '/分布式/消息队列/RabbitMQ/RabbitMQ集群/Federation-Queue'},
            {text: '7.6、Shovel', link: '/分布式/消息队列/RabbitMQ/RabbitMQ集群/Shovel'},
        ],
    },
]

export default RabbitMQ;