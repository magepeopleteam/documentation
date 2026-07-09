---
title: Installation & Setup
description: Install and configure the WpBusTicketly Bus Ticket Booking plugin.
sidebar_position: 2
---

# Installation & Setup

You can install the Bus Ticket Booking with Seat Reservation plugin through the WordPress admin dashboard, via direct ZIP upload, or manually using FTP. The Pro version additionally requires a valid license key.

## Installation Methods

### WordPress Admin Installation

- Navigate to **Plugins → Add New** in your WordPress dashboard
- Search for *"Bus Ticket Booking with Seat Reservation"*
- Click **Install Now** and then **Activate**
- For the Pro version, go to **Plugins → Add New → Upload Plugin**
- Choose the `wpbusticketly-pro.zip` file and click **Install Now**

### FTP Installation

- Download the plugin ZIP from your MagePeople account
- Extract the ZIP file to your local machine
- Connect to your server using an FTP client (e.g. FileZilla)
- Upload the extracted `/wpbusticketly/` folder to `/wp-content/plugins/`
- Return to WordPress admin and activate the plugin from **Plugins** screen

## Pro License Activation

After installing the Pro version, you must activate your license to receive automatic updates and access premium features.

### License Key Setup

- Go to **WpBusTicketly → License** in the WordPress admin menu
- Enter your purchase license key from your MagePeople account
- Click **Activate License** to verify the key
- A green confirmation message indicates successful activation
- Automatic updates will now be delivered via the dashboard

### Troubleshooting Activation

- Ensure your site URL matches the registered domain
- Check that the license key has no extra spaces or characters
- Verify your server can make outbound HTTPS connections
- Contact MagePeople support if activation persists in failing
- Deactivate and reactivate the license if switching domains

## Required Plugins

The plugin depends on WooCommerce for payment processing and MagePeople PDF Support for ticket generation.

### WooCommerce

- Install and activate the free **WooCommerce** plugin
- Configure base currency, payment gateways, and tax settings
- Set up shipping zones if physical goods are also sold
- WooCommerce handles the cart, checkout, and order management

### MagePeople PDF Support

- Install **MagePeople PDF Support** from the WordPress repo
- This library enables PDF ticket generation for bookings
- No additional configuration is required after activation
- PDF tickets are automatically attached to booking emails

## Post-Installation Configuration

### Permalink Settings

- Go to **Settings → Permalinks** in WordPress admin
- Select the **Post name** option for clean URL structures
- Click **Save Changes** to flush the rewrite rules
- Re-save permalinks whenever search or booking pages return 404 errors

### Global Configuration

- Navigate to **WpBusTicketly → Settings**
- Set the default currency, date format, and timezone
- Configure the date picker style and block editor preferences
- Adjust buffer time between bookings and return date options

## Payment Gateway Setup

### Available Gateways

- **Direct Bank Transfer** (BACS) — manual payment by customers
- **Cash on Delivery** — pay when boarding the bus
- **PayPal Standard** — redirect to PayPal for payment
- **Stripe** — credit/debit card payments on-site
- Additional gateways available via WooCommerce extensions

### Configuration Steps

- Go to **WooCommerce → Settings → Payments**
- Toggle the desired payment method to **Enabled**
- Enter your API keys or account credentials as required
- Set a title and description visible to customers at checkout
- Save changes and run a test transaction to verify
