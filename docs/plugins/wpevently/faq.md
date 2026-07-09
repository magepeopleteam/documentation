---
title: FAQ
description: Quick answers to the most common questions about installing, configuring, and troubleshooting the WooCommerce Event Manager plugin.
sidebar_position: 8
---

# FAQ

## Event Cart Quantity is not changed its showing 1

Event is always one, but the ticket type is multiple. One event could have various ticket types. Users select multiple ticket types, not multiple events. So, the Quantity column on the Cart page shows 1 for the event. In the Event name below, you can see the ticket type, quantity, price, and event date details.

It is not possible to change the quantity on the Cart page. It will create an attendee duplication issue in the event booking.

## How to add tax in event manager

### Enabling Tax

To access the tax settings screens, they first need to be enabled.

1. Go to: WooCommerce → Settings → General.
2. Select the **Enable Taxes and Tax Calculations** checkbox.
3. Save changes.

### Configuring Tax Options

Go to: **WooCommerce → Settings → Tax**. This tab is only visible if taxes are enabled.

### In WooCommerce Event Manager

After setting tax in WooCommerce you will get a tax option in new event add and edit event. There are two fields: Tax Status (None / Taxable) and Tax Class (Standard / reduced rate / zero rate).

## Cancellation Request from My Account in Front End

This feature is available in the Form Builder plugin version 4.0.4. Users can submit a Cancellation Request from the My Account page. It can be auto-cancelled, or the admin can check the request from the dashboard and approve or reject it. Admin can also choose which user roles can submit the Cancellation Request.

**Settings:** Go to Event Settings → General Settings and scroll to the bottom. You can select multiple user roles or enable the Auto Cancel feature.

**How to Submit:** On the My Account page, a new tab named "My Event Order" is added. Users can see all event order lists, view details, and submit a Cancellation Request. If auto-cancel is enabled, the order will automatically cancel.

**How to Approve/Reject:** After a user submits a request, the admin can see the request list in the Cancellation Request page from the dashboard and approve or reject it.

## How to get event ID

View the event in edit mode. In the URL, you will see the event ID (the number in the URL parameter).

## How to find event organizer ID?

Go to **Events → Organizer**. The organizer ID will be displayed in the list.

## How to find event category ID?

Go to **Events → Category**. The category ID will be displayed in the list.

## How to add the shortcode in the editor?

**Gutenberg Editor:**

1. Go to Pages → Add New.
2. Insert a shortcode block.
3. Enter the shortcode inside the block.
4. Click Save draft or Publish.

**Classic Editor:**

1. Go to Pages → Add New.
2. Enter the shortcode inside the editor.
3. Click Save draft or Publish.

## How can I enable Waitlist if event reservation full ?

This feature is included in the [WooCommerce Event Waitlist Addon](https://mage-people.com/product/woocommerce-event-waitlist-addon/).

## Where is PDF ticket Settings

1. Log in to your WordPress admin panel.
2. Click the "Events" button to open a drop-down list.
3. Find the "PDF setting" button in the drop-down list.
4. Click "PDF Setting" to access the PDF ticket setting panel.

## How Can I enable Attendee form

To enable the attendee form you must first install a plugin named "Form Builder". Once installed:

1. Go to your WordPress dashboard and click the "Events" button.
2. Click the "Edit" form option.
3. Scroll down to find a form named "Event Attendee" registration form.
4. Enable the "Attendee Form" from here.

## Why I don't see attendee form in event page ?

Please buy the premium version of the plugin to get this feature. If you already have the pro version, make sure you have installed the Form Builder addon and PDF addon that are included in the pro version.

## Can I book a event ticket from backend for a customer ?

Yes, you can book event tickets for customers as a backend user. This feature is available in the [WooCommerce Event: Book an Event From Dashboard addon](https://mage-people.com/product/woocommerce-event-book-an-event-from-dashboard/).

## How can I export Attendee list

*(Attendee List is a PRO feature that comes with the PRO version.)*

1. Log in to your WordPress admin panel.
2. Click the "Events" button.
3. Click "All Events" from the drop-down list.
4. Click the "Export CSV" button to download all attendee lists of a particular event.

## Why attendee list shows empty ?

*(Attendee List is a PRO feature that comes with the PRO version.)*

The attendee list may show empty if you do not have a premium version of the plugin installed.

## Where Can I see Attendee list

*(Attendee List is a PRO feature that comes with the PRO version.)*

To see the attendee list, you must buy a premium version. If you already have the premium version:

1. Log in to the WordPress admin panel.
2. Click the "Events" button to display the drop-down list.
3. Click "Event Attendee" from the drop-down list to view the attendee list.

## I did correct Setting but event page shows 404 error

Make sure your server rewrite module is enabled and re-save permalink settings (Settings → Permalinks → Save Changes).

## How can I enable QR code in my Ticket and How it works

1. Log in to your WordPress admin panel.
2. Click the "Events" button to open a drop-down list.
3. Click the "QR Setting" button from the drop-down list.
4. Configure and enable the QR code from the QR setting panel.
