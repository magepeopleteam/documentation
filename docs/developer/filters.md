---
title: Filters
description: Developer reference for WordPress filter hooks in MagePeople plugins.
sidebar_position: 2
---

# Filters

MagePeople plugins offer extensive filter hooks for customizing data and output.

## Booking Filters

### `magepeople_booking_price`

Modify the booking price before calculation.

```php
apply_filters('magepeople_booking_price', $price, $booking_data);
```

**Parameters:**
- `$price` (float) — The calculated price
- `$booking_data` (array) — Booking data context

### `magepeople_booking_form_fields`

Modify the booking form fields.

```php
apply_filters('magepeople_booking_form_fields', $fields, $product_id);
```

### `magepeople_booking_validation`

Add custom validation rules for bookings.

```php
apply_filters('magepeople_booking_validation', $errors, $data);
```

## Display Filters

### `magepeople_product_grid_args`

Modify product grid query arguments.

```php
apply_filters('magepeople_product_grid_args', $args);
```

### `magepeople_email_template`

Customize email notification templates.

```php
apply_filters('magepeople_email_template', $template, $type, $booking_id);
```

## Availability Filters

### `magepeople_availability_slots`

Modify available time slots.

```php
apply_filters('magepeople_availability_slots', $slots, $product_id, $date);
```
