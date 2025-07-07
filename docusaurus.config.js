// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bougary Kanté',
  tagline: 'DevOps. RH. Sécurisé.',
  favicon: 'img/favicon.ico',

  url: 'https://dougkb.github.io',
  baseUrl: '/portfolio-boug/',
  deploymentBranch: 'gh-pages',
  organizationName: 'dougkb',
  projectName: 'portfolio-boug',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dougkb/portfolio-boug/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/dougkb/portfolio-boug/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/devops-photo.jpg',

    navbar: {
      title: 'Bougary Kanté',
      logo: {
        alt: 'Logo Bougary',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Accueil', position: 'left' },
        { to: '/#projets', label: 'Projets', position: 'left' },
        { to: '/#competences', label: 'Compétences', position: 'left' },
        { to: '/docs/cv', label: 'CV', position: 'right' },
        { to: '/docs/contact', label: 'Contact', position: 'right' },
        {
          href: 'https://github.com/dougkb',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            { label: 'À propos', to: '/docs/about' },
            { label: 'Projets', to: '/docs/project-point-pass' },
            { label: 'Compétences', to: '/docs/skills/devops' },
            { label: 'CV', to: '/docs/cv' },
            { label: 'Contact', to: '/docs/contact' },
          ],
        },
        {
          title: 'Réseaux',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dougkb',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/bougary-k/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bougary Kanté.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
