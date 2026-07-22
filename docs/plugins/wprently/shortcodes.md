---
title: Shortcodes
description: WpRently shortcode guidelines and reference.
sidebar_position: 3
---

# Shortcode Guidelines

Use shortcodes to display rental items, search forms, and booking widgets anywhere on your WordPress site. All shortcodes support a consistent set of parameters for styling, filtering, and pagination.

## Rent List

The primary shortcode for displaying rental items. Renders a grid or list of rental products filtered by type, category, or custom query.

`[rent-list]`

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `style` | `grid`, `list` | `grid` | Display layout style |
| `show` | Integer | `-1` | Number of items to display per page (`-1` shows all) |
| `order` | `ASC`, `DESC` | `DESC` | Sort order |
| `orderby` | `date`, `title`, `price`, `rand`, `menu_order` | (empty) | Field to sort by |
| `type` | `bike_car_sd`, `bike_car_md`, `resort`, `equipment`, `dress`, `appointment` | (empty) | Filter by rental type (`bike_car_sd`/`bike_car_md` cover both bike and car items, for single-day and multi-day pricing respectively) |
| `location` | String | (empty) | Filter by rental location |
| `category` | String | (empty) | Filter by category (falls back to `cat_ids` if empty) |
| `cat_ids` | String | (empty) | Comma-separated category IDs to filter by (e.g. `cat_ids='2,6'`) |
| `meta_key` | String | (empty) | Custom meta key for advanced filtering |
| `columns` | `1` – `6` | (empty) | Number of grid columns (grid style only) |
| `pagination` | `yes`, `no` | `yes` | Show pagination |
| `hide-price` | `yes`, `no` | `no` | Hide the price from the item card |
| `left-filter` | `yes`, `no` | (empty) | Enable left sidebar filters |
| `left-title-filter` | `on`, `off` | `on` | Show title search in left filter |
| `left-price-filter` | `on`, `off` | `on` | Show price range filter in left filter |
| `left-location-filter` | `on`, `off` | `on` | Show location filter in left filter |
| `left-category-filter` | `on`, `off` | `on` | Show category filter in left filter |
| `left-type-filter` | `on`, `off` | `on` | Show type filter in left filter |
| `left-feature-filter` | `on`, `off` | `on` | Show feature filter in left filter |

### Grid with Pagination & Filters

Display rental items in a grid with pagination and left sidebar filters for specific categories.

`[rent-list style='grid' show='9' pagination='yes' left-filter='yes' cat_ids='1,2,3']`

## Rent Add to Cart

Displays a single-item add-to-cart button for a specific rental product. Accepts a valid WooCommerce product ID.

`[rent-add-to-cart id="1"]`

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `id` | Integer | (required) | Valid WooCommerce product ID |

## Rent Item Search

Renders an advanced rental search form with date picker, type selector, and category dropdown. Must be placed on a page with slug `search-item-list` alongside the `[search-result]` shortcode.

`[rbfw_search]`

## Search Result

Displays search results from the `[rbfw_search]` form. Place this on the `search-item-list` page.

`[search-result]`

## Usage Examples

### Basic Grid

- `[rent-list]` — default grid showing all items
- `[rent-list style='grid' columns='4' show='12']` — 4-column grid with 12 items
- `[rent-list style='list' show='10']` — list layout with 10 items

### Filtered by Type

- `[rent-list type='bike_car_sd']` — only single-day bike/car rentals
- `[rent-list type='bike_car_md' order='ASC' orderby='title']` — multi-day bike/car rentals sorted alphabetically
- `[rent-list type='equipment' show='8' pagination='no']` — equipment without pagination
- `[rent-list type='resort']` — resort bookings

### Filtered by Category

- `[rent-list cat_ids='2,6']` — items in categories 2 and 6
- `[rent-list cat_ids='15']` — items in category ID 15
- `[rent-list cat_ids='12' type='bike_car_sd']` — combined category and type filters

### With Left Filters

- `[rent-list left-filter='yes']` — enables left sidebar filtering
- `[rent-list left-filter='yes' left-category-filter='on' left-price-filter='on']` — category and price filters
- `[rent-list left-filter='yes' left-type-filter='on' left-location-filter='on']` — type and location filters
- `[rent-list left-filter='yes' left-feature-filter='on' left-title-filter='on']` — feature and title filters

### Search

- Place `[rbfw_search]` on any page to show the search form
- Place `[search-result]` on the `search-item-list` page
- The search form value works only when assigned in the rent item settings
