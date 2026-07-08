---
title: Actions
description: Developer reference for WordPress action hooks in MagePeople plugins.
sidebar_position: 1
---

# Actions (Hooks)

MagePeople plugins provide a comprehensive set of action hooks for custom development.

## Booking Actions

### `magepeople_before_booking_create`

Fires before a booking is created.

```php
do_action('magepeople_before_booking_create', $booking_data);
```

**Parameters:**
- `$booking_data` (array) — The booking data array

### `magepeople_after_booking_create`

Fires after a booking is successfully created.

```php
do_action('magepeople_after_booking_create', $booking_id, $booking_data);
```

**Parameters:**
- `$booking_id` (int) — The booking ID
- `$booking_data` (array) — The booking data array

### `magepeople_after_booking_status_change`

Fires when a booking status changes.

```php
do_action('magepeople_after_booking_status_change', $booking_id, $old_status, $new_status);
```

## Payment Actions

### `magepeople_before_payment_process`

Fires before payment processing begins.

### `magepeople_after_payment_complete`

Fires after payment is successfully completed.

### `magepeople_payment_failed`

Fires when a payment fails.
