// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "大前端",
    items: [
      {
        text: "Vue",
        link: "/pages/25196d/",
      },
      {
        text: "小程序",
        link: "/pages/90af01/",
      },
      {
        text: "Node",
        link: "/pages/ae436e/",
      }
    ],
  },
  { text: "算法", link: "/pages/cd4d4c/" },
  {
    text: "后端",
    items: [
      {
        text: "数据库",
        link: "/pages/64121c/",
      },
      {
        text: "Java",
        link: "/pages/85d6ed/",
      },
      {
        text: "Node",
        link: "/pages/ae436e/",
      }

    ],
  },
  { text: "归档", link: "/archives/" },
  { text: "关于我", link: "/pages/b17a2e/" },
  // {
  //   text: "关于",
  //   items: [
  //     {
  //       text: "关于我",
  //       link: "/pages/b17a2e/",
  //     }
  //   ],
  // },

  // {
  //   text: "友情链接",
  //   items: [
  //     {
  //       text: "vuepress",
  //       link: "https://vuepress.vuejs.org/",
  //     }
  //   ],
  // },
];
