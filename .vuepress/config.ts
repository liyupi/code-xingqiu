import clipboardPlugin from "vuepress-plugin-clipboard";
import sidebar from "./sidebar";
import navbar from "./navbar";

const { defineUserConfig } = require('vuepress')
const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
import { seoPlugin } from "vuepress-plugin-seo2";
import { searchConsolePlugin } from "vuepress-plugin-china-search-console";

export default defineUserConfig({
    title: '编程导航知识星球',
    description: '帮助你学习编程的小圈子',
    // 改成自己的百度统计 https://tongji.baidu.com/
    head: [
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?e8b2fdb7b7cfb4f306a16354a913d7fb";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
      `],
        ['meta', {name: 'keywords', content: '编程学习圈子,程序员学习,程序员,代码,编程项目,编程导航,程序员鱼皮'}],
        ['meta', {
            name: 'description', content:
                '帮助你学习编程的小圈子,编程学习资源,原创编程学习经验方法,程序员求职校招指南,原创编程项目'
        }],
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        repo: 'liyupi/code-xingqiu',
        sidebar,
        navbar,
        editLink: false,
        smoothScroll: true,
        contributors: false,
        lastUpdated: false,
    }),
    plugins: [
        searchPlugin({
            // 配置项
        }),
        clipboardPlugin({
            align: 'top',
            staticIcon: true,
        }),
        seoPlugin({
            hostname: 'https://yupi.icu',
            author: '程序员鱼皮',
        }),
        searchConsolePlugin({
            baiduId: 'e8b2fdb7b7cfb4f306a16354a913d7fb'
        })
    ]
});
