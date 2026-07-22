---
title: FAQ
description: Frequently asked questions about WpRently — Booking and Rental Manager.
sidebar_position: 8
---

# FAQ

Quick answers to common questions about installing, configuring, and troubleshooting the Booking and Rental Manager for WooCommerce (WpRently).

## General Questions

### How can I translate WpRently into other languages?

- WpRently is translation-ready with a `.pot` file in the `/languages/` folder
- Use **Loco Translate** or **Poedit** to create translation files
- Custom label changes in settings are stored as site options

### Can WpRently send automated email or SMS notifications?

- Yes, email notifications are sent for booking confirmations and status changes
- SMS notifications require an additional SMS gateway integration
- Configure email templates under WpRently → Settings → Email Settings

### Does WpRently integrate with WooCommerce?

- Yes, WpRently integrates seamlessly with WooCommerce
- Uses WooCommerce checkout, cart, and payment gateways when enabled
- Also supports standalone checkout mode without WooCommerce

### Can I customize the booking form and fields?

- Yes, build custom registration forms with the drag-and-drop Booking Form builder
- Add, remove, or reorder fields for each rental item
- Field types include Text Field, Text Area, Date Field, Number, Checkbox Group, Radio Group, and Select

### Does WpRently support discount coupons or promo codes?

- Yes, when using WooCommerce checkout mode, all WooCommerce coupons are supported
- In standalone mode, discount addons like Pricing Discount Over X Days apply automatically

### Is there an option for partial payments?

- Yes, enable deposits under WpRently → Settings → Pricing
- Choose percentage-based or fixed-amount deposit
- The balance can be collected at pickup or a later date

### What payment gateways does WpRently support?

- With WooCommerce: all WooCommerce gateways (PayPal, Stripe, Square, etc.)
- Standalone mode: built-in PayPal and Stripe integration
- Additional gateways can be added via WooCommerce extensions

### How does WpRently handle security deposits?

- Enable Security Deposit for individual rental items
- Set a fixed amount or percentage as a refundable deposit
- The deposit is charged separately and refunded upon return

### Is there an option to block specific dates?

- Yes, set off-days and holidays under WpRently → Settings → Availability
- Block dates per product from the product edit screen's Availability tab
- Off-days prevent any bookings on those dates

### Does WpRently support hourly, daily, and weekly rentals?

- Yes, the Single Day mode supports hourly and daily bookings with a time picker
- Multiple Day mode supports daily, weekly, and monthly rates with automatic threshold-based pricing
- Mix different pricing modes across your rental catalogue

### Can customers book rentals for specific dates?

- Yes, customers select pickup and return dates on the product page
- Availability is checked in real-time before adding to cart
- Blocked dates and off-days are automatically excluded

### Is WpRently mobile-friendly and responsive?

- Yes, all shortcodes and templates are fully responsive
- Works seamlessly on mobile, tablet, and desktop devices

### Can I use WpRently for any type of rental business?

- Yes, WpRently supports bike, car, equipment, dress, resort, and other rental types
- Custom rental types can be added via the Rent Item Type settings

## Shortcodes & Display

### How do I display rentals in a grid?

- Use `[rent-list style='grid']` on any page or post
- Control the number of columns with `columns='4'`
- Set items per page with `show='12'`
- Full parameter reference is in the [Shortcode Guidelines](/plugins/wprently/shortcodes)

### How do I show only bike or car rentals?

- Use `[rent-list type='bike_car_sd']` for single-day bike/car rentals, or `[rent-list type='bike_car_md']` for multi-day
- Combine with other parameters: `[rent-list type='bike_car_sd' style='list' show='10']`
- Available type values: `bike_car_sd`, `bike_car_md`, `resort`, `equipment`, `dress`, `appointment`

### How do I add a search form?

- Add the `[rbfw_search]` shortcode to any page
- Place `[search-result]` on the `search-item-list` page
- Customers can search by date, type, category, and location
- The search form value works only when assigned in the rent item settings

