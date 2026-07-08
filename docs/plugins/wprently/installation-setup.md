---
title: Installation & Setup
description: Install and configure WpRently — Booking and Rental Manager for WooCommerce.
sidebar_position: 2
---

# Installation & Setup

Get the Booking and Rental Manager for WooCommerce (WpRently) up and running on your WordPress site. Follow the steps below to install, activate, and configure the plugin for your first rental item.

## Plugin Installation

- **Via WordPress Admin:** Navigate to Plugins → Add New, search for "Booking and Rental Manager for WooCommerce", then click Install Now and Activate.
- **Via Zip Upload:** Download the plugin zip from your Magepeople account, go to Plugins → Add New → Upload Plugin, choose the zip file, and click Install Now.
- **Via FTP:** Extract the plugin folder and upload `/booking-and-rental-manager-for-woocommerce/` to `/wp-content/plugins/`, then activate from the admin Plugins screen.
- **Pro Version:** After activating the free version, install the Pro plugin the same way and enter your license key under WpRently → License to unlock premium features.

## Dependencies

- WordPress 5.6 or higher (6.x recommended)
- WooCommerce 5.0 or higher (required for full functionality)
- PHP 7.4+ (8.0+ recommended for best performance)
- MySQL 5.6+ or MariaDB 10.1+
- Modern browser for the admin interface (Chrome, Firefox, Edge)

## Step-by-Step Setup Wizard

After activation, the setup wizard launches automatically. Complete the wizard to configure the core rental parameters.

### Step 1 — Rental Types

- Enable the rental item types you want to offer: Bike, Car, Resort, Equipment, Dress, or General
- Each type maps to a dedicated WooCommerce product category
- You can rename labels for each type in General Settings later
- Disable unused types to keep the admin menu clean

### Step 2 — Booking Mode

- Choose between Single Day or Multiple Day rental model
- Single Day: items are booked for one calendar day (e.g., 9 AM – 6 PM)
- Multiple Day: items are booked across consecutive days with flexible pickup/return times
- This setting can be overridden per product later

### Step 3 — Pricing & Currency

- Set your default currency and price format (WooCommerce settings apply)
- Configure per-day or per-hour base pricing for new items
- Enable seasonal pricing if you have the Seasonal Pricing addon
- Set default tax rates for rental items

### Step 4 — Checkout & Payment

- Choose checkout mode: WooCommerce native or plugin's quick checkout
- Enable guest checkout if you want rentals without account registration
- Select which payment gateways appear for rental orders
- Configure deposit requirements (percentage or fixed amount due upfront)

## Post-Installation Checklist

### Verify Plugin Activation

- Check that a "WpRently" menu appears in the WordPress admin sidebar
- Confirm rental product categories were created under Products → Categories
- Visit Settings → Permalinks and click "Save Changes" to flush rewrite rules
- Test by creating one rental product and viewing it on the front end

### Configure Addons

- [Browse available addons](/docs/plugins/wprently/available-addons) to extend functionality
- Damage Deposit Handler for refundable deposits
- Availability Calendar Sync for Google/Outlook
- Late Return Fees for automated penalties
