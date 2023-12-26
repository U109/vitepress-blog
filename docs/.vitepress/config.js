import sidebar from './config/sidebar'
import navbar from './config/navbar'
import timelinePlugin from "vitepress-markdown-timeline";

export default {
    lang: 'zh-CN',
    title: 'ZBlog', //站点标题
    description: '张忠振的博客:Java、框架、数据库', //用于搜索引擎抓取摘要
    base: '/',
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/index/小猪佩奇.png`}],
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
        ['link', {href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet'}],
        ['script', {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GKCV1DN0DR'}],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GKCV1DN0DR');`,
        ],
    ],
    markdown: {
        // lineNumbers: true,//代码块启用行号
        // theme:'vitesse-dark'
        config: (md) => {
            md.use(timelinePlugin);
        },
    },
    themeConfig: {

        siteTitle: 'Zhen',
        logo: '/index/小猪佩奇.png',
        /* 头部导航 */
        nav: navbar,
        /* 链接 */
        socialLinks: [
            // | 'discord'| 'facebook'| 'github'| 'instagram'| 'linkedin'| 'slack'| 'twitter'| 'youtube'
            { icon: 'twitter', link: 'https://twitter.com/StewardPeg5' },
            {icon: 'github', link: 'https://github.com/U109'},
        ],
        search: {
            provider: 'local',
        },
        /* 侧边导航 */
        sidebar,
        outline: {
            level: [2, 6],
            label: '目录',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-04-23～present Zhen",
        },
    },
}
