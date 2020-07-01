module.exports = {
  title: 'CodeLab Website',
  tagline: 'Turn your world into a playground',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'CodeLab', // Usually your GitHub org/user name.
  projectName: 'WebDemo', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CodeLab',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'projects/hello',
          label: 'Projects',
          activeBasePath: 'projects/hello',
          position: 'left',
         },   
         {
          href: 'https://scratch.codelab.club',
          label:'Scratch',
          position: 'left'
        },              
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Adapter',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
         to: 'aboutus/hello',
         activeBasePath: 'aboutus/hello',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
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
};
