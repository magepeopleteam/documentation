---
title: Shortcodes
description: WPRently shortcodes reference.
sidebar_position: 4
---

# Shortcodes

## Rental Form

```
[wprently_rental_form product_id="123"]
```

Display the rental booking form for a product.

## Product List

```
[wprently_products limit="6" columns="3"]
```

Display rental products in a grid.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| limit | int | 10 | Number of products |
| columns | int | 3 | Grid columns |
| category | string | all | Filter by category |

## Availability Calendar

```
[wprently_calendar product_id="123"]
```

Display availability for a specific product.

## Search Form

```
[wprently_search]
```

Display a rental search form.
