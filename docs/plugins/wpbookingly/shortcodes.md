---
title: Shortcodes
description: WpBookingly shortcode reference for booking forms and service listings.
sidebar_position: 4
---

# Shortcode Guidelines

WpBookingly provides shortcodes to display booking forms, service listings, staff availability, and category grids on any page or post.

## Main Booking Form

Renders the full multi-step booking form with service selection, date picker, time slots, and checkout.

```
[wpbookingly_booking]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `layout` | `inline`, `horizontal`, `vertical` | `inline` | Form layout style |
| `show_progress` | `true`, `false` | `false` | Enable multi-step progress indicator |
| `show_summary` | `true`, `false` | `true` | Display booking summary before checkout |
| `guest_checkout` | `true`, `false` | `false` | Allow booking without registration |
| `redirect` | URL | (empty) | Custom URL after successful booking |
| `date_format` | String | site default | Override date display format |
| `time_format` | String | site default | Override time display format |
| `first_day` | `0`, `1` | `0` | Starting day of week (0=Sun, 1=Mon) |
| `min_date` | Date string | today | Earliest selectable booking date |

## Service List

Displays a browsable service catalog with name, description, price, and duration. Supports category filtering and search.

```
[wpbookingly_services]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `columns` | `1` – `4` | `2` | Number of grid columns |
| `layout` | `inline`, `horizontal`, `vertical` | `inline` | Display layout style |
| `show_search` | `true`, `false` | `true` | Enable or disable search bar |
| `show_filter` | `true`, `false` | `true` | Show or hide category filter tabs |
| `category` | Slug | (empty) | Filter by specific category slug |
| `limit` | Integer | `-1` | Maximum number of services to display (-1 = all) |

## Staff Availability

Shows staff profiles and real-time availability for the current week with direct booking via staff selection.

```
[wpbookingly_staff]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `staff_id` | Integer | (empty) | Show availability for a specific staff member |
| `layout` | `inline`, `horizontal`, `vertical` | `inline` | Display layout style |

## Category Grid

Renders a visual category grid with name, image, and service count. Clicking a category filters the service list.

```
[wpbookingly_categories]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `columns` | `1` – `4` | `2` | Number of grid columns |

## Usage Examples

Practical examples showing how to use shortcodes in different scenarios.

### Basic Booking Form

- `[wpbookingly_booking]` — Full booking experience
- `[wpbookingly_booking layout="horizontal"]` — Horizontal layout
- `[wpbookingly_booking show_progress="true"]` — With progress bar
- `[wpbookingly_booking guest_checkout="true"]` — Guest only

### Filtered Displays

- `[wpbookingly_services category="consultation"]` — Single category
- `[wpbookingly_services columns="3" show_search="true"]` — Grid with search
- `[wpbookingly_staff staff_id="5"]` — Specific staff availability
- `[wpbookingly_categories columns="4"]` — 4-column category grid

## Embedding & Placement Tips

Best practices for placing shortcodes on your WordPress site for optimal user experience.

### Page Placement

- Place the main booking shortcode on a dedicated, uncluttered page
- Use the service list shortcode on category landing pages
- Embed staff availability on team or about pages
- Avoid placing multiple booking forms on the same page

### Widget Areas

- Add the booking form to a sidebar using a WordPress text widget
- Use Gutenberg shortcode blocks for easy placement in FSE themes
- Elementor users can use the Shortcode widget
- Test mobile rendering after embedding in widget areas
