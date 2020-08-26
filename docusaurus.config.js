const codeblockTheme = require('prism-react-renderer/themes/palenight')
// 可选theme  https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
// 覆盖背景色
codeblockTheme.plain.backgroundColor = '#000'
codeblockTheme.plain.color = '#ffffff'

module.exports = {
  title: 'CodeLab',
  tagline: '传递编程的乐趣，鼓励孩子成为数字时代的创作者',
  url: 'https://www.codelab.club.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'CodeLab', // Usually your GitHub org/user name.
  projectName: 'NewCodeLabWeb', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    defaultDarkMode: true,
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          href: 'https://scratch.codelab.club',
          label:'创作平台',
          position: 'left'
        },
        {
          to: 'projects',
          /*
            href:'https://adapter.codelab.club/user_guide/gallery/',
           */
          label: '玩给你看',
          /*
          activeBasePath: 'projects',
           */
          position: 'left',
        },
        {

          href: 'https://adapter.codelab.club/',
          /*
          to: 'docs/adapter',
          activeBasePath:'docs/adapter',
           */
          label: '文档',
          position: 'left',
        },
        {
          to: 'blog',
          /*
          activeBasePath:'blog',
           */
          label: '博客',
          position: 'left'
        },
        {
          to: '/blog/2018/11/08/about-codelab-club',
          label:'关于我们',
          position:'left'
        },
        {
          label: '',
          href: 'https://github.com/CodeLabClub',
          position: 'left',
          className: 'header-github-link'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: null,
          items:[
            {
              label:'CodeLab 论坛',
              to: 'http://discuss.codelab.club/'
            },
          ]
        },
        {
          title: null,
          items:[
            {
              label:'博客圈',
              to: 'blog'
            },
          ]
        },
        {
          title: null,
          items:[
            {
              label:'下载',
              to: 'blog/2020/08/20/tools'
            },
          ]
        },
        {
          title: null,
          items:[
            {
              label:'回到未来',
              to: 'blog'
            },
          ]
        },
      ],
      /*
      logo: {
        // href: 'https://github.com',
        alt: 'qrcode',
        src: 'img/codelab_wechat.jpg'
      },
      */

      /*copyright: `Copyright © ${new Date().getFullYear()} CodeLab, Inc. Built with Docusaurus.`,*/
      copyright: `©CodeLab`,
    },
    prism: {
      theme: codeblockTheme,
      darkTheme: codeblockTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId:'dochome',
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CodeLabClub/NewCodeLabWeb/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js',
    'https://cdn.jsdelivr.net/npm/video.js/dist/video.min.js',
    '/script/settheme.js',
  ],
  stylesheets: [
    // https://unpkg.com/video.js/dist/video-js.min.css
    //
    //'https://unpkg.com/video.js/dist/video-js.min.css',
    'https://cdn.jsdelivr.net/npm/video.js/dist/video-js.min.css',
    'https://cdn.jsdelivr.net/npm/@videojs/themes@1/dist/fantasy/index.css'
  ]
};
