import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '星球介绍',
        link: '/',
    },
    {
        text: '星球资料',
        children: ['/星球资料/专属交流群', '/星球资料/鱼皮的打工日记'],
    },
    '/星球正能量',
    {
        text: '星球项目',
        collapsible: true,
        children: [],
    },
    {
        text: '星球直播',
        collapsible: true,
        children: ['/星球直播/', '/星球直播/往期直播/'],
    },
    {
        text: '星球故事',
        collapsible: true,
        children: [],
    },
    {
        text: '关于星主',
        collapsible: true,
        children: ['/关于星主/', '/关于星主/个人经历'],
    },
    '/加入星球',
] as SidebarConfig;