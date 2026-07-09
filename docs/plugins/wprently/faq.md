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

- Yes, create custom registration forms under the Registration Form settings
- Add, remove, or reorder fields for each rental item
- Field types include text, dropdown, checkbox, date, and file upload

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

- Yes, configure the pricing model per product: Per Day, Per Hour, Per Day + Per Hour, or Flat Rate
- Mix different pricing models across your rental catalogue

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
- Full parameter reference is in the [Shortcode Guidelines](/docs/plugins/wprently/shortcodes)

### How do I show only car rentals?

- Use `[rent-list type='car']` to display only car rental items
- Combine with other parameters: `[rent-list type='car' style='list' show='10']`
- Available type values: `bike`, `car`, `resort`, `equipment`, `dress`, `others`

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
- Addons can apply discounts, seasonal pricing, and late fees
- Tax is added based on your WooCommerce tax settings

### Can I require a deposit?

- Yes, enable deposits under WpRently → Settings → Pricing
- Choose percentage-based or fixed-amount deposit
- The deposit is charged at checkout; the balance can be collected on pickup
- For refundable damage deposits, install the Damage Deposit Handler addon

### How do I set up seasonal pricing?

- Install the Seasonal Pricing addon (included in the Pro bundle)
- Define price rules by date range (e.g., summer: +20%, holidays: +50%)
- Rules can be applied globally or per product
- Seasonal prices override the base rate for the specified periods

### Can I offer discounts for long rentals?

- Yes, use the "Discount Over X Days" feature (available in Pro)
- Set tiered discounts: 3–5 days = 10% off, 6–10 days = 20% off, etc.
- Discounts are applied automatically at checkout based on the rental duration
- Compatible with all pricing models and seasonal pricing

## Availability & Bookings

### How do I block specific dates?

- Set off-days and holidays under WpRently → Settings → Availability
- Block dates per product from the product edit screen's Availability tab
- Off-days prevent any bookings on those dates
- Manually block dates for maintenance or private events

### Can I sync with Google Calendar?

- Yes, install the Availability Calendar Sync addon
- Connect your Google or Outlook calendar from the addon settings
- Bookings are mirrored in both directions in near-real-time
- Prevents double-bookings when you also list on external platforms

### What happens if an item is returned late?

- With the Late Return Fees addon, a penalty is calculated automatically
- Configure hourly or daily late fees with a grace period
- Customers receive email reminders before and after the return time
- Late fees are added to the order total or invoiced separately

### How do I manage delivery zones?

- Install the Delivery Zone Mapper addon
- Draw delivery zones on a Google Map from the addon settings
- Set per-zone pricing (flat rate or per km)
- Customers see delivery fees calculated at checkout based on their address

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
- If using the Calendar Sync addon, check the sync log for errors
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
- Each addon documentation page also links to relevant video guides