### Why are my shortcodes not rendering?

- Ensure the shortcode is typed correctly with square brackets
- Check that the plugin is active on the Plugins screen
- Flush permalinks: go to Settings → Permalinks and click "Save Changes"
- Verify your theme's `functions.php` does not remove `the_content` filter
- Try using the shortcode in a Classic Editor block instead of a widget area

## Pricing & Checkout

### How is the rental price calculated?

- The price is based on the selected pricing model (per day, per hour, etc.)
- Customers pick pickup and return dates on the product page
- The plugin multiplies the rate by the number of days/hours
- Addons can apply multi-day discounts and seasonal pricing
- Tax is added based on your WooCommerce tax settings

### Can I require a deposit?

- Yes, enable Security Deposit under the rental item's Advanced tab
- Choose a fixed amount or percentage as a refundable deposit
- The deposit is charged separately at checkout and refunded upon return

### How do I set up seasonal pricing?

- Install the [Seasonal Pricing Management](/addons/wprently/seasonal-pricing-management) addon
- Define price rules by date range (e.g., summer: +20%, holidays: +50%)
- Rules can be applied globally or per product
- Seasonal prices override the base rate for the specified periods

### Can I offer discounts for long rentals?

- Yes, use the [Multi-Day Discount Pricing](/addons/wprently/multi-day-discount-pricing) or [Pricing Discount Over x Days](/addons/wprently/pricing-discount-over-x-days) addon
- Set tiered discounts based on the number of rental days
- Discounts are applied automatically at checkout based on the rental duration

## Availability & Bookings

### How do I block specific dates?

- Set off-days and holidays under WpRently → Settings → Availability
- Block dates per product from the product edit screen's Availability tab
- Off-days prevent any bookings on those dates
- Manually block dates for maintenance or private events

## Troubleshooting

### Plugin conflicts or errors

- Disable other plugins one by one to identify conflicts
- Switch to a default WordPress theme (Twenty Twenty-Four, Storefront) to test
- Check the WordPress debug log at `/wp-content/debug.log` (if WP_DEBUG is enabled)
- Ensure all plugin and addon versions are up to date
- Contact support with the error details and server environment info

### Missing rental menu or settings

- Verify the plugin is active and the free version is installed
- Check user capabilities — only admins with "manage_options" can see the menu
- Flush permalinks: Settings → Permalinks → Save Changes
- Re-save the plugin settings to refresh option entries in the database
- Reinstall the plugin if the menu is still missing after activation

### Bookings not appearing in calendar

- Check that the order status is "Confirmed" or "Active" — pending orders do not block dates
- Verify the product's availability calendar settings are correct
- Check for date/timezone mismatches between the site and customer selections
- Clear any caching plugins that might be serving stale calendar data

### Payment not processing

- Verify the payment gateway is configured correctly in WooCommerce settings
- Check that the currency matches between the plugin and payment gateway
- Enable debug mode in the payment gateway to see error logs
- Test with a sandbox/live key pair from your payment provider
- Ensure the site uses HTTPS for secure payment transmission

## Per-Product FAQ

### How do I add FAQs to a rental item?

- Navigate to the rental item edit screen and locate the **FAQ** tab
- Toggle FAQ Settings to **Enable**
- Add Questions and Answers using the provided fields
- Click **Add FAQ** to add more questions
- Update the rental item — FAQs are displayed on the front-end product page

## Support & Resources

### Where can I get support?

- Free version support is available via the WordPress.org plugin forum
- Pro version and addon customers get priority email support
- Submit a ticket through the [Magepeople support portal](https://support.mage-people.com/portal/en/newticket)
- Include your license key, site URL, and a detailed description of the issue
- Typical response time is within 24 hours on business days

### Where can I find video tutorials?

- Visit the Magepeople YouTube channel for walkthrough videos
- Video topics include: installation, configuration, shortcode setup, and addon usage
- Subscribe to get notified of new tutorial releases
