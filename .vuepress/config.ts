import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "高木同学资料站",
  description: "Just playing around",
  theme: recoTheme({
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "木创社",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/": [
        {
          text: "简介",
          children: ["introduction"],
        },
        {
          text: "音乐",
          children: [
            {
              text: "动画片尾曲",
              link: "/docs/music/ED.md",
            },
            {
              text: "动画主题曲",
              link: "/docs/music/OP.md",
            },
            {
              text: "原声带OST",
              link: "/docs/music/OST.md",
            },
            {
              text: "手游 “心动记录”",
              link: "/docs/music/GAME.md",
            },
              ],
        },
        {
          text: "漫画",
          children: [
            {
              text: "高木同学正篇",
              link: "/docs/manga/Takagi-OG.md",
            },
            {
              text: "原高木同学",
              link: "/docs/manga/Spinoff-Moto.md",
            },
            {
              text: "明天是星期六",
              link: "/docs/manga/Spinoff-Tis.md",
            },
            {
              text: "与恋爱相恋的友加里",
              link: "/docs/manga/Spinoff-Yukari.md",
            },
              ],
        },
        {
          text: "动画",
          children: [
            {
              text: "第一季",
              link: "/docs/anime/S1.md",
            },
            {
              text: "第二季",
              link: "/docs/anime/S2.md",
            },
            {
              text: "第三季",
              link: "/docs/anime/S3.md",
            },
            {
              text: "剧场版",
              link: "/docs/anime/Movie.md",
            },
              ],
        },
        {
          text: "角色",
          children: [
            {
              text: "高木正篇角色",
              link: "/docs/role/Takagi-OG.md",
            },
            {
              text: "高木番外角色",
              link: "/docs/role/Takagi-OH.md",
            },
              ],
        },
        {
          text: "衍生/社群",
          children: [
            {
              text: "官方衍生书籍",
              link: "/docs/derivative/Related-Book.md",
            },
            {
              text: "相关软件&游戏",
              link: "/docs/derivative/Related-Software.md",
            },
            {
              text: "高木同人作品",
              link: "/docs/derivative/Related-Createion.md",
            },
            {
              text: "高木粉丝圈",
              link: "/docs/derivative/FanGroup.md",
            },
              ],
        },
        {
          text: "商品/周边",
          children: [
            {
              text: "官方商品&特典",
              link: "/docs/goods/Offical.md",
            },
            {
              text: "IP授权周边产品",
              link: "/docs/goods/Officalip.md",
            },
              ],
        },
      ],
      "/about/": [
        {
          text: "关于",
          children: ["info", "muchuangshe","License"],
        },
      ]
    },
    navbar: [
      { text: "主页", icon: 'Home',link: "/" },
      { text: "资料", icon: 'Document',link: "/docs/introduction" },
      { text: "留言板", icon: 'Chat',link: "/other/message-board/" },
      { text: "关于", icon: 'Catalog',link: "/about/info/" },
      { text: "导航页", link: "https://sites.takagi3.cn/" },
    ],
    theme: recoTheme({
      commentConfig: {
        type: 'waline',
        options: {
          serverURL: 'your serverURL',
          hideComments: true, // 全局隐藏评论，默认 false
        },
      },
    }),
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
