---
title: Bus Manager Settings
description: Configure WpBusTicketly bus booking settings.
sidebar_position: 3
---

# Bus Manager Settings

## Global Settings

### Date & Time Configuration

- Set the default date picker format (e.g. DD/MM/YYYY or MM/DD/YYYY)
- Configure the minimum and maximum travel date range
- Define buffer hours between booking time and departure
- Enable or disable the return date field on the search form
- Choose the time format: 12-hour or 24-hour display

### Block Editor & UI

- Toggle the Gutenberg block editor integration on or off
- Set the default seat layout view (grid or list)
- Configure how many seats are displayed per row in the seat map
- Enable tooltips on seat hover for passenger details
- Choose the colour scheme for the booking interface

## Bus Settings

### Seat Status & Availability

- Define seat statuses: Available, Booked, Blocked, Maintenance
- Auto-block seats after a pending booking expires
- Set the maximum number of seats per booking
- Enable female-only seat sections (optional, configurable per bus)
- Configure the seat lock timeout for abandoned checkouts

### Departure & Buffer Rules

- Set the minimum advance booking time (e.g. 2 hours before departure)
- Configure the maximum advance booking window (e.g. 30 days)
- Define buffer time between consecutive trips for cleaning
- Enable or disable same-day bookings
- Set the cutoff time after which bookings close for a departure

## Appearance & Styling

### Colour Customisation

- Navigate to **WpBusTicketly → Settings → Styling**
- Set the primary, secondary, and accent colours for the UI
- Customise seat colours: available, selected, booked, and blocked
- Choose button styles (rounded or square corners)
- Preview changes in real-time before saving

### Seat Panel Settings

- Choose the seat panel layout: **Left**, **Right**, or **Full Width**
- Configure the seat panel width as a percentage of the page
- Enable or disable the seat legend panel
- Set the maximum seat columns per row (e.g. 4 across)
- Customise the seat panel background colour and border

## Checkout & PDF Settings

### Checkout Field Settings

- Access **WpBusTicketly → Settings → Checkout** (Pro feature)
- Enable or disable passenger detail fields (name, phone, email, age)
- Mark fields as required or optional
- Add custom fields specific to your operation
- Reorder fields by drag-and-drop in the settings panel

### PDF Ticket Settings

- Go to **WpBusTicketly → Settings → PDF** (Pro feature)
- Choose the PDF template style (modern or classic)
- Upload your company logo for the ticket header
- Add custom footer text (terms, contact info, etc.)
- Set the paper size: A4, Letter, or Ticket (58mm roll)

## Translation & Labelling

### Translating the Plugin

- Use the **Loco Translate** plugin to manage translation files
- Translation files are located in `/wp-content/plugins/wpbusticketly/languages/`
- Create or edit `.po` files for your language (e.g. `fr_FR`)
- Compile `.mo` files after editing translations
- The plugin is fully translation-ready with all strings exposed

### Changing Bus Labels

- Go to **WpBusTicketly → Settings → Labels**
- Rename "Bus" to a custom term like "Coach" or "Van"
- Change "Seat" to "Berth" or "Position" as needed
- Update "Boarding Point" and "Dropping Point" labels
- All label changes apply immediately across the front-end
