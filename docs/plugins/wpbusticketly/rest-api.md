---
title: REST API
description: WpBusTicketly REST API documentation for bus and passenger data.
sidebar_position: 7
---

# REST API

WpBusTicketly exposes REST API endpoints that allow external applications to retrieve bus schedules and passenger data. All requests must be authenticated using standard WordPress credentials.

## API Endpoints

### `GET /wp-json/wbtm/v1/buses`

Returns a list of all published buses with their details. Supports `?route_id=5`, `?type=ac`, `?page=1&per_page=20`.

### `GET /wp-json/wbtm/v1/buses/{id}`

Returns full details for a specific bus by ID — includes seat layout, boarding points, and pricing tiers.

### `GET /wp-json/wbtm/v1/passengers`

Returns passenger details for all confirmed bookings. Supports `?bus_id=42` and `?date=2025-12-25`.

### `GET /wp-json/wbtm/v1/routes`

Returns all available routes with start and end points. Useful for populating dropdown selectors in external apps.

Base URL: `https://your-site.com/wp-json`

## Authentication

**Basic Auth** — Use **Basic Auth** with WordPress username and application password. Generate an Application Password at **Users → Profile → Application Passwords**. Include credentials in the `Authorization` header: `Basic base64(username:application_password)`.

**OAuth 1.0a** — OAuth 1.0a is also supported via the WordPress REST API infrastructure.

## Integration Use Cases

### External Display Systems

- Sync bus schedules with airport-style departure boards
- Push real-time seat availability to digital signage
- Display route maps on information kiosks
- Update departure times automatically from the WordPress backend

### Custom Applications

- Build mobile apps (iOS / Android) using the REST API as a backend
- Create custom booking widgets for third-party websites
- Integrate with CRM systems for automated passenger data sync
- Build reporting dashboards with live booking and revenue data

## Rate Limits & Best Practices

### Rate Limiting

- WordPress REST API does not enforce strict rate limits by default
- High-traffic applications should implement client-side caching
- Use the `If-None-Match` header with ETags when possible
- Consider using a caching plugin for frequently accessed endpoints
- Respect server resources by limiting concurrent requests

### Security

- Always use HTTPS in production to encrypt API traffic
- Generate unique Application Passwords per integration
- Never expose credentials in client-side JavaScript
- Restrict API access by IP if the integration is internal
- Regularly audit and revoke unused application passwords
