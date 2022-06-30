// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";
import type { SmPlayerPluginOption } from "vuepress-plugin-smplayer/types";

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(
        resolve(__dirname, "../public", "CNAME")
      )}`,
    },
  ],
  [
    "smplayer",
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ["*"],
          moreVideoAttr: {
            preload: "auto",
          },
        },
      },
    } as SmPlayerPluginOption,
  ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  ["fulltext-search"],
  ['go-top'],
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ["Twikoo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],
  // [
  //   'vuepress-plugin-comment',
  //   {
  //     choosen: 'gitalk',
  //     options: {
  //       clientID: 'ccb3b5d588330d9916a6',
  //       clientSecret: 'ad5c8eaa32fe41c6e1d0a57e52a09e62b8aab1a3',
  //       repo: 'blog',
  //       owner: 'dafei5350',
  //       admin: ['dafei5350'],
  //       // distractionFreeMode: false,
  //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
  //       id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>", //  页面的唯一标识,长度不能超过50
  //       title: "「评论」<%- document.title %>", // GitHub issue 的标题
  //       labels: ["Gitalk", "Comment"], // GitHub issue 的标签
  //       body:"<%- document.title %>：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
  //     }
  //   }
  // ],
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['blackCat'],
      clean: true,
      info: 'https://blog.dafei110.cn',
      messages: {
        welcome: '欢迎来到 <%- site.title %> 的 blog',
        home: '心里的花，我想要带你回家',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
      }
    }
  ],
  [
    'demo-container',
    {
      "lang": "zh-CN",
      "demo-block": {
        "hide-text": "隐藏代码",
        "show-text": "显示代码",
        "copy-text": "复制代码",
        "copy-success": "复制成功"
      }
    },
  ],
];
