---
title: FAQ
description: Frequently asked questions about WpTravelly.
sidebar_position: 7
---

# Frequently Asked Questions

Quick answers to the most common questions about installing, configuring, and troubleshooting the WpTravelly tour booking plugin.

## Installation & Requirements

### Do I need WooCommerce to use WpTravelly?

- Yes, WpTravelly requires WooCommerce to handle payments, checkout, and order management
- Install and activate WooCommerce before or after installing WpTravelly
- Any standard payment gateway supported by WooCommerce works

### Can I use WpTravelly without Elementor?

- Absolutely. WpTravelly works with any WordPress theme
- Use shortcodes to place tours anywhere on your site
- Elementor integration is optional for visual page building

## Shortcode & Display

### How do I show tours on a page?

- Use `[wptravelly-tour-list column=3]` anywhere in your content
- Choose from different styles: list, grid, modern, blossom, orchid, lotus, or flora
- Use `type='trending'` or `type='popular'` for curated lists
- Combine with `[wptravelly-tour-search]` for search functionality

### How do I filter tours by category?

- Add `category='your-category-slug'` to any tour shortcode
- Example: `[wptravelly-tour-list column=3 category='adventure']`
- Use `[wptravelly-category-list]` to display clickable categories
- Apply filters via the top filter shortcode: `[wptravelly-tour-list-filter]`

### Why are my tours not displaying?

- Check that you have created at least one tour under WpTravelly
- Verify the shortcode is typed correctly with square brackets
- Ensure WooCommerce is active and compatible with your theme
- Check for JavaScript errors in the browser console
- Switch to a default theme (Twenty Twenty-Four) to rule out conflicts

### Can I show tours on the homepage?

- Yes, paste any shortcode into the homepage content editor
- Or use a widget area with a Text/Shortcode widget
- Elementor users can add the Shortcode widget to any section
- Use `[wptravelly-top-attraction column=3]` for a featured section

## Pricing & Bookings

### Can I offer deposit payments?

- Yes, enable deposit/partial payment under WpTravelly → Settings
- Set a fixed amount or percentage of the total price
- Customers pay the remainder on or before the tour date
- Combine with WooCommerce payment gateways for processing

### How do I handle cancellations?

- Configure cancellation rules under WpTravelly → Settings → Booking Rules
- Set refund percentages based on days before departure
- Enable automatic refunds via WooCommerce or process manually
- Customise cancellation email templates for customer notification

### Can I manage group bookings?

- Yes, set minimum and maximum capacity per tour or time slot
- Offer group discounts based on number of travellers
- Enable waitlisting when tours reach capacity
- View all bookings under WooCommerce → Orders

### How are taxes handled?

- WooCommerce tax settings apply to all tour bookings
- Configure tax rates under WooCommerce → Settings → Tax
- Tax can be inclusive or exclusive of the tour price
- Tour prices display with tax based on your WooCommerce setup

## Troubleshooting & Support

### The plugin isn't working after update

- Clear all caches (WordPress, browser, server, CDN)
- Deactivate and reactivate WpTravelly
- Ensure your license key is still valid and re-entered
- Check the PHP version meets the minimum requirement
- [Contact MagePeople support](https://support.mage-people.com/portal/en/newticket) with your system status report

### Tour page layout is broken

- Temporarily switch to a default WordPress theme
- Deactivate all plugins except WooCommerce and WpTravelly
- Reactivate plugins one-by-one to identify the conflict
- Check for template overrides that may be outdated
- Verify your theme's CSS isn't overriding plugin styles

### How do I get support?

- Free users: post on the WordPress.org plugin support forum
- Pro users: [open a ticket via your MagePeople account dashboard](https://support.mage-people.com/portal/en/newticket)
- Include your WordPress system status and plugin version
- Check the MagePeople documentation site for guides first

### Can I translate WpTravelly?

- Yes, the plugin is fully translation-ready
- Use Loco Translate plugin or PO/MO file editing
- Language files are in `/wp-content/plugins/wptravelly/languages/`
- Submit custom translations to the WordPress translation platform
