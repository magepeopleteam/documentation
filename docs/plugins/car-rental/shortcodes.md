---
title: Shortcodes
description: Car Rental Manager shortcodes reference for embedding booking forms and listings.
sidebar_position: 4
---

# Shortcode Guidelines

Car Rental Manager provides shortcodes to embed booking forms, vehicle listings, search interfaces, and customer dashboards on any WordPress page or post.

## Booking Form

Displays the rental booking form with configurable layout styles and options.

```
[mpcrbm_booking]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| form | `inline`, `horizontal`, `vertical` | `inline` | Layout style of the booking form |
| progressbar | `yes`, `no` | `no` | Show step progress indicator |
| show_category | `yes`, `no` | `no` | Include category filter in the form |
| show_vehicle | `yes`, `no` | `yes` | Display vehicle selection step |
| class | String | (empty) | Additional CSS class names for custom styling |

## Vehicle Listing

Displays your fleet in grid or list view with filtering options by category, order, and pagination.

```
[rent-list type="car"]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| type | `car` | `car` | Post type to list |
| style | `grid`, `list` | `grid` | Display layout style |
| order | `asc`, `desc` | `desc` | Sort order by title |
| category | Slug | (empty) | Filter by category slug (e.g., `suv`, `sedan`) |
| posts_per_page | Integer | (all) | Number of vehicles to display |
| show_pagination | `yes`, `no` | `no` | Enable pagination |

## Search Form

Provides a search input with optional category dropdown. Results update dynamically via AJAX on supported themes.

```
[mpcrbm_search]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| placeholder | String | `Search vehicles…` | Placeholder text for the search input |
| style | `compact`, `full` | `compact` | Search bar style |
| show_category | `yes`, `no` | `no` | Show category dropdown alongside search |

## Category Filter

Renders a category selector as a dropdown, checkbox list, or button group. Combine with `[rent-list]` for interactive filtering.

```
[mpcrbm_categories]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `dropdown`, `list`, `buttons` | `dropdown` | Display style of the category filter |

## Customer Dashboard

Displays the customer dashboard showing past and upcoming bookings. Requires the user to be logged in.

```
[mpcrbm_dashboard]
```

## My Account

Renders the account management area for profile and booking history. Requires the user to be logged in.

```
[mpcrbm_my_account]
```

## Locations

Displays available pickup and drop-off locations for customer reference.

```
[mpcrbm_locations]
```

## Extra Services

Shows extra services available for add-on purchase during the rental booking process.

```
[mpcrbm_extras]
```

## FAQ Section

Renders the FAQ section for customer self-service queries.

```
[mpcrbm_faq]
```

## Best Practices

### Placement Tips

- Place only one booking form shortcode per page to avoid conflicting instances
- Use a dedicated page for the fleet listing with `[rent-list]` for better SEO
- Always test shortcodes in the WordPress customizer or a staging site before going live
- Combine shortcodes with Gutenberg blocks or page builders for advanced layouts
- Wrap shortcodes in custom containers if you need additional CSS styling
