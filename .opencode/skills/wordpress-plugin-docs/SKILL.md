---
name: wordpress-plugin-docs
description: Use when writing, reviewing, or generating documentation for WordPress plugins. Covers plugin readmes, hook/action/filter docs, inline code docs, FAQ sections, upgrade notices, and WP Plugin Directory standards.
---

# WordPress Plugin Documentation

## Plugin Readme (readme.txt)
- Follow the WordPress Plugin Directory readme.txt format
- Required sections: Contributors, Tags, Requires at least, Tested up to, Stable tag, License, License URI
- Description section: brief plugin summary (2-3 sentences)
- Installation section: clear step-by-step instructions
- FAQ section: address common questions
- Screenshots section: numbered with descriptions
- Changelog section: version-numbered entries with date, use `= X.Y.Z =` format
- Upgrade Notice section: one-liners per version for critical changes

## Documenting Hooks
- Use `@since`, `@param`, `@return` PHPDoc tags for all actions and filters
- Document both `do_action()` and `apply_filters()` inline
- Include the hook name, description, parameters with types, and first-available version
- Example format:
  ```php
  /**
   * Filters the widget title.
   *
   * @since 1.0.0
   *
   * @param string $title    The widget title.
   * @param array  $instance The widget instance settings.
   */
  echo apply_filters( 'myplugin_widget_title', $title, $instance );
  ```

## Documenting Shortcodes
- Name, description, all attributes (with types, defaults, options)
- Example usage for each major use case
- Notes on content (enclosed vs self-closing)
- @since tag

## Inline Code Documentation
- PHPDoc for all classes, methods, functions
- `@since`, `@param`, `@return`, `@throws`, `@see`, `@deprecated`
- Complex blocks need inline comments explaining the *why*
- Document database queries, especially `$wpdb` calls

## Admin Screen Documentation
- Describe each settings page, section, and field
- Screenshots or mockups for UI-heavy documentation
- Accessibility notes for screen reader text

## Changelog Best Practices
- Semantic versioning (MAJOR.MINOR.PATCH)
- Categorize: New, Enhancement, Fix, Security, Performance
- Link to relevant GitHub issues/PRs
- Denote breaking changes prominently

## Documentation Tone
- Professional but approachable
- Assume developer audience but explain WordPress conventions
- Consistent terminology throughout
- Include code examples that are tested and working
