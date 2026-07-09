---
title: Shortcodes
description: WpTravelly shortcode reference for displaying tours.
sidebar_position: 3
---

# Shortcode Guidelines

WpTravelly provides shortcodes to display tours in various styles including list, grid, modern, blossom, orchid, lotus, and flora views.

## Tour List

Default tour list view. Supports column layout, trending/popular/featured filters, and category filtering.

```
[wptravelly-tour-list column=3]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `column` | `2`, `3`, `4` | `3` | Number of grid columns |
| `type` | `all`, `trending`, `popular`, `featured` | `all` | Tour filter type |
| `style` | `grid`, `list`, `modern` | `grid` | Display layout style |
| `category` | Slug | (empty) | Filter by tour category slug |

## Tour List with Filter

Adds a filter bar above the tour grid. Users can filter by category, price range, and duration.

```
[wptravelly-tour-list-filter column=3]
```

## Modern List View

Modern card layout ideal for travel agencies showcasing curated packages.

```
[wptravelly-modern-list column=3]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `column` | `2`, `3`, `4` | `3` | Number of columns |
| `style` | `box` | (empty) | Box style modern layout |
| `category` | Slug | (empty) | Filter by tour category |

## Grid Views (Flora / Blossom / Orchid / Lotus)

Themed grid layouts — each provides unique card UI and hover effects.

```
[wptravelly-flora-grid column=3]
[wptravelly-blossom-grid column=4]
[wptravelly-orchid-grid column=3]
[wptravelly-lotus-grid column=3]
```

## Top Attractions

Highlights top-rated or most-visited tours. Supports slider attribute for carousel display.

```
[wptravelly-top-attraction column=3]
```

## Travel Location

Displays tours grouped by destination or location.

```
[wptravelly-travel-location column=4]
```

## Tour Search

Full search form with keyword, destination, date, and category filters. Results update dynamically via AJAX.

```
[wptravelly-tour-search]
```

## Category List

Displays all tour categories with linked archive pages. Each shows name, image, and tour count.

```
[wptravelly-category-list column=4]
```

## Organizer List

Showcases tour guides, agencies, or operators with photo, bio snippet, and contact info.

```
[wptravelly-organizer-list column=3]
```

## Tag & Activity List

Displays tag cloud or activity icons. Useful for building browse-by-interest pages.

```
[wptravelly-tag-list column=4]
[wptravelly-activity-list column=3]
```

## Style Examples

The tour shortcodes support multiple display styles via the `style` parameter.

- `[wptravelly-tour-list style='grid' column='3']` — Tours displayed in a responsive card grid.
- `[wptravelly-tour-list style='list']` — Tours displayed in a vertical list layout.
- `[wptravelly-modern-list style='box']` — Clean box-style modern layout for curated packages.
- `[wptravelly-flora-grid column='4']` — Flora-themed card design with vibrant styling.
- `[wptravelly-blossom-grid column='4']` — Blossom style grid with elegant card presentation.
- `[wptravelly-orchid-grid column='3']` — Orchid elegant layout for premium tour presentation.
- `[wptravelly-lotus-grid column='3']` — Lotus theme for luxury tour packages.

## Common Parameters

Fine-tune your shortcodes with these optional attributes.

- `column` — Number of columns — `2`, `3`, or `4`
- `type` — Tour filter — `all`, `trending`, `popular`, `featured`
- `style` — Display style — `grid`, `list`, `box`, `modern`
- `category` — Filter by tour category slug
- `organizer` — Filter by tour organizer slug
