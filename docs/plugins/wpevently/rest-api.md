---
title: REST API
description: Integrate the WooCommerce Event Manager with external applications using the available REST API endpoints for event data.
sidebar_position: 7
---

# REST API

WooCommerce Event Manager Plugin comes with REST API support. You can easily get event-related data via the following REST API endpoints.

**Base URL:** `https://your-site.com/wp-json`

## Endpoints

**GET** `/wp/v2/mep_events?per_page=10&page=1`
Get the latest 10 events. Change `per_page` to increase the count.

**GET** `/wp/v2/mep_cat`
Get the event category list.

**GET** `/wp/v2/mep_org`
Get the event organizer list.

**GET** `/wp/v2/mep_event_speaker?per_page=10&page=1`
Get the latest 10 event speakers. Change `per_page` to increase the count.

**GET** `/wp/v2/mep_event_attendee?per_page=10&page=1`
Get the latest 10 event attendees. Change `per_page` to increase the count.

**GET** `/wp/v2/mep_events?mep_cat=44&per_page=10&page=1`
Get the latest 10 events for a specific event category ID (e.g. `44`).

**GET** `/wp/v2/mep_events?mep_org=44&per_page=10&page=1`
Get the latest 10 events for a specific event organizer ID (e.g. `44`).
