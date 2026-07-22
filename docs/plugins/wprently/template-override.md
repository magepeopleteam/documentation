---
title: Template Override
description: Customize WpRently templates via theme overrides and create your own rental templates.
sidebar_position: 9
---

# Template Override

Override the default WpRently templates to customise the front-end appearance of your rental pages. Your changes stay intact through plugin updates when overrides are placed inside a child theme.

## Override Existing Templates

Copy both the `templates/single` and `templates/screenshot` directories from the plugin into your active child theme's `templates/` folder, preserving the same directory structure.

```
your-child-theme/
└── templates/
    ├── single/
    └── screenshot/
```

After copying, edit the template files in your child theme. The plugin automatically loads your overridden templates instead of the defaults.

## Create Your Own Custom Template

You can create a completely new template instead of modifying a default one.

1. Copy the default template folder from `templates/single/`.
2. Rename the copied folder to your preferred template name (e.g., `modern`, `custom-layout`).
3. Create a preview image with the same name (e.g., `modern.png`) and place it inside `templates/screenshot/`.
4. Your new template appears automatically in the template selection list within the plugin.

## Rental Type Templates

Inside each custom template folder, you will find separate template files for different rental types:

| File | Rental Type |
|------|-------------|
| `multiple-day.php` | Multi-day rentals |
| `multiple-items.php` | Multiple-item rentals |
| `resort.php` | Resort bookings |
| `single-day.php` | Single-day rentals |

Edit the file that matches the rental type you want to customise. This gives you full control over the layout and markup for each type.

## Hooks and Filters

In addition to template overrides, WpRently provides a wide range of hooks and filters. Use them to further customise output and styling without modifying any core plugin files.

See the [Developer Hooks](/plugins/wprently/developer-hooks) article for a full reference of available actions and filters.
