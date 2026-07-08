---
title: REST API
description: REST API reference for MagePeople plugins.
sidebar_position: 3
---

# REST API

MagePeople plugins provide a REST API for integrating with external applications.

## Base URL

```
https://yoursite.com/wp-json/magepeople/v1/
```

## Authentication

All API requests require authentication via WooCommerce API keys or WordPress cookies.

## Endpoints

### Get Products

```
GET /products
```

Returns a list of available booking products.

**Parameters:**
- `per_page` (int) — Results per page (default: 10)
- `page` (int) — Page number
- `category` (string) — Filter by category slug

### Get Product

```
GET /products/{id}
```

Returns details for a single product.

### Check Availability

```
GET /products/{id}/availability?date=2025-01-15
```

Returns available slots for a given date.

### Create Booking

```
POST /bookings
```

Creates a new booking.

**Request Body:**
```json
{
  "product_id": 123,
  "quantity": 1,
  "start_date": "2025-01-15",
  "end_date": "2025-01-16",
  "customer_id": 1
}
```

### Get Bookings

```
GET /bookings?customer_id=1
```

Returns bookings for a customer.
