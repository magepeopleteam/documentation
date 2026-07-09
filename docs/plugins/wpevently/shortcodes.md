---
title: Shortcodes
description: Display events anywhere on your site using shortcodes with list, grid, calendar, carousel, timeline, and many other layout styles.
sidebar_position: 4
---

# Shortcodes

## Event List Shortcode

The main shortcode for displaying events. Supports multiple display styles, filters, and pagination via parameters.

<video src="/video/plugins/wpevently/shortcode.webm" controls width="100%" class="doc-video"></video>

### Basic Usage

```
[event-list]
```

### Parameters

Add any of these parameters inside the shortcode like `[event-list style='grid' cat='5' pagination='yes']`. Multiple parameters can be combined.

#### Layout

Control how events are displayed — choose a layout style, set grid columns, or switch to timeline view.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `style` | `grid`, `list`, `minimal`, `native`, `timeline`, `title`, `spring`, `winter` | `grid` | Display layout style |
| `column` | Integer (`3`, `4`) | `3` | Number of grid columns (grid style only) |
| `timeline-mode` | `vertical`, `horizontal` | `vertical` | Timeline direction (requires `style='timeline'`) |

#### Pagination & Carousel

Add page numbers, a *Load More* button, or switch to carousel mode. Carousel sub-parameters only apply when `pagination='carousal'`.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `pagination` | `yes`, `no`, `carousal` | `no` | Enable pagination or carousel mode. Works with all styles except `timeline`. |
| `pagination-style` | `load_more` | `load_more` | Pagination style — `load_more` adds a button; omit for numbered pages (requires `pagination='yes'`) |
| `carousal-nav` | `yes`, `no` | `no` | Carousel navigation arrows (requires `pagination='carousal'`) |
| `carousal-dots` | `yes`, `no` | `yes` | Carousel dot indicators (requires `pagination='carousal'`) |
| `carousal-id` | Unique ID (integer) | `102448` | Unique instance ID — use a random value when multiple carousels on the same page (requires `pagination='carousal'`) |

#### Content Filtering

Narrow down events by category, organizer, tag, location, date, or status. Combine multiple filters to refine results.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `cat` | Category ID (integer) | `0` | Filter by category ID |
| `org` | Organizer ID (integer) | `0` | Filter by organizer ID |
| `tag` | Tag ID (integer) | `0` | Filter by tag ID |
| `city` | City name | (empty) | Filter by city |
| `state` | State name | (empty) | Filter by state |
| `country` | Country name | (empty) | Filter by country |
| `sort` | `ASC`, `DESC` | `ASC` | Sort order |
| `status` | `upcoming`, `expired` | `upcoming` | Event status filter |
| `year` | Year (YYYY) | (empty) | Filter by year |
| `show` | Integer | `-1` | Number of events to display (-1 = all) |

#### Filter UI

Enable the advanced search/filter bar, then show/hide individual filter controls. Sub-parameters only work when `search-filter='yes'` is set.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `search-filter` | `yes`, empty | (empty) | Enable the advanced search/filter UI |
| `cat-filter` | `yes`, `no` | `no` | Show category filter dropdown |
| `org-filter` | `yes`, `no` | `no` | Show organizer filter dropdown |
| `tag-filter` | `yes`, `no` | `no` | Show tag filter dropdown |
| `title-filter` | `yes`, `no` | `yes` | Show title filter (requires `search-filter='yes'`) |
| `category-filter` | `yes`, `no` | `yes` | Show category filter (requires `search-filter='yes'`) |
| `organizer-filter` | `yes`, `no` | `yes` | Show organizer filter (requires `search-filter='yes'`) |
| `city-filter` | `yes`, `no` | `yes` | Show city filter (requires `search-filter='yes'`) |
| `state-filter` | `yes`, `no` | `yes` | Show state filter (requires `search-filter='yes'`) |
| `date-filter` | `yes`, `no` | `yes` | Show date filter (requires `search-filter='yes'`) |

### Style Examples

The `[event-list]` shortcode supports multiple display styles via the `style` parameter.

**Style — `[event-list style='list']`**
Events displayed in a vertical list layout.

**Style — `[event-list style='grid' column='3']`**
Events displayed in a responsive card grid. Use `column` to control columns (3 or 4).

**Style — `[event-list style='minimal']`**
Clean minimal layout showing event titles and dates without thumbnails.

**Style — `[event-list style='native']`**
Native WordPress loop styling — blends with your theme's default post layout.

**Style — `[event-list style='title']`**
Title-only list without thumbnails, dates, or buttons.

**Style — `[event-list style='timeline' timeline-mode='vertical']`**
Vertical timeline layout with dates along a central line.

**Style — `[event-list style='timeline' timeline-mode='horizontal']`**
Horizontal timeline layout with dates flowing left to right.

**Style — `[event-list style='spring']`**
Spring-themed design with vibrant colours.

**Style — `[event-list style='winter']`**
Winter-themed design with cool icy colours.

### All Shortcodes

Quick-reference for every shortcode.

#### Events List with Search Filter

Advanced search and filter UI including title search, date range, category, organizer, city, and state filters.

```
[events_list search-filter='yes']
```

#### Expired Events

Display past events that have already taken place. Accepts all standard `[event-list]` parameters.

```
[expire-event-list]
```

#### Recurring Events

Display recurring event series. Accepts the same parameters as `[event-list]`.

```
[event-list-recurring]
```

#### Event Registration

Display the registration form with ticket selection for a single event.

```
[event-add-cart-section event=10408]
```

| Parameter | Required | Description |
|-----------|----------|-------------|
| `event` | Yes | The event ID to show registration for |

#### Event Speakers

Display event speakers.

```
[event-speaker-list]
```

#### Event City List

Display a list of all cities that have events.

```
[event-city-list]
```

#### Event Calendar (Free)

Display an interactive event calendar.

```
[event-calendar]
```

#### Event Calendar (Pro)

Advanced calendar with category and month filtering.

```
[mep-event-calendar]
```

| Parameter | Description |
|-----------|-------------|
| `cat_id` | Filter calendar events by category ID |
| `month` | Display a specific month (format: `YYYY-MM`) |
