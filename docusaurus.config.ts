import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AGIT',
  tagline: 'AI-Native Git Wrapper',
  favicon: 'img/favicon.ico',

  url: 'https://agit-ccm.com',
  baseUrl: '/',

  organizationName: 'agit-stuff',
  projectName: 'agit-stuff.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/agit-stuff/agit-stuff.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'AGIT Logo',
        src: 'img/agit-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/getting-started/installation',
          label: 'Install',
          position: 'left',
        },
        {
          to: '/sponsor',
          label: 'Sponsor',
          position: 'left',
        },
        {
          href: 'https://github.com/agit-stuff/agit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Commands',
              to: '/docs/commands/init',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/agit-stuff/agit',
            },
            {
              label: 'Issues',
              href: 'https://github.com/agit-stuff/agit/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sponsor',
              to: '/sponsor',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} AGIT. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'rust', 'powershell', 'markdown'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
