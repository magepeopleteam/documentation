// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MagePeople Docs',
  tagline: 'Documentation for MagePeople WordPress plugins',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://magepeople.com',
  baseUrl: '/',

  organizationName: 'magepeople',
  projectName: 'magepeople-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/magepeopleteam/documentation/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        logo: {
          alt: 'MagePeople',
          src: 'img/mage-people-logo.webp',
        },
        items: [
          {
            to: '/docs/getting-started/installation',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: '/docs/category/plugins',
            label: 'Plugins',
            position: 'left',
          },
          {
            to: '/docs/category/addons',
            label: 'Addons',
            position: 'left',
          },

          {
            href: 'https://mage-people.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://support.mage-people.com/portal/en/newticket',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://github.com/magepeopleteam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'Plugins',
                to: '/docs/plugins/wpevently/overview',
              },
              {
                label: 'Addons',
                to: '/docs/category/addons',
              },
            ],
          },
          {
            title: 'Plugins',
            items: [
              {label: 'WPEvently', to: '/docs/plugins/wpevently/overview'},
              {label: 'eCab', to: '/docs/plugins/ecab/overview'},
              {label: 'WPTravelly', to: '/docs/plugins/wptravelly/overview'},
              {label: 'WPBookingly', to: '/docs/plugins/wpbookingly/overview'},
              {label: 'WPRently', to: '/docs/plugins/wprently/overview'},
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'https://mage-people.com',
              },
              {
                label: 'Support',
                href: 'https://support.mage-people.com/portal/en/newticket',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/magepeople',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@magepeople',
              },
            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'GitHub',
                href: 'https://github.com/magepeopleteam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MagePeople. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'bash', 'json'],
      },
    }),
};

export default config;
