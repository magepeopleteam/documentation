---
title: FAQ
description: Frequently asked questions about the Car Rental Manager plugin.
sidebar_position: 6
---

# Frequently Asked Questions

## Installation & Getting Started

### How do I install the Car Rental Manager plugin?

Install via WordPress admin by going to Plugins > Add New and searching for "Car Rental Manager". Alternatively, upload the Pro ZIP from your MagePeople account. See the [Installation & Setup](/plugins/car-rental/installation-setup) page for detailed steps.

### Does the plugin work without WooCommerce?

Yes. Car Rental Manager works in standalone mode with its own PayPal or Stripe integration. WooCommerce is optional but recommended if you already use it for other products.

### How do I display the booking form on a page?

Use the shortcode `[mpcrbm_booking form='inline' progressbar='no']` on any page or post. You can choose from inline, horizontal, or vertical form layouts. Refer to the [Shortcode Guidelines](/plugins/car-rental/shortcodes) for all available parameters.

### How do I add vehicles to my fleet?

Go to Car Rental > Vehicles > Add New. Fill in the name, description, images, category, features, and pricing. Publish to make the vehicle visible on the front end. See [Vehicle Management](/plugins/car-rental/vehicle-management) for full details.

## Pricing & Payments

### Can I set different prices for different seasons?

Yes. Use the Seasonal Pricing feature under Car Rental > Pricing > Seasonal Rates. Define date ranges with custom prices that override regular rates automatically. Learn more on the [Pricing & Availability](/plugins/car-rental/pricing-availability) page.

### How do I offer discounts for long-term rentals?

Configure the "Discount over X days" setting in Pricing settings. Specify the minimum number of days and the discount percentage. The discount is applied automatically at checkout.

### What payment gateways are supported?

With WooCommerce, all major gateways are supported (Stripe, PayPal, Square, BACS, etc.). In standalone mode, PayPal and Stripe are built in. Bank transfer and cash on pickup are also available as offline options.

### Can I collect a security deposit?

Yes. You can set a security deposit amount per vehicle from the vehicle edit screen. The deposit is added to the booking total and can be marked as refunded from the booking detail page.

## Availability & Calendars

### How do I prevent double bookings?

The plugin performs real-time availability checks. When a vehicle is booked for a date range, it is automatically blocked for overlapping requests. You can also manually block dates from the vehicle's availability calendar.

### How do I set my business closure days?

Go to Car Rental > Settings > Availability and add off days (e.g., public holidays). These apply globally. Per-vehicle off days can be set from each vehicle's calendar tab for maintenance scheduling.

## Customisation & Translation

### Can I change the plugin label from "Car Rental" to something else?

Yes. Go to Car Rental > Settings > General and change the "Label" field. The URL slug can also be customised. Changes are reflected immediately on the front end.

### How do I translate the plugin into another language?

Use Loco Translate (free plugin) to translate all strings from the WordPress admin. The plugin also supports WPML and Polylang for full multi-language site setups. Language files are in the `/languages/` directory.

## Management & Support

### How do I manage customer bookings?

All bookings are listed under Car Rental > Bookings. You can filter by status, search by customer or vehicle, edit booking details, update status, process refunds, and send manual emails from this interface.

### How do I enable SMS notifications?

SMS notifications require the Twilio add-on (available in the Pro version). After installing and configuring the add-on with your Twilio credentials, enable SMS alerts in the Email/SMS notification settings.

### Can customers cancel their booking?

Cancellation options depend on your settings. You can allow or disallow customer cancellations, set a cancellation cutoff period, and define refund tiers (full refund, partial, or non-refundable) based on how far in advance the cancellation occurs.

### Where can I get support if I have issues?

Free version support is available on the WordPress.org plugin forum. Pro version customers receive priority support via the [MagePeople ticket system](https://support.mage-people.com/portal/en/newticket).
