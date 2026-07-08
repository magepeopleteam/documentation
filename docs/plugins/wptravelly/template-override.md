---
title: Template Override
description: Customize WpTravelly templates via theme overrides.
sidebar_position: 5
---

# Template Override

Customise the front-end appearance of WpTravelly by overriding plugin templates inside your theme. This preserves your changes across plugin updates.

## How Template Override Works

### Template Location

- Plugin templates reside in `/wp-content/plugins/wptravelly/templates/`
- Copy any template file to your theme under `/wp-content/themes/your-theme/wptravelly/`
- Maintain the same directory structure as the plugin templates folder
- WordPress automatically loads your theme copy instead of the plugin original

### Supported Template Files

- `archive-tour.php` — tour archive / listing page
- `single-tour.php` — individual tour detail page
- `content-tour.php` — loop content for each tour card
- `taxonomy-tour-category.php` — category archive pages
- `taxonomy-tour-organizer.php` — organizer archive pages

## Step-by-Step Instructions

### 1. Create Theme Directory

- Navigate to `/wp-content/themes/your-active-theme/`
- Create a new folder named `wptravelly`
- Mirror the subdirectory structure from the plugin's `templates/` folder
- If using a child theme, create the folder inside the child theme

### 2. Copy & Edit Template

- Copy the target template from `plugins/wptravelly/templates/`
- Paste it into your theme's `wptravelly/` directory
- Open the copied file in your code editor
- Modify the HTML structure, CSS classes, or PHP logic as needed

### 3. Use Child Theme (Recommended)

- Create a child theme if you haven't already
- Override templates inside the child theme's `wptravelly/` folder
- Parent theme updates won't overwrite your customisations
- Keeps your overrides organised and theme-independent

### 4. Verify the Override

- Add a temporary comment or unique class to your copied template
- Visit the corresponding front-end page and inspect the HTML
- Confirm your comment or class appears in the source
- Remove the debug marker once verified

## Best Practices

### Structure & Safety

- Only override the files you need — leave the rest untouched
- Keep backup copies of both the original and your overrides
- Use WordPress coding standards when modifying PHP
- Validate HTML output to avoid broken layouts
- Test overrides in a staging environment first

### Performance & Compatibility

- Avoid adding excessive database queries in overridden templates
- Use existing WordPress hooks and actions when possible
- Check for updated plugin templates after each update
- Document your changes for future maintenance
- Use `get_template_part()` to include reusable sections

### CSS Override Alternatives

- For simple styling changes, use theme `style.css` instead
- Target plugin elements with higher-specificity selectors
- Use `:root` CSS custom properties if supported by the plugin
- Only resort to template overrides for structural HTML changes

### Troubleshooting

- Override not working? Check the folder name is exactly `wptravelly`
- Ensure file names match the plugin template names exactly
- Clear any caching plugins or server cache after changes
- Check theme's `functions.php` for template redirects
- Deactivate other plugins to isolate conflicts
