---
title: Installation & Setup
description: Install and configure WpTravelly tour booking plugin.
sidebar_position: 2
---

# Installation & Setup

Install the WpTravelly plugin via WordPress admin, zip upload, or FTP to start building and managing tour packages with WooCommerce integration.

## Prerequisites

- WordPress 5.8 or higher running any standard theme
- WooCommerce plugin installed and activated
- PHP 7.4+ with required extensions (curl, json, mbstring)
- Minimum memory limit of 128 MB recommended
- A valid license key for the Pro version (if applicable)

## Install via WordPress Admin

- Navigate to Plugins → Add New in your WordPress dashboard
- Search for "WpTravelly" or "Travel Booking Manager"
- Click Install Now next to the plugin listing
- Click Activate after installation completes
- Enter your license key under WpTravelly → License

## Manual Installation (Zip Upload)

- Download the plugin zip file from your MagePeople account
- Go to Plugins → Add New → Upload Plugin
- Choose the downloaded .zip file and click Install Now
- Click Activate Plugin once the upload finishes
- Verify the WpTravelly menu appears in your admin sidebar

## Install via FTP

- Extract the plugin zip file on your local machine
- Connect to your server using an FTP client (e.g. FileZilla)
- Upload the extracted folder to `/wp-content/plugins/`
- Log in to WordPress and go to Plugins → Installed Plugins
- Find WpTravelly in the list and click Activate

## Initial Configuration

After activation, complete the setup wizard or manually configure these core settings:

### Global Settings

- Set the default tour currency and price display format
- Configure date formats and timezone for tour schedules
- Define global booking cutoff and cancellation policies
- Enable or disable guest checkout for tour bookings
- Set up email notifications for booking confirmations

### Tour Taxonomy Setup

- Create tour categories (e.g. Adventure, Cultural, Wildlife)
- Add tour organizers (guides or agencies running tours)
- Define tour tags for filtering and cross-referencing
- Set up tour activities and destinations
- Assign featured images and icons to each taxonomy

### Payment & Checkout

- Configure WooCommerce payment gateways (PayPal, Stripe, etc.)
- Set up tax rates for tour bookings if required
- Enable partial or deposit payments for tours
- Define default checkout fields and required information
- Test a sandbox transaction before going live

### Page Creation

- Create a dedicated "Tours" page to list all tour packages
- Add a "Tour Search" page using the search shortcode
- Create individual tour detail pages (auto-generated)
- Set up a cart and checkout page via WooCommerce
- Link pages in your main navigation menu
