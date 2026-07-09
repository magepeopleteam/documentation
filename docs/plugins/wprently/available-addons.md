---
title: Available Addons
description: Extend WpRently with premium addons for deposits, calendar sync, delivery, late fees, and more.
sidebar_position: 5
---

# Available Addons

Extend the WpRently plugin with premium addons that add specialized features for deposit handling, calendar sync, delivery zones, late fees, and rental insurance.

## Addon Overview

Each addon is a separate installable plugin that integrates seamlessly into the WpRently ecosystem. Addons are available for download from your Magepeople account after purchasing a Pro or addon license.

### Damage Deposit Handler

- Collect refundable damage deposits at checkout
- Full or partial release of deposits after item inspection
- Configure deposit amount per product or globally
- Automated release workflow with admin approval
- Dispute management with evidence collection

### Availability Calendar Sync

- Two-way sync with Google Calendar and Outlook
- Blocked dates stay synchronized across all platforms
- Prevent double-bookings from external channels
- Configurable sync interval (15, 30, or 60 minutes)
- iCal export for third-party calendar apps

### Delivery Zone Mapper

- Draw interactive delivery zones on Google Maps
- Charge distance-based delivery fees automatically
- Set per-zone pricing and free-delivery thresholds
- Customers see real-time delivery cost at checkout
- Supports multiple zones with overlapping rules

### Late Return Fees

- Automatically calculate late fees when items are returned past the scheduled time
- Configure hourly or daily penalty rates
- Grace period before fees apply
- Fee cap to prevent unlimited charges
- Automated email reminders before and after return due date

### Rental Insurance

- Offer optional protection plans at checkout
- Renters can waive part of their deposit liability by purchasing insurance
- Multiple insurance tiers (basic, premium, full coverage)
- Set pricing per rental day or flat per-booking fee
- Claims management dashboard for admin

### Discount Over X Days (PRO)

- Tiered discounts based on the number of rental days
- Example: 10% off for 3–5 days, 20% off for 6+ days
- Compatible with all pricing models
- Percentage or fixed discount amounts
- Included in the Pro version bundle

## Addon Installation

### Installing an Addon

- Download the addon zip file from your Magepeople account
- Go to Plugins → Add New → Upload Plugin
- Choose the addon zip file and click Install Now
- Activate the addon after installation completes
- A new settings section appears under WpRently → Settings or the addon's own menu

### License Management

- Each addon requires a valid license key for updates and support
- Enter the license key under WpRently → License for the addon
- Licenses can be activated on up to 2 domains (dev + production)
- Deactivate a license before transferring it to another domain
- Expired licenses stop receiving updates but continue to function

## Addon Dependencies

### Compatibility Matrix

- All addons require the free WpRently plugin (v2.0+) as a base
- Some addons require the Pro version for full functionality
- Addons are compatible with each other and can be used simultaneously
- Damage Deposit Handler and Rental Insurance work together for deposit + protection workflows
- Delivery Zone Mapper requires Google Maps API key configuration

### Update Procedure

- Addon updates appear on the Plugins screen when a license is active
- Always update the base WpRently plugin before updating addons
- Test addon updates on a staging site before applying to production
- Changelogs are available in each addon's documentation page
- Rollback to a previous version if needed via a plugin version management tool

## Need More Features?

If you require a custom addon or integration, contact the Magepeople team to discuss bespoke development options. The plugin framework supports custom addon development via documented hooks and filters.
