const MonitoringAndTuning = [
    {text: '为什么要学习这课程', link: '/Java/Java/生产环境下性能监控与调优/为什么要学习这课程'},
    {
        text: '基于 JDK 命令行工具的监控',
        collapsed: true,
        items: [
            {text: 'JVM 参数类型', link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/JVM参数类型'},
            {
                text: '查看运行时 JVM 参数',
                link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/查看运行时JVM参数'
            },
            {
                text: '查看 JVM 统计信息',
                link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/查看JVM统计信息'
            },
            {
                text: 'jmap + MAT 实战内存溢出',
                link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/jmapMAT实战内存溢出'
            },
            {
                text: 'jstack 实战死循环与死锁',
                link: '/Java/Java/生产环境下性能监控与调优/基于JDK命令行工具的监控/jstack实战死循环与死锁'
            },
        ],
    },
    {
        text: '基于 JVisualVM 的可视化监控',
        collapsed: true,
        items: [
            {
                text: '监控本地 JAVA 进程',
                link: '/Java/Java/生产环境下性能监控与调优/基于JVisualVM的可视化监控/监控本地JAVA进程'
            },
            {
                text: '监控远程 JAVA 进程',
                link: '/Java/Java/生产环境下性能监控与调优/基于JVisualVM的可视化监控/监控远程JAVA进程'
            },
        ],
    }, {
        text: '基于 Btrace 的监控调试',
        collapsed: true,
        items: [
            {
                text: 'Btrace安装使用入门',
                link: '/Java/Java/生产环境下性能监控与调优/基于Btrace的监控调试/Btrace安装使用入门'
            },
            {text: 'Btrace使用详解', link: '/Java/Java/生产环境下性能监控与调优/基于Btrace的监控调试/Btrace使用详解'},
        ],
    }, {
        text: 'Tomcat 性能监控与调优',
        collapsed: true,
        items: [
            {
                text: 'Tomcat 远程 debug',
                link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/Tomcat远程debug'
            },
            {
                text: 'Tomcat-manager 监控 Tomcat',
                link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/Tomcat-manager监控Tomcat'
            },
            {
                text: 'psi-probe 监控 Tomcat',
                link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/psi-probe监控Tomcat'
            },
            {text: 'Tomcat 调优', link: '/Java/Java/生产环境下性能监控与调优/Tomcat性能监控与调优/Tomcat调优'},
        ],
    },
    {
        text: 'Nginx 性能监控与调优',
        collapsed: true,
        items: [
            {text: 'nginx 简单安装', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/nginx简单安装'},
            {
                text: 'ngx_http_stub_status 监控链接信息',
                link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/ngx_http_stub_status监控链接信息'
            },
            {
                text: 'ngxtop 监控请求信息',
                link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/ngxtop监控请求信息'
            },
            {
                text: 'nginx-rrd 图形化监控',
                link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/nginx-rrd图形化监控'
            },
            {text: 'nginx 调优', link: '/Java/Java/生产环境下性能监控与调优/Nginx性能监控与调优/nginx调优'},
        ],
    },
    {
        text: 'JVM 层 GC 调优',
        collapsed: true,
        items: [
            {text: 'JVM 内存结构：基于 JDK 1.8', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/JVM内存结构'},
            {text: '垃圾回收算法', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/垃圾回收算法'},
            {text: '垃圾收集器', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/垃圾收集器'},
            {
                text: 'GC 日志格式与可视化日志分析工具',
                link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/GC日志格式与可视化日志分析工具'
            },
            {text: 'Tomcat 的 GC 调优实战', link: '/Java/Java/生产环境下性能监控与调优/JVM层GC调优/Tomcat的GC调优实战'},
        ],
    },
    {
        text: 'Java 代码层优化',
        collapsed: true,
        items: [
            {
                text: 'JVM 字节码指令与 javap',
                link: '/Java/Java/生产环境下性能监控与调优/Java代码层优化/JVM字节码指令与javap'
            },
            {text: '字节码指令简单介绍', link: '/Java/Java/生产环境下性能监控与调优/Java代码层优化/字节码指令简单介绍'},
            {text: '常用代码优化方法', link: '/Java/Java/生产环境下性能监控与调优/Java代码层优化/常用代码优化方法'},
        ],
    },
]

export default MonitoringAndTuning;