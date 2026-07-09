# MagePeople Docs

Documentation portal for [MagePeople](https://mage-people.com) WordPress plugins.

Built with [Docusaurus](https://docusaurus.io/).

## Getting Started

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## Project Structure

```
docs/
├── getting-started/   # Installation, setup, configuration
├── plugins/           # Plugin documentation
├── addons/            # Addon documentation
├── developer/         # Hooks, filters, REST API
└── videos/            # Video tutorials
```

## Adding a New Plugin

1. Create a new folder under `docs/plugins/your-plugin/`
2. Add `_category_.json` with the plugin name
3. Add markdown files (overview.md, features.md, settings.md, etc.)
4. The sidebar auto-generates from the folder structure

## License

Proprietary — all rights reserved.
