---
title: Developer Hooks
description: Extend WpRently using available action hooks and filters to customise output and behaviour.
sidebar_position: 8
---

# Developer Hooks

WpRently provides a wide range of hooks and filters that let you customise output and extend functionality without modifying core plugin files.

## Single Product Page Hooks

Action hooks that fire on the front-end single rental page template.

- `rbfw_single_page_before_wrapper` — Fires before the product page wrapper begins.
- `rbfw_single_page_after_wrapper` — Fires after the product page wrapper ends.
- `rbfw_single_page_footer` — Fires at the bottom of the single page. Passes `$post_id`.
- `rbfw_slider` — Renders the image gallery/slider. Passes `$post_id, 'rbfw_gallery_images'`.
- `rbfw_product_meta` — Displays product meta info and share buttons. Passes `$post_id`.
- `rbfw_tab_menu_list` — Renders the tab menu navigation (Description, Features, FAQ). Passes `$post_id`.
- `rbfw_product_feature_lists` — Displays the product feature/highlighted features list. Passes `$post_id`.
- `rbfw_the_faq_only` — Renders the FAQ accordion section. Passes `$post_id`.
- `rbfw_tab_content` — Renders tab content panels. Passes `$post_id`.
- `rbfw_related_products` — Displays related rental products grid. Passes `$post_id`.
- `booking_form_header` — Fires before the booking form is rendered. Passes `$post_id`.

## Booking Form Hooks

Action hooks that fire within the front-end booking and registration forms.

- `rbfw_discount_ad` — Renders discount advertisement inside the booking form. Passes `$rbfw_id`.
- `rbfw_pricing_info_header` — Renders pricing information header above the pricing table.
- `rbfw_ticket_feature_info` — Displays ticket feature information in the booking form.
- `rbfw_add_term_condition` — Renders terms and conditions section in the booking form. Passes `$rbfw_id`.

## Cart Hooks

Action and filter hooks for WooCommerce cart display and pricing.

- `rbfw_before_cart_item_display` — Fires before an RBFW cart item is rendered. Passes `$cart_item, $rbfw_id`.
- `rbfw_after_cart_item_display` — Fires after an RBFW cart item table is rendered. Passes `$cart_item`.
- `rbfw_set_cart_item_price` — Sets the cart item price (regular, sale, base). Passes `$value, $rbfw_id`.
- `rbfw_validate_cart_item` — Fires during checkout validation for each cart item. Passes `$values, $rbfw_id`.
- `rbfw_cart_base_price` — Filters the calculated sub-total price before cart. Passes `$sub_total_price`.
- `rbfw_add_cart_function_after` — Filters cart item data after the RBFW cart item is assembled. Passes `$cart_item_data, $rbfw_id`.

## Checkout and Order Hooks

Action and filter hooks for the checkout-to-order lifecycle.

- `woocommerce_before_calculate_totals` — Sets RBFW cart item prices before WooCommerce calculates totals.
- `woocommerce_add_to_cart_validation` — Prevents duplicate RBFW cart items.
- `woocommerce_get_item_data` — Shows custom RBFW data in the cart/checkout item display.
- `woocommerce_after_checkout_validation` — Validates RBFW cart items before order creation.
- `woocommerce_checkout_create_order_line_item` — Saves RBFW meta data to order line items.
- `woocommerce_before_thankyou` — Triggers RBFW booking management on the thank-you page.
- `woocommerce_add_to_cart_redirect` — Redirects to checkout or cart after adding to cart.
- `wc_add_to_cart_message_html` — Removes or modifies the add-to-cart success message.

## Order Status Hooks

Action hooks for order status changes and inventory management.

- `rbfw_wc_order_status_change` — Fires when a WooCommerce order status changes. Passes `$order_status, $rbfw_id, $order_id`.
- `rbfw_restore_inventory_on_cancel` — Fires when inventory needs to be restored after order cancellation. Passes `$rbfw_id, $start_date, $end_date, $item_quantity`.

## Thank-You Page Hooks

Action hooks on the custom thank-you page.

- `rbfw_before_thankyou_page_info` — Fires before the order info table on the thank-you page. Passes `$order_id`.
- `rbfw_after_thankyou_page_info` — Fires after the order info table on the thank-you page. Passes `$order_id`.

## Email Hooks

Filter hooks for modifying email content.

- `rbfw_send_email_content_text` — Filters the confirmation email body text. Passes `$email_body, $rbfw_id, $order_id`.

## Admin Menu Hooks

Action hooks in the WordPress admin area for extending menus.

- `rbfw_admin_menu_after_inventory` — Fires after the Inventory submenu is added.
- `rbfw_admin_menu_after_settings` — Fires after the Settings submenu is added.

## Admin Metabox Hooks

