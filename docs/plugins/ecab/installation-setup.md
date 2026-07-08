---
title: Installation & Setup
description: Install and configure the eCab Taxi Booking Manager plugin for WordPress.
sidebar_position: 2
---

# Installation & Setup

Install the eCab Taxi Booking Manager plugin via WordPress admin, zip upload, or FTP, then configure your transportation services. The plugin requires WooCommerce to be installed and active for handling payments and orders.

## System Requirements

- WordPress 5.0 or higher (6.x recommended)
- WooCommerce 6.0 or higher installed and activated
- PHP 7.4 or higher (8.x recommended for best performance)
- Google Maps API key with Maps JavaScript API and Geocoding API enabled
- Permalink structure set to Post name (/%postname%/)
- Minimum memory limit of 128MB for optimal performance

## Installation via WordPress Admin

- Navigate to Plugins → Add New in your WordPress dashboard
- Click the Upload Plugin button at the top of the page
- Choose the eCab plugin zip file from your computer
- Click Install Now and wait for the installation to complete
- Click Activate Plugin to enable eCab on your site

## Installation via FTP

- Extract the eCab plugin zip file to your local machine
- Connect to your server using an FTP client (FileZilla, WinSCP, etc.)
- Upload the extracted folder to /wp-content/plugins/ on your server
- Log in to your WordPress admin dashboard
- Navigate to Plugins, find eCab in the list, and click Activate

## Setting Up Permalinks

- Go to Settings → Permalinks in your WordPress dashboard
- Select the Post name option for clean, SEO-friendly URLs
- Click Save Changes to apply the new permalink structure
- Flush rewrite rules by saving Permalinks again if shortcodes don't render
- Custom permalink structures are also supported but Post name is recommended

## Google Maps API Key

- Go to the Google Cloud Console (console.cloud.google.com)
- Create a new project or select an existing one
- Enable the Maps JavaScript API and Geocoding API
- Create credentials and generate an API key
- Restrict the key by HTTP referrers to your domain for security
- Paste the API key in eCab → Settings → Google Maps settings

## Initial Configuration

- Set your base location and service area in eCab settings
- Configure your preferred pricing model (distance-based, fixed hourly, or manual fixed location)
- Set the global currency and timezone to match your region
- Define the distance unit (kilometers or miles) for fare calculations
- Create your first transport service with pricing and availability
- Test the booking form before making it live on your site
