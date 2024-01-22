import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/EASE_PAAS_DOCS/",
  dest: "docs/.vuepress/dist",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "EASE_PAAS",
      description: "平台文档",
    },
    "/en/": {
      lang: "en-US",
      title: "EASE_PAAS",
      description: "Platform documentation",
    },
  },
  theme,
  shouldPrefetch: false,
});
