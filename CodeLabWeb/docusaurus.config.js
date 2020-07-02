module.exports = {
  title: 'CodeLab Website',
  tagline: 'Turn your world into a playground',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'CodeLab', // Usually your GitHub org/user name.
  projectName: 'WebDemo', // Usually your repo name.
  themeConfig: {
    // disableDarkMode: true,
    defaultDarkMode: true,
    navbar: {
      title: 'CodeLab',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'projects',
          label: 'Projects',
          activeBasePath: 'projects',
          position: 'left',
         },
         {
          href: 'https://scratch.codelab.club',
          label:'Scratch',
          position: 'left'
        },
        {
          to: 'docs/adapter/doc1',
          activeBasePath: 'docs/adapter',
          label: 'Adapter',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'docs/Aboutus',
          activeBasePath: 'docs/Aboutus',
          label: 'About Us',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          activeBasePath: 'docs/',
          position: 'left',
        },
        {
          title: '创作环境',
        },
        {
          title: '找到同伴',
        },
        {
          title: '广播',
        },
        {
          title: '下载',
        },
        {
          title: '链接',
          items: [
            {
              html: `<a href="https://github.com" target="_blank"><img width="30" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>`
            },
            {
              html: `<a href="https://github.com" target="_blank"><img width="30" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>`
            }
          ]
        }
      ],
      logo: {
        // href: 'https://github.com',
        alt: 'qrcode',
        src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      },
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
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
