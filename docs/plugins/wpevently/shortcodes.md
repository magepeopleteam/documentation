---
title: Shortcodes
description: WPEvently shortcodes reference for embedding events anywhere.
sidebar_position: 4
---

# Shortcodes

## Event Calendar

```
[wpevently_calendar]
```

Displays an interactive event calendar.

## Event Grid

```
[wpevently_grid limit="6" columns="3"]
```

Display events in a grid layout.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| limit | int | 10 | Number of events to show |
| columns | int | 3 | Grid columns (2, 3, or 4) |
| category | string | all | Filter by category slug |

## Single Event

```
[wpevently_event id="123"]
```

Display a specific event by ID.

## Featured Events

```
[wpevently_featured limit="4"]
```

Display featured events in a carousel.
