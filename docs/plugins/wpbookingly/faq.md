---
title: FAQ
description: Frequently asked questions about WpBookingly.
sidebar_position: 7
---

# Frequently Asked Questions

## Installation & Setup

### Do I need WooCommerce to use WpBookingly?

- Yes, WooCommerce is required as a dependency for payment processing
- Even free bookings use WooCommerce for order management
- Install and activate WooCommerce before WpBookingly
- Any WooCommerce-compatible theme works

### How do I display the booking form on a page?

- Use the shortcode `[wpbookingly_booking]` on any page or post
- Create a dedicated booking page in WordPress
- Use the Gutenberg shortcode block or classic editor
- Set the booking page URL in WpBookingly settings

### Can I install the Pro version alongside the free version?

- No, deactivate and delete the free version first
- The Pro version includes all free features and more
- Your existing services and bookings are preserved
- Upload the Pro zip via Plugins > Add New > Upload

### What are the minimum server requirements?

- PHP 7.4 or higher (PHP 8.0+ recommended)
- WordPress 5.8 or later
- MySQL 5.6+ or MariaDB 10.1+
- cURL and JSON PHP extensions enabled

## Services & Booking

### How do I create a new service?

- Go to Service Booking > Add New Service Booking
- Enter a title, description, price, and duration
- Assign the service to a category for organization
- Publish when ready for customers to book

### Can I offer free consultations?

- Yes, set the service price to $0 for free consultations
- Free bookings skip the WooCommerce payment step
- Customers still receive confirmation emails
- Track free and paid bookings separately

### How do I handle cancellations or rescheduling?

- Admins can cancel or reschedule from the booking edit screen
- Customers can self-service from My Account or email links
- Configure your cancellation and rescheduling policy in settings
- Refund payments through WooCommerce if needed

### How do I enable recurring bookings?

- Requires the Recurring Appointment Builder addon
- Set a service as recurring in the service editor
- Choose frequency: daily, weekly, bi-weekly, or monthly
- Customers select the recurrence pattern during booking

## Staff & Scheduling

### How do I add staff members?

- Navigate to WpBookingly > Staff in the admin menu
- Click Add Staff and enter name, email, and photo
- Assign staff to relevant services
- Staff appear on the booking form for customer selection

### Can I integrate with Google Calendar?

- Yes, uses the Staff and Resource Scheduler addon
- Connect via OAuth 2.0 for two-way sync
- New bookings create calendar events automatically
- Cancellations and reschedules stay in sync

### How do I set staff working hours?

- Go to WpBookingly > Schedule > Staff Schedule
- Select a staff member and configure weekly hours
- Add breaks, split shifts, and off days
- Override specific dates for holidays

### Can I import staff via CSV?

- Yes, use the CSV import feature in WpBookingly > Staff
- Prepare columns for name, email, photo, and service IDs
- Map CSV columns during the import process
- Review imported data before finalizing

## Shortcodes & Display

### What shortcode displays the main booking form?

- `[wpbookingly_booking]` renders the complete booking flow
- Shows service selection, date picker, and checkout
- Place on a dedicated page for best results
- Supports layout and styling parameters

### How do I show only specific services?

- Use `[wpbookingly_services category="your-category"]`
- Filter by service IDs with the service_id parameter
- Combine with staff_id for filtered availability views
- Set column count and display options

### Can I embed the booking form in a sidebar?

- Yes, use a WordPress text widget with the shortcode
- Elementor users can use the Shortcode widget
- Gutenberg block editor has a shortcode block
- Test mobile responsiveness after embedding

### How do I customize shortcode appearance?

- Use parameters like layout, columns, and show_progress
- Override colors and typography via custom CSS
- Use the form style settings in WpBookingly options
- Add custom CSS classes via shortcode parameters

## Payments & Orders

### Which payment gateways are supported?

- All WooCommerce-compatible payment gateways are supported
- PayPal, Stripe, bank transfer, and cash on delivery
- Configure gateways in WooCommerce > Settings > Payments
- Stripe supports Apple Pay and Google Pay

### How do I set up deposit payments?

- Configure deposit options per service in the service editor
- Set a fixed amount or percentage-based deposit
- Remaining balance is due on a configured date
- Automatic payment reminders are sent to customers

### How do I process a refund?

- Go to WooCommerce > Orders and find the booking order
- Click Refund and enter the refund amount
- The booking status automatically updates
- Customers receive a refund confirmation email

### Can I accept payments in multiple currencies?

- Yes, with WooCommerce multi-currency extensions
- Configure currencies in WooCommerce settings
- Prices convert based on exchange rates
- Customers select their preferred currency

## Troubleshooting

### The booking form is not showing up

- Verify the shortcode is correctly typed on the page
- Check that WpBookingly is activated
- Ensure WooCommerce is installed and active
- Clear any page caching plugins for the booking page

### Customers are not receiving email notifications

- Check your WordPress email settings and SMTP configuration
- Use an SMTP plugin (WP Mail SMTP, Post SMTP) for reliable delivery
- Verify email templates in WpBookingly > Email Settings
- Check spam folders for test emails

### Time slots are not showing up

- Verify working hours are configured for the selected day
- Check if the staff member is available
- Ensure the booking cutoff time has not passed
- Confirm slots are not fully booked

### Plugin update causes errors

- Always back up your site before updating
- Update addons at the same time as the core plugin
- Clear WordPress and browser caches after updating
- Contact MagePeople support if issues persist
