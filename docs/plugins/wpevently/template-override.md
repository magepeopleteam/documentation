---
title: Template Override
description: Override default plugin templates in your theme to customize the look and feel of event pages, ticket designs, and social sharing.
sidebar_position: 6
---

# Template Override

## Override Event Templates

You can customize the default design or content of event templates by overriding them in your theme. This ensures your changes are preserved through plugin updates.

<video src="/video/plugins/wpevently/template.webm" controls width="100%" class="doc-video"></video>

### Steps to Override Templates

1. Create a folder named `mage-events` in your theme folder.
2. Inside it, create a subfolder named `single`.
3. Copy the template file from `plugins/mage-eventpress/templates` (e.g. `location_list.php`).
4. Paste it into `theme-folder/mage-events/single/`.
5. Edit the file to make your changes. The plugin will load your version instead of the default.

## Create Custom Theme/Template

The plugin is fully developer-friendly. You can create custom themes similar to WooCommerce templating.

### Steps to Create a New Theme

1. Copy `mage-eventpress/templates/` folder to your theme and rename it to `mage-events`.
2. Create a new PHP file in `theme-folder/mage-events/themes/` (e.g. `dhaka.php`).
3. Add a template name at the top: `<?php // Template Name: Dhaka`
4. Your theme will now appear in the event page template list.

### Available Hooks for Custom Themes

WooCommerce Event Manager plugin comes with a bunch of hooks which you can use anywhere to display values:

- `mep_event_title` — Display the event title.
- `mep_event_thumbnail` — Display the event featured image.
- `mep_event_date` — Display event date with time.
- `mep_event_date_only` — Display event date only.
- `mep_event_time_only` — Display event time only.
- `mep_event_details` — Display event details.
- `mep_add_to_cart` — Display the event cart section with ticket type, extra service, and cart button.
- `mep_event_faq` — Display event frequently asked questions.
- `mep_event_map` — Generate the Google Map with event location.
- `mep_event_price` — Print the event price.
- `mep_event_seat` — Display event total seat and available seats.
- `mep_event_organizer` — Print the event organizer name.
- `mep_event_location` — Display event location as address.
- `mep_event_location_venue` — Display the event venue name.
- `mep_event_location_street` — Display event address street only.
- `mep_event_location_state` — Display event address state only.
- `mep_event_location_city` — Display event address city only.
- `mep_event_location_country` — Display event address country only.
- `mep_event_social_share` — Display social share buttons.
- `mep_event_add_calendar` — Display Add to Calendar button.

## Create Custom PDF Ticket Design

Design your own PDF ticket template for registered attendees.

### Steps to Create PDF Theme

1. Copy `woocommerce-event-manager-pdf-ticket/templates/pdf-theme` from the PDF Addon plugin.
2. Paste it into your theme folder and rename to `mage-events-pdf-themes`.
3. Create a new PHP file with a template name: `<?php // Template Name: Your Theme`
4. Design your ticket HTML. Note: some CSS attributes have limitations for PDF generation.

### Available PDF Hooks

- `mep_pdf_logo` — Show PDF logo set in PDF settings page.
- `mep_pdf_company_address` — Show company address.
- `mep_pdf_company_phone` — Show company phone number.
- `mep_pdf_event_name` — Show registered event name.
- `mep_pdf_org_name` — Show event organizer name.
- `mep_pdf_start_date` — Show event start date.
- `mep_pdf_start_time` — Show event start time.
- `mep_pdf_attendee_info` — Show attendee info given during registration.
- `mep_pdf_event_location` — Show event location.
- `mep_qr_code` — Display QR code. Pass the permalink as argument: `do_action('mep_qr_code', get_the_permalink())`.
- `mep_pdf_event_order_id` — Show order ID.
- `mep_pdf_event_ticket_no` — Show ticket number.
- `mep_pdf_event_ticket_price` — Show ticket price.
- `mep_pdf_event_ticket_type` — Show ticket type.
- `mep_pdf_event_ticket_term_title` — Show terms text title.
- `mep_pdf_event_ticket_term_text` — Show terms text.

## Override Social Share Icons

Customize or add new social share icons to the share button template.

### Steps to Override Share Icons

1. Create a folder named `mage-events` in your theme folder.
2. Inside it, create a subfolder named `single`.
3. Copy `share_btn.php` from `plugins/mage-eventpress/templates`.
4. Paste it into `theme-folder/mage-events/single/`.
5. Edit the file to add or change share buttons as needed.

## Override Category/Organizer Pages

Customize the category or organizer list page templates.

### Steps to Override

1. Create a folder named `mage-events` in your theme folder.
2. Copy `taxonomy-category.php` or `taxonomy-organizer.php` from `wp-content/plugins/mage-eventpress/templates`.
3. Paste it into `theme-folder/mage-events/`.
4. Edit the template file to change the layout or styling.

### Example: Change Grid to List

Change line 17 in `taxonomy-category.php`:

From:
```php
do_action('mep_event_list_shortcode', get_the_id(), 'three_column', 'grid');
```

To:
```php
do_action('mep_event_list_shortcode', get_the_id(), 'one_column', 'list');
```
