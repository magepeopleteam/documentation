---
title: FAQ
description: Frequently asked questions about the WpBusTicketly bus booking plugin.
sidebar_position: 6
---

# Frequently Asked Questions

## Installation & Requirements

### How do I install the Bus Ticket Booking plugin?

- Install via **Plugins → Add New** by searching "Bus Ticket Booking with Seat Reservation"
- Alternatively, download the ZIP from MagePeople and upload via **Plugins → Add New → Upload**
- For the Pro version, upload the `wpbusticketly-pro.zip` file and activate your license key
- Ensure WooCommerce is installed and activated alongside the bus plugin

### What plugins are required for the Pro version?

- **WooCommerce** — required for payment processing and order management
- **MagePeople PDF Support** — required for PDF ticket generation
- Both are free and available from the WordPress plugin repository
- The Pro version itself also requires the core free plugin as a base

## Search & Booking Issues

### Why is my search form not working?

- Verify the `[wbtm-bus-search-form]` and `[wbtm-bus-search]` shortcodes are on the correct pages
- Go to **Settings → Permalinks** and click **Save Changes** to flush rewrite rules
- Check that the search form action URL points to the page containing the results shortcode
- Disable any caching plugin temporarily to rule out stale page output
- Ensure at least one bus is published with an active route and available seats

### Why don't search results appear on the page?

- Confirm the page slug is correct (recommended: `/bus-search-list/`)
- Re-save permalink settings under **Settings → Permalinks**
- Ensure the `[wbtm-bus-search]` shortcode is on the same page as the form
- Check that the selected origin and destination have buses assigned
- Verify the travel date is within the bus's available schedule range

## Pricing & Checkout Problems

### How do I fix pricing issues on the cart page in Divi?

- This is a known compatibility issue with the Divi theme and WooCommerce
- Switch to the default WordPress theme temporarily to confirm the cause
- Add custom CSS to fix alignment or add a Divi compatibility plugin
- Ensure WooCommerce template overrides in Divi are up to date
- Contact Divi support if the issue persists after troubleshooting

### Why are taxes not showing on the ticket price?

- Verify tax settings in **WpBusTicketly → Settings → Tax**
- Check WooCommerce tax options under **WooCommerce → Settings → Tax**
- Ensure the tax rate is enabled and assigned to the correct location
- Set whether tax is inclusive or exclusive of the ticket price
- Clear any caching plugins that may be storing stale pricing data

## Passenger & Data Questions

### Why is my passenger list showing empty?

- Check that bookings exist for the selected bus and date filters
- Ensure the booking status is "Confirmed" and not "Pending" or "Cancelled"
- Refresh the passenger list page to load the latest data
- Verify that passengers completed the checkout process successfully
- Check WooCommerce orders to confirm the booking was placed

### How do I export passenger data?

- The export feature is available in the Pro version only
- Go to **WpBusTicketly → Bookings** and apply the desired filters
- Click the **Export CSV** button to download the filtered data
- The CSV includes passenger names, contact details, seats, and fares
- Use the exported data for reporting, analysis, or external systems

## Technical & Maintenance

### How do I re-save permalinks to fix 404 errors?

- Go to **Settings → Permalinks** in the WordPress admin
- Scroll to the bottom and click **Save Changes** (no need to change settings)
- This flushes the WordPress rewrite rules and resolves most 404 issues
- Repeat this step after installing or updating the plugin
- If using a caching plugin, clear the cache after re-saving permalinks

### How do I update the plugin without losing data?

- Always backup your database and files before updating
- Use the WordPress admin update notification for seamless updates
- For manual updates, deactivate the plugin, replace the files, then reactivate
- The Pro version requires an active license for automatic updates
- Review the changelog before updating to check for breaking changes

## Translation & Customisation

### How do I translate the plugin into my language?

- Use the **Loco Translate** plugin to manage translation files directly from the admin
- Translation files are in `/wp-content/plugins/wpbusticketly/languages/`
- Create a new translation for your locale (e.g. `de_DE` for German)
- Translate each string shown in the plugin interface
- Save the `.po` file and Loco Translate will compile the `.mo` file automatically

### Can I change the word "Bus" to "Coach"?

- Yes, go to **WpBusTicketly → Settings → Labels**
- Find the "Bus" label field and replace it with your preferred term
- You can also rename "Seat", "Boarding Point", and "Dropping Point"
- All changes take effect immediately on the front-end
- This does not affect WordPress admin labels or other plugins
