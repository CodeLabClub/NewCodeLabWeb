module.exports = {
  title: 'CodeLab',
  tagline: '传递编程的乐趣，鼓励孩子成为数字时代的创作者',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'CodeLab', // Usually your GitHub org/user name.
  projectName: 'WebDemo', // Usually your repo name.
  themeConfig: {
    // disableDarkMode: true,
    defaultDarkMode: true,
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          href: 'https://scratch.codelab.club',
          label:'Scratch社区',
          position: 'left'
        },        
        {
          to: 'projects',
          label: '演示案例',
          activeBasePath: 'projects',
          position: 'left',
         },
        {
          to: 'docs/adapter/doc1',
          activeBasePath: 'docs/adapter',
          label: '文档',
          position: 'left',
        },
        { to: 'blog', label: '博客', position: 'left'},
        {
          to: 'docs/Aboutus',
          activeBasePath: 'docs/Aboutus',
          label: '关于我们',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '技术文档',
              to: 'docs/',
            },
            {
              label: '项目/活动文档',
              to: 'docs/',
            }
          ]
        },
        {
          title: '找到同伴',
          items: [
            {
              label: 'Scratch社区',
              to: 'https://scratch.codelab.club',
            },
            {
              label: 'CodeLab论坛',
              to: 'https://forums.codelab.club/top/all',
            },
            {
              label: '博客圈',
              to: '',
            },
          ]
        },
        {
          title: '正在发生',
          items: [
            {
              label: 'CodeLab活动',
              to: '',
            }
          ]
        },
        {
          title: '下载',
        },
        {
          title: '找到我们',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/CodeLabClub',
            },
            {
              label: '公众号',
              to: 'https://github.com/CodeLabClub',
              
            },
            {
              label: '邮箱',
              to: 'https://github.com/CodeLabClub',
              
            }
          ]
        }
      ],
      /*
      logo: {
        // href: 'https://github.com',
        alt: 'qrcode',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      },
      */
      copyright: `Copyright © ${new Date().getFullYear()} CodeLab, Inc. Built with Docusaurus.`,
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
    'https://unpkg.com/video.js/dist/video.min.js',
  ],
  stylesheets: [
    'https://unpkg.com/video.js/dist/video-js.min.css',
    'https://unpkg.com/@videojs/themes@1/dist/fantasy/index.css'
  ]
};
