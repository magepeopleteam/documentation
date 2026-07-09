---
title: Installation & Setup
description: Install and configure WpBookingly appointment booking plugin.
sidebar_position: 2
---

# Installation & Setup

Install the WpBookingly service booking plugin via WordPress admin, zip upload, or FTP, then run the setup wizard to configure your booking system.

## System Requirements

Before installing WpBookingly, ensure your server meets the minimum requirements for smooth operation of the booking plugin.

### Server Environment

- PHP version 7.4 or higher (PHP 8.0+ recommended)
- WordPress 5.8 or later installed
- MySQL 5.6+ or MariaDB 10.1+ database
- cURL and JSON extensions enabled on the server

### Required Plugins

- WooCommerce plugin must be installed and activated
- WooCommerce serves as the payment processing backbone
- MagePeople PDF Support recommended for PDF ticket generation
- Loco Translate or WPML for multilingual setups

## Installation Methods

WpBookingly can be installed through multiple methods depending on your license type and hosting environment.

### WordPress Admin Install

- Navigate to Plugins > Add New in the WordPress dashboard
- Search for "WpBookingly" in the plugin repository
- Click Install Now and then Activate
- The free version is available directly from WordPress.org

### Pro Version Upload

- Download the Pro version zip from your MagePeople account
- Go to Plugins > Add New > Upload Plugin
- Choose the downloaded zip file and click Install Now
- Enter your license key under WpBookingly settings to activate

### FTP Installation

- Extract the plugin zip file on your local machine
- Upload the wpbookingly folder to /wp-content/plugins/
- Navigate to Plugins in WordPress admin and activate
- Useful for servers with upload size limitations

### WP-CLI Installation

- Run `wp plugin install wpbookingly` from the command line
- Activate with `wp plugin activate wpbookingly`
- For Pro, use `wp plugin install /path/to/wpbookingly-pro.zip`
- Ideal for headless or automated deployment workflows

## Setup Wizard

Upon activation, the quick setup wizard guides you through the initial configuration of your booking system.

### Industry Selection

- Choose your business type from pre-defined industries
- Options include Consultation, Salon, Car Wash, Repair, and more
- The selection pre-configures labels and defaults
- You can customize everything later in settings

### Regional Settings

- Set your timezone for accurate appointment scheduling
- Configure the default currency for pricing
- Choose date and time display formats
- Set the first day of the week for calendar views

### Booking Preferences

- Enable or disable guest checkout for faster bookings
- Set default booking status (pending, confirmed, or auto-approved)
- Configure minimum and maximum advance booking notice
- Enable mobile optimization for on-the-go bookings

### Notification Defaults

- Set up admin email notification addresses
- Configure customer confirmation email templates
- Enable or disable SMS notifications (if addon installed)
- Define reminder timing before appointments

## Post-Install Configuration

After the wizard, fine-tune additional settings to match your specific business requirements.

### General Settings

- Access Settings via WpBookingly > Settings in the admin menu
- Customize the booking form slug and page URLs
- Configure loading indicators and spinner styles
- Set up reCAPTCHA for spam protection

### Booking Page Setup

- Create a dedicated booking page via Pages > Add New
- Insert the primary booking shortcode into the page content
- Set the page as the booking destination in WpBookingly settings
- Enable pretty permalinks for clean booking page URLs
