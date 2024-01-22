import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://xiao-zhang-923.github.io/EASE_PAAS_DOCS/",

    author: {
      name: "北京德风新征程科技股份有限公司",
      url: "http://www.deltaphone.com.cn/index",
    },

    iconAssets: "fontawesome-with-brands",

    // logo: "/logo.svg",

    // repo: "vuepress-theme-hope/online-demo",

    docsDir: "docs",

    locales: {
      "/en/": {
        // navbar
        navbar: enNavbar,

        // sidebar
        sidebar: enSidebar,


        displayFooter: true,

        metaLocales: {
          editLink: "Edit this page on GitHub",
        },
      },

      /**
       * Chinese locale config
       */
      "/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,


        displayFooter: true,

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    encrypt: {
      config: {
       
      },
    },

    // plugins: {
    //   // You should generate and use your own comment service
    //   comment: {
    //     provider: "Giscus",
    //     repo: "vuepress-theme-hope/giscus-discussions",
    //     repoId: "R_kgDOG_Pt2A",
    //     category: "Announcements",
    //     categoryId: "DIC_kwDOG_Pt2M4COD69",
    //   },

    //   // All features are enabled for demo, only preserve features you need here
    //   mdEnhance: {
    //     align: true,
    //     attrs: true,


    //     codetabs: true,
    //     demo: true,


    //     figure: true,

     
    //     imgLazyload: true,
    //     imgSize: true,
    //     include: true,

       
    //     mark: true,


    //     playground: {
    //       presets: ["ts", "vue"],
    //     },


    //     stylize: [
    //       {
    //         matcher: "Recommended",
    //         replacer: ({ tag }) => {
    //           if (tag === "em")
    //             return {
    //               tag: "Badge",
    //               attrs: { type: "tip" },
    //               content: "Recommended",
    //             };
    //         },
    //       },
    //     ],
    //     sub: true,
    //     sup: true,
    //     tabs: true,
    //     vPre: true,
    //   },
    // },
  },
  { custom: true }
);
