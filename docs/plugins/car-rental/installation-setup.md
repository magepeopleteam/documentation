---
title: Installation & Setup
description: Install and configure the Car Rental Manager plugin for WordPress.
sidebar_position: 2
---

# Installation & Setup

The Car Rental Manager plugin can be installed via the WordPress admin dashboard, direct ZIP upload, or manual FTP. After activation, the setup wizard guides you through the essential configuration steps to launch your car rental system.

## Plugin Installation Methods

- **WordPress Admin:** Navigate to Plugins > Add New and search for "Car Rental Manager". Click Install Now and activate.
- **ZIP Upload:** Download the plugin package from MagePeople, go to Plugins > Add New > Upload Plugin, select the ZIP file, and activate.
- **FTP (Manual):** Extract the plugin folder and upload it to `/wp-content/plugins/` via FTP. Activate from the WordPress Plugins screen.
- **Pro Version:** After purchasing, download the Pro ZIP from your MagePeople account and upload it via WordPress. The Pro license unlocks advanced features.

## System Requirements

- WordPress 5.0 or higher (6.x recommended)
- PHP 7.4 or higher (8.0+ recommended)
- MySQL 5.6 or higher / MariaDB 10.1+
- WooCommerce 5.0+ (optional, for payment processing)
- Memory limit: at least 128MB (256MB recommended)
- SSL certificate for secure payment transactions

## Setup Wizard

Upon first activation, the setup wizard steps through the core configuration. You can also access it later from the Car Rental menu in your WordPress admin.

### Wizard Steps

- **General Settings:** Define the plugin label (e.g., "Car Rental"), URL slug, and currency settings.
- **Business Details:** Enter your business name, address, contact information, and timezone.
- **Rental Preferences:** Set default rental duration (daily/hourly), min/max booking days, and advance notice period.
- **Payment Configuration:** Choose between WooCommerce, PayPal, Stripe, or bank transfer as payment gateways.
- **Sample Data:** Optionally import pre-built vehicle profiles and sample content to start quickly.

### Post-Installation Checks

- Verify that the Car Rental menu appears in your WordPress admin sidebar.
- Check that required pages (Booking Form, Fleet Listing, Checkout) are created automatically.
- Test the booking form on the front end to ensure styling and functionality work.
- Confirm email notifications are triggered for test bookings.
- Review the Settings panel for any additional customization options.

## WooCommerce Integration

Car Rental Manager integrates seamlessly with WooCommerce for payment handling, or you can use standalone payment gateways.

### With WooCommerce

- Install and activate WooCommerce before Car Rental Manager.
- Rental bookings are added as WooCommerce products.
- Supported gateways: Stripe, PayPal, BACS, Cheque, and any WooCommerce-compatible gateway.
- Order management uses the standard WooCommerce order interface.

### Without WooCommerce

- Enable standalone mode in Car Rental settings.
- Configure PayPal or Stripe directly within the plugin.
- Booking data is managed entirely within Car Rental Manager.
- Suitable for sites that do not sell physical products alongside rentals.
