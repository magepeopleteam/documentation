---
title: Elementor Integration
description: Use WpTravelly with Elementor page builder.
sidebar_position: 4
---

# Elementor Guidelines

Leverage Elementor's visual builder alongside WpTravelly shortcodes to design stunning, fully custom tour pages without touching a line of code.

## Getting Started with Elementor

### Requirements

- Elementor (Free) installed and activated
- Elementor Pro recommended for theme builder features
- WpTravelly plugin active with sample tour data
- An Elementor-compatible theme (Hello Elementor, Astra, etc.)

### Embedding Shortcodes in Elementor

- Add a Shortcode widget from the Elementor panel
- Paste your WpTravelly shortcode (e.g. `[wptravelly-tour-list column=3]`)
- Adjust widget alignment, spacing, and background styles
- Preview the tour list directly in the Elementor editor

## Elementor Theme Builder Integration

### Single Tour Template

- Go to Templates → Theme Builder → Single Post
- Select "Tour" as the post type condition
- Design a custom single tour layout with dynamic data
- Use the Post Content widget to render the tour description
- Add custom sections for pricing, itinerary, and gallery

### Tour Archive Template

- Create a new Archive template in Theme Builder
- Set the condition to "Tour Archive"
- Design the archive header with title and filter bar
- Embed `[wptravelly-tour-list]` for the tour grid
- Style pagination and responsive columns via Elementor

### Dynamic Tags (Elementor Pro)

- Use dynamic tags to pull tour meta fields into your design
- Display tour price, duration, and availability dynamically
- Link buttons to booking pages with dynamic URLs
- Conditionally show/hide sections based on tour data

### Global Widgets & Templates

- Save your tour card design as a Global widget
- Reuse the widget across multiple pages
- Update once and propagate changes everywhere
- Combine with WpTravelly shortcodes inside saved templates

## Design & Styling Tips

### Layout Best Practices

- Use a 3- or 4-column grid for tour listing pages
- Keep tour cards visually consistent with equal heights
- Add hover effects on tour cards for interactivity
- Use contrasting background sections to separate filters from results
- Ensure sufficient whitespace between tour items

### Responsive Design

- Preview tour pages at mobile, tablet, and desktop breakpoints
- Reduce column counts on smaller screens (e.g. 1 col mobile)
- Adjust font sizes and button padding per device
- Test shortcode output on mobile viewports
- Hide non-essential elements on small screens

### Custom CSS Classes

- Add custom CSS classes to Elementor sections for fine-tuning
- Target WpTravelly output via the section's wrapper class
- Use Elementor's Custom CSS tab per widget for scoped styles
- Avoid `!important` — increase specificity instead
- Keep overrides in the theme's stylesheet for maintainability

### Performance Considerations

- Limit the number of tours displayed per page (use pagination)
- Optimise images uploaded via Elementor media panel
- Use a caching plugin to serve static versions of tour pages
- Minimise custom CSS/JS added through Elementor settings
- Test page load speed after adding tour shortcodes
