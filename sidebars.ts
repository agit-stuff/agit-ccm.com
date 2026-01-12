import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/mcp-integration',
        'guides/git-resilience',
        'guides/cursor-setup',
        'guides/claude-code-setup',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        'commands/init',
        'commands/record',
        'commands/add',
        'commands/status',
        'commands/commit',
        'commands/log',
        'commands/show',
        'commands/search',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/architecture',
        'reference/philosophy',
        'reference/changelog',
      ],
    },
  ],
};

export default sidebars;
