---
title: Available Addons
description: Addons available for the WpBusTicketly bus booking plugin.
sidebar_position: 5
---

# Available Addons

WpBusTicketly can be extended with a range of addons that add advanced functionality. Each addon integrates seamlessly with the core plugin and can be activated independently.

## Addon Overview

### Bus Booking with Seat Reservation Pro

- Unlocks premium features: passenger management, PDF ticketing, custom checkout fields, and advanced reporting
- Enables admin-side ticket purchasing on behalf of customers
- Adds CSV export for passenger lists and sales data
- Provides custom email templates for booking confirmations
- Requires a valid Pro license key for activation

### QR Code Addon

- [QR Code Addon Documentation](/docs/addons/wpbusticketly/qr-code)
- Automatically generates a unique QR code for each booked ticket
- QR codes are embedded in PDF tickets and confirmation emails
- Passengers can present QR codes for contactless boarding
- Supports QR code scanning via mobile apps or dedicated scanners
- Customise QR code size, colour, and error correction level

## Extended Addons

### Driver Dispatch Panel

- Dedicated dashboard for drivers to view their assigned trips
- Drivers can see passenger manifests, route details, and departure times
- Mark trips as started, en route, or completed
- Report incidents or delays directly from the panel
- Role-based access with separate login for drivers

### Live GPS Tracking

- Real-time bus location tracking using GPS devices or driver mobile apps
- Display live bus positions on an interactive map for customers
- Estimated arrival time (ETA) calculation based on current location
- Historical trip playback for route analysis
- Geofence alerts when buses enter or leave designated zones

## More Addons

### Group Discount Rules

- Define tiered discounts for group bookings (e.g. 10% off for 5+ seats)
- Set percentage or fixed discounts based on group size
- Apply discounts automatically during checkout
- Exclude specific buses or dates from discount eligibility
- Combine with other promotions for complex pricing rules

### Route & Stop Manager

- Advanced route planning with intermediate stops and waypoints
- Visual route editor with drag-and-drop stop ordering
- Set different fares for different stop pairs on the same route
- Manage recurring schedules (daily, weekly, custom patterns)
- Bulk assign routes to multiple buses

## Seat Layout Designer

### Layout Features

- Visual seat map editor with drag-and-drop seat placement
- Supports 2x2, 2x1, 1x2, and 3x2 seating configurations
- Define aisles, doors, and driver cabin areas
- Save seat layout templates and reuse across multiple buses
- Import seat layouts from CSV for large fleets

### Per-Seat Customisation

- Set individual seat prices (window vs. aisle surcharges)
- Mark specific seats as disabled or restricted
- Assign seat numbers and row labels
- Configure seat dimensions for accessibility compliance
- Preview the layout as customers will see it

## Addon Compatibility

### Compatibility Matrix

- All addons require the core WpBusTicketly plugin to be installed and activated
- Pro addon is a prerequisite for PDF ticketing and custom checkout fields
- QR Code addon depends on PDF Support library and Pro addon
- GPS Tracking can operate independently of other addons
- Seat Layout Designer overrides the default seat grid when active

### Installation

- Each addon is installed like a regular WordPress plugin
- Upload the addon ZIP file via **Plugins → Add New → Upload**
- Activate the addon after installation
- Configure addon settings under **WpBusTicketly → Settings**
- Check for addon-specific documentation for detailed instructions
