import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://agit-stuff.github.io',
  base: '/agit-website',
  integrations: [
    starlight({
      title: 'AGIT',
      logo: {
        src: './src/assets/agit-logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/agit-stuff/agit',
      },
      customCss: ['./src/styles/global.css'],
      components: {
        Header: './src/components/Header.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Configuration', slug: 'getting-started/configuration' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'MCP Integration', slug: 'guides/mcp-integration' },
            { label: 'Cursor Setup', slug: 'guides/cursor-setup' },
            { label: 'Claude Code Setup', slug: 'guides/claude-code-setup' },
          ],
        },
        {
          label: 'Commands',
          items: [
            { label: 'init', slug: 'commands/init' },
            { label: 'record', slug: 'commands/record' },
            { label: 'commit', slug: 'commands/commit' },
            { label: 'log', slug: 'commands/log' },
            { label: 'show', slug: 'commands/show' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Architecture', slug: 'reference/architecture' },
            { label: 'Philosophy', slug: 'reference/philosophy' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/og-image.png',
          },
        },
      ],
    }),
  ],
});
