module.exports = {
  title: 'CodeLab',
  tagline: '传递编程的乐趣，鼓励孩子成为数字时代的创作者',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'CodeLab', // Usually your GitHub org/user name.
  projectName: 'WebDemo', // Usually your repo name.
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
          label:'Scratch 社区',
          position: 'left'
        },
        {
          /*
          to: 'projects',
            */
          href:'https://codelab-adapter-docs.codelab.club/user_guide/gallery/',
          label: '演示案例',
          /*
          activeBasePath: 'projects',
           */
          position: 'left',
         },
        {
          href: 'https://codelab-adapter-docs.codelab.club/',
          activeBasePath: 'docs/adapter',
          label: '文档',
          position: 'left',
        },
        { href: 'https://www.codelab.club/blog/', label: '博客', position: 'left'},
        { href: 'https://www.codelab.club/blog/about-codelab-club/', label:'关于我们', position:'left'},
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
              to: 'https://www.codelab.club/blog/'
            },
          ]
        },
        {
          title: null,
          items:[
            {
              label:'下载',
              to: 'https://www-old.codelab.club/blog/codelab-download/'
            },
          ]
        },
        {
          title: null,
          items:[
            {
              label:'回到未来',
              to: 'https://www.codelab.club/blog/'
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
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    'https://cdn.jsdelivr.net/npm/video.js/dist/video.min.js',
    '/script/settheme.js'
  ],
  stylesheets: [
    // https://unpkg.com/video.js/dist/video-js.min.css
    // 
    //'https://unpkg.com/video.js/dist/video-js.min.css',
    'https://cdn.jsdelivr.net/npm/video.js/dist/video-js.min.css',
    'https://cdn.jsdelivr.net/npm/@videojs/themes@1/dist/fantasy/index.css'
  ]
};