Action hooks for the RBFW edit metabox tabs.

- `rbfw_meta_box_tab_name` — Renders tab menu items in the RBFW edit metabox.
- `rbfw_meta_box_tab_content` — Renders tab content panels in the RBFW edit metabox.

## Pricing Table Hooks

Action hooks within the admin pricing configuration UI.

- `rbfw_before_resort_price_table` — Fires before the resort/room type price table.
- `rbfw_after_resort_price_table` — Fires after the resort/room type price table.
- `rbfw_before_general_price_table` — Fires before the general/day-wise price table.
- `rbfw_before_general_price_table_row` — Fires before the general price table rows begin.
- `rbfw_before_week_price_table_row` — Fires before the day-of-week price rows.
- `rbfw_after_general_price_table_row` — Fires after the general price table rows end.
- `rbfw_after_general_price_table` — Fires after the general price table. Passes `$post_id`.
- `rbfw_after_general_price_table_tier_pricing` — Fires after the tier pricing section. Passes `$post_id`.
- `rbfw_after_rent_item_type_table_row` — Fires after the rent item type table row.
- `rbfw_after_week_price_table` — Fires after the week price table. Passes `$post_id`.
- `rbfw_after_room_type_price_saver_price_table` — Fires after room type price saver table. Passes `$post_id`.
- `rbfw_after_extra_service_table` — Fires after the extra services table.

## Location Configuration Hooks

Action hooks for the admin location settings.

- `rbfw_location_config_before` — Fires before the location configuration section. Passes `$post_id`.
- `rbfw_location_config_after` — Fires after the location configuration section. Passes `$post_id`.

## Modern Editor Hooks

Action hooks for the modern editor interface.

- `rbfw_modern_editor_save` — Fires after the modern editor saves a rental item. Passes `$post_id`.
- `rbfw_modern_editor_advanced_sections` — Fires after all standard sections in the modern editor. Passes `$post_id`.

## Template and Settings Filters

Filter hooks for templates, editor mode, and settings.

- `rbfw_template_list` — Filters the available template list. Allows adding or removing templates.
- `rbfw_default_editor_mode` — Filters the default editor mode (`modern` or `classic`).
- `rbfw_settings_sec_reg` — Filters the settings page section registrations.
- `rbfw_settings_sec_fields` — Filters the settings page field definitions.
- `rbfw_settings_field` — Filters the full settings fields array for the admin settings page.

## Payment System Filters

Filter hooks for payment gateway configuration.

- `rbfw_payment_systems` — Filters the available payment systems array.
- `rbfw_payment_gateways` — Filters the available payment gateways array.
- `rbfw_payment_settings_fields` — Filters payment-specific settings fields.

## Data Save Filters

Filter hooks that fire before data is saved to the database.

- `rbfw_extra_service_arr_save` — Filters the extra service data array before saving to post meta.
- `rbfw_pickup_arr_save` — Filters the pickup location data array before saving.
- `rbfw_dropoff_arr_save` — Filters the drop-off location data array before saving.

## Related Products and FAQ Hooks

Action hooks for related products and FAQ alternate layouts.

- `rbfw_related_products_style_two` — Renders related products with style two layout. Passes `$post_id`.
- `rbfw_related_products_style_three` — Renders related products with style three layout. Passes `$post_id`.
- `rbfw_the_faq_style_two` — Renders FAQ with alternate layout. Passes `$post_id`.
- `rbfw_dt_testimonial` — Renders the testimonial section on single page. Passes `$post_id`.

## Slider Hooks

Action hooks for the image slider.

- `rbfw_slider_only` — Renders only the slider without thumbnails.
- `rbfw_slider_icon_indicator` — Renders the icon indicator navigation for the slider.

## Enqueue Scripts Hooks

Action hooks for front-end and admin script enqueuing.

- `rbfw_frontend_enqueue_scripts` — Fires after all front-end scripts and styles are enqueued.
- `rbfw_admin_enqueue_scripts` — Fires after all admin scripts and styles are enqueued.

## Availability and Feature Hooks

Action hooks for availability display.

- `rbfw_availabe_label` — Displays the availability label. Passes `$availabe_type_seat, $rbfw_id`.

## WooCommerce Integration Filters

Standard WooCommerce hooks that the plugin hooks into for custom behaviour.

- `woocommerce_add_cart_item_data` — Adds fee data to WooCommerce cart item data.
- `woocommerce_cart_item_price` — Applies fee surcharges to the displayed cart item price.
- `woocommerce_cart_calculate_fees` — Adds security deposit as a WooCommerce cart fee.
- `woocommerce_thankyou` — Updates RBFW order status and inventory after order.
- `woocommerce_order_status_changed` — Detects WooCommerce order status changes.
