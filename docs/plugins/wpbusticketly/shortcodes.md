---
title: Shortcodes
description: WpBusTicketly shortcodes reference for embedding bus booking forms.
sidebar_position: 4
---

# Shortcode Guidelines

WpBusTicketly provides shortcodes to display bus search forms, bus listings, and ticket views on any page or post.

## Bus Search Form

Renders the main bus search interface with origin, destination, and date fields.

```
[wbtm-bus-search-form]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `list`, `grid` | `list` | Display style of the search form |
| order | `asc`, `desc` | `asc` | Sort order for bus results |

## Bus Search Results

Displays available buses based on the user's search criteria. Must be placed on the same page referenced by the search form action.

```
[wbtm-bus-search]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `list`, `grid` | `list` | Display style for results |
| order | `asc`, `desc` | `asc` | Sort order |
| posts_per_page | Integer | `-1` | Number of results per page (-1 = all) |

## Bus Lists

Displays a static list of all available buses without requiring a search. Useful for route overview pages.

```
[wbtm-bus-list]
```

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| style | `list`, `grid` | `list` | Display layout style |
| order | `asc`, `desc` | `asc` | Sort order |
| orderby | `date`, `title`, `price` | `date` | Field to sort by |
| posts_per_page | Integer | `-1` | Number of buses per page (-1 = all) |
| bus_type | Slug (`ac`, `non-ac`) | (empty) | Filter by bus type |

## View Ticket

Enables customers to look up their booking details using an order ID and email.

```
[wbtm-view-ticket]
```

## Style Examples

The `[wbtm-bus-list]` and `[wbtm-bus-search]` shortcodes support multiple display styles via the `style` parameter.

**`[wbtm-bus-list style='list']`** — Buses displayed in a vertical list layout with route and fare details.

**`[wbtm-bus-list style='grid']`** — Buses displayed in a responsive card grid.

**`[wbtm-bus-list orderby='price' order='asc']`** — Buses sorted by fare in ascending order.

**`[wbtm-bus-list bus_type='ac' posts_per_page='6']`** — Display up to 6 AC buses in a filtered list.

## Page Setup Best Practices

### Page Structure

- Create a page titled **Bus Search** with slug `/bus-search-list/`
- Place `[wbtm-bus-search-form]` on the search page
- Place `[wbtm-bus-search]` on the same page or a dedicated results page
- Create a **View Ticket** page with slug `/view-ticket/` and the `[wbtm-view-ticket]` shortcode
- Add these pages to your navigation menu for easy access

### Troubleshooting

- If search results don't appear, re-save permalinks at **Settings → Permalinks**
- Ensure no caching plugin is serving stale shortcode output
- Verify the shortcode is not wrapped in paragraph tags by the editor
- Use a classic WordPress editor or a shortcode block for reliable output
- Check that the bus search form action URL points to the correct results page

## Page Builder Integration

### Elementor

- Drag the **Shortcode** widget onto the page
- Paste the shortcode (e.g. `[wbtm-bus-search-form]`) into the widget field
- Save and preview the page to verify rendering
- Style the surrounding section with Elementor's design controls

### Gutenberg Block Editor

- Add a **Shortcode** block from the block inserter
- Enter the shortcode directly into the block content area
- Use the **Code** block if the shortcode is being wrapped in paragraphs
- Preview the page to confirm the shortcode output renders correctly
