---
title: Developer Hooks
description: Extend the plugin functionality using available action hooks and filters for social sharing, Google Maps, event pages, tickets, cart, and more.
sidebar_position: 9
---

# Developer Hooks

## Social Share Button Action Hooks

The WooCommerce Event Manager Plugin Social Share Button Section has a couple of Action Hooks available. You can hook up your function from anywhere from your website.

- `mep_before_social_share_list` — Fires before the social share button list is rendered.
- `mep_after_social_share_list` — Fires after the social share button list is rendered.

## Google MAP Section Action Hooks

The WooCommerce Event Manager Plugin Google MAP Section has a couple of Action Hooks available.

- `mep_event_before_google_map` — Fires before the Google Map section on the event details page.
- `mep_event_after_google_map` — Fires after the Google Map section on the event details page.

## Event Page Action Hooks

Action hooks available on the single event details page to inject custom content around key sections.

- `mpwem_title` — Fires in the event title section.
- `mpwem_organizer` — Fires in the event organizer section.
- `mpwem_location` — Fires in the event location section.
- `mpwem_time` — Fires in the event date/time section.
- `mpwem_description` — Fires in the event description section.
- `mpwem_custom_slider` — Fires in the event custom slider/gallery section.
- `mpwem_timeline` — Fires in the event timeline section.
- `mpwem_social` — Fires in the social share section.
- `mpwem_map` — Fires in the Google Map section.
- `mpwem_speaker` — Fires in the event speaker section.
- `mpwem_related` — Fires in the related events section.
- `mpwem_faq` — Fires in the event FAQ section.
- `mpwem_registration` — Fires in the event registration section.

## Ticket & Cart Action Hooks

Action hooks available in the ticket selection area and WooCommerce cart/checkout flow.

- `mpwem_before_ticket_type` — Fires before the ticket type list in the admin settings.
- `mep_ticket_type_loop_list_row_start` — Fires at the start of each ticket type row in the booking form.
- `mpwem_hidden_item_ticket` — Fires inside each ticket item for hidden input fields.
- `mepgq_max_qty_hook` — Fires for max quantity group checks.
- `mpwem_multi_attendee` — Fires for multi-attendee registration fields.
- `mpwem_single_attendee` — Fires for single attendee registration fields.
- `mep_add_term_condition` — Fires for the terms and conditions checkbox.
- `mep_after_ticket_types` — Fires after all ticket types are displayed.
- `mep_event_cart_data_reg` — Fires when cart item data is registered.
- `mep_cart_after_ticket_type` — Fires after a ticket type in the cart display.
- `mep_after_cart_item_display_list` — Fires after the cart item display list.
- `mep_event_cart_order_data_add` — Fires when order data is added for an event ticket.
- `mep_after_event_booking` — Fires after an event booking is completed.
- `mep_wc_order_status_change` — Fires when WooCommerce order status changes for an event order.

## Event List & Calendar Action Hooks

Action hooks available in event list shortcodes and the calendar view.

- `mep_event_list_shortcode` — Fires inside the event list shortcode loop for each event.
- `mep_event_list_loop_header` — Fires at the start of the event list loop.
- `mep_event_list_loop_footer` — Fires at the end of each event item in the list loop.
- `mep_event_list_loop_end` — Fires after the event list loop ends.
- `mep_event_everyday_date_list_display` — Fires when displaying everyday date lists for events.
- `mep_single_before_event_date_list_item` — Fires before each event date list item on the single event page.
- `mep_single_after_event_date_list_item` — Fires after each event date list item on the single event page.
- `mpwem_list_ribbon` — Fires in the ribbon area of event list items.
- `mpwem_list_thumb` — Fires in the thumbnail area of event list items.
- `mpwem_list_location` — Fires in the location area of event list items.
- `mpwem_list_organizer` — Fires in the organizer area of event list items.
- `mpwem_list_price` — Fires in the price area of event list items.
- `mep_before_add_calendar_button` — Fires before the Add to Calendar button.
- `mep_after_add_calendar_button` — Fires after the Add to Calendar button.
- `mep_calendar_before_render` — Fires before the calendar is rendered.
- `mep_calendar_after_render` — Fires after the calendar is rendered.

## Admin & Settings Action Hooks

Action hooks available in the WordPress admin area for event settings and management.

- `mp_event_all_in_tab_menu` — Fires in the event edit page tab menu area.
- `mpwem_event_tab_setting_item` — Fires for each event tab setting item.
- `mep_event_tab_before_ticket_pricing` — Fires before the ticket pricing tab in event settings.
- `mep_event_tab_before_location` — Fires before the location tab in event settings.
- `mep_event_tab_after_location` — Fires after the location tab in event settings.
- `mpwem_settings_save` — Fires when event settings are saved.
- `mpwem_after_event_edit_save` — Fires after the event edit page save action.
- `add_mpwem_common_script` — Fires to enqueue common admin scripts.
- `add_mpwem_admin_script` — Fires to enqueue admin-specific scripts.

## Filter Hook Reference

Available filter hooks to modify data throughout the plugin.

- `mep_ticket_type_price` — Modify the ticket price before display. Passes price, ticket name, event ID, and ticket type.
- `mep_event_confirmation_text` — Modify the confirmation email body text.
- `mep_should_send_confirmation_email` — Determine whether to send the confirmation email.
- `mep_event_cart_item_data` — Modify cart item data before adding to cart.
- `mep_cart_date_format` — Modify the date format used in cart display.
- `mage_event_location_in_list_view` — Modify the location display in event list views.
- `mage_event_location_in_ticket` — Modify the location display in the ticket area.
- `mage_event_single_tags` — Modify the tags display on the single event page.
- `mep_event_datetime_status` — Modify whether the end date/time is displayed for events.
- `mep_event_upcoming_date` — Modify the upcoming date display for recurring events.
- `mep_event_total_seat_counts` — Modify the total seat count for an event.
- `mep_event_total_resv_seat_count` — Modify the reserved seat count for an event.
- `mpwem_ticket_permission` — Modify ticket purchase permission for a specific ticket type.
- `mpwem_early_date` — Modify early bird date availability for a ticket type.
- `mep_events_post_type_support` — Modify the post type support features for events.
- `mep_events_post_type_show_in_rest` — Modify whether events are exposed via the REST API.
- `mep_fb_app_id` — Modify the Facebook app ID used in meta tags.
