---
title: Shortcodes
description: eCab shortcodes reference for embedding taxi booking forms.
sidebar_position: 4
---

# Shortcode Guidelines

eCab provides separate shortcodes for each pricing model, giving you full control over the customer booking experience. Display transport booking forms anywhere on your site.

## Distance-Based Pricing

Displays a booking form that calculates fares based on pickup-to-dropoff distance. Google Maps integration provides address autocomplete and dynamic fare calculation.

```
[ecab_booking]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `horizontal`, `vertical` | `horizontal` | Layout style of the booking form |
| vehicle_id | Integer | (empty) | Pre-select a specific transport vehicle by ID |
| hide_location | `yes`, `no` | `no` | Hide the location selection step |
| hide_date | `yes`, `no` | `no` | Hide the date/time selection step |
| hide_passenger | `yes`, `no` | `no` | Hide the passenger/bag count selector |
| class | String | (empty) | Custom CSS class for branding |

## Fixed Hourly Pricing

Displays a booking form tailored for hourly rental services. Customers book a vehicle for a set number of hours with a flat hourly rate.

```
[ecab_hourly_booking]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `horizontal`, `vertical` | `horizontal` | Layout style of the booking form |
| vehicle_id | Integer | (empty) | Pre-select a specific vehicle by ID |
| hide_date | `yes`, `no` | `no` | Hide the date/time selection step |
| class | String | (empty) | Custom CSS class for branding |

## Manual Fixed Location Pricing

Displays a booking form for predefined routes with fixed prices. Customers choose from location pairs with predetermined fares.

```
[ecab_fixed_booking]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `horizontal`, `vertical` | `horizontal` | Layout style of the booking form |
| vehicle_id | Integer | (empty) | Pre-select a specific vehicle by ID |
| hide_date | `yes`, `no` | `no` | Hide the date/time selection step |
| class | String | (empty) | Custom CSS class for branding |

## Embedding & Placement Tips

### Page Placement

- Place the shortcode in any WordPress post, page, or custom post type
- Use the Classic Editor by pasting the shortcode directly into the editor
- In Gutenberg, add a Shortcode block and paste the shortcode code
- In Elementor, use the Shortcode widget to embed eCab booking forms
- Shortcodes can also be added to widget areas, footers, or sidebars
- Wrap shortcodes in custom HTML containers for additional styling control

### Troubleshooting

- If the shortcode displays as plain text, save permalinks (Settings → Permalinks → Save)
- Verify WooCommerce is installed and activated for payment processing
- Check that the selected pricing model matches the shortcode type
- Clear any caching plugins or CDN caches to reload the shortcode output
- Test the shortcode on a default WordPress theme to rule out theme conflicts
- Enable WordPress debugging to identify PHP errors from conflicting plugins
