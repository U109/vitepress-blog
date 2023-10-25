import sidebar from './config/sidebar'
import navbar from './config/navbar'
import timelinePlugin from "vitepress-markdown-timeline";

export default {
    lang: 'zh-CN',
    title: 'ZBlog', //站点标题
    description: '张忠振的博客', //用于搜索引擎抓取摘要
    base: '/',
    markdown: {
        // lineNumbers: true,//代码块启用行号
        // theme:'vitesse-dark'
        config: (md) => {
            md.use(timelinePlugin);
        },
    },
    themeConfig: {
        siteTitle: 'Zhen',
        logo: '/darth_vader.png',
        /* 头部导航 */
        nav: navbar,
        /* 链接 */
        socialLinks: [
            // | 'discord'| 'facebook'| 'github'| 'instagram'| 'linkedin'| 'slack'| 'twitter'| 'youtube'
            {icon: 'github', link: 'https://github.com/U109'}
        ],
        /* 侧边导航 */
        sidebar,

        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-04-23～present HanochMa",
        },
    },
}
