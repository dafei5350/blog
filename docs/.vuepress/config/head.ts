import { HeadTags } from "vuepress/config";

export default <HeadTags>[
  ["link", { rel: "icon", href: "/favicon.ico" }], //站点图标, 默认为 public/favicon.ico
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no",
    }
  ],
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],    // 解决 Chrome 网站统计不准确问题
  ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],
  ['script', { src: 'https://cdn.staticfile.org/twikoo/1.5.11/twikoo.all.min.js' }],
];
