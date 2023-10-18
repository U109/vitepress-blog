import sidebar from './config/sidebar'
import navbar from './config/navbar'

export default {
	lang: 'zh-CN',
	title: 'YCBlog~', //站点标题
	description: 'yc的博客~', //用于搜索引擎抓取摘要
	base: '/',
	markdown: {
		// lineNumbers: true,//代码块启用行号
		// theme:'vitesse-dark'
	},
	themeConfig: {
		siteTitle: 'Cheng',
		logo: '/darth_vader.png',
		/* 头部导航 */
		nav: navbar,
		/* 链接 */
		socialLinks: [
			// | 'discord'| 'facebook'| 'github'| 'instagram'| 'linkedin'| 'slack'| 'twitter'| 'youtube'
			// { icon: 'github', link: 'https://gitee.com/geeksdidi' },
			// { icon: 'twitter', link: '...' },
		],
		/* 侧边导航 */
		sidebar,
	
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
	},
}
