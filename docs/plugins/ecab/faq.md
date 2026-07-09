---
title: FAQ
description: Frequently asked questions about the eCab taxi booking plugin.
sidebar_position: 6
---

# Frequently Asked Questions

## How do I install the eCab plugin?

- You can install eCab via WordPress Admin (Plugins → Add New → Upload Plugin), via FTP by uploading the extracted folder to /wp-content/plugins/, or directly through the WordPress plugin directory if listed
- After installation, click Activate Plugin and ensure WooCommerce is installed and active
- Go to Settings → Permalinks, select Post name, and click Save Changes

## What pricing models does eCab support?

- **Distance-based pricing:** Fare calculated per kilometer or per mile plus waiting time charges
- **Fixed hourly pricing:** Flat hourly rate with configurable minimum hours and overtime charges
- **Manual fixed location pricing:** Predefined route pairs with manually set flat fares
- Each transport service can use a different pricing model for maximum flexibility

## Do I need a Google Maps API key?

- Yes, if you are using the distance-based pricing model, a valid Google Maps API key is required for distance and duration calculations
- The Maps JavaScript API and Geocoding API must both be enabled in your Google Cloud Console
- For manual fixed location pricing, a Google Maps API key is optional and only needed if you want to display a map on the booking form
- Restrict your API key by HTTP referrer to prevent unauthorized use

## How do I add a new transport service?

- Go to eCab → Transport Services in your WordPress admin menu
- Click Add New and enter the service name, description, and featured image
- Select the pricing model you want to use for this service
- Configure the pricing details (per-km rate, hourly rate, or fixed location prices)
- Set vehicle type, passenger capacity, and baggage capacity
- Publish the service and embed the appropriate shortcode on your site

## How do I configure off days and schedules?

- Navigate to eCab → Settings → Service Schedule
- Set your weekly operating hours for each day of the week
- Add off days for holidays or closures using the Off Day setting
- Choose between repeated schedules (same weekly pattern) or particular date-specific schedules
- Off days can be applied globally to all services or per individual transport service

## How do I set up extra services?

- Go to eCab → Settings → Extra Features to create optional add-on services
- Examples: child seats ($5), pet transportation ($10), extra luggage ($8)
- Set a fixed price for each extra feature and choose per-booking or per-passenger billing
- Extra services appear as optional checkboxes on the booking form
- Customers can select extras during checkout and the charges are added to the WooCommerce cart

## How do I add a driver in the Pro version?

- Navigate to eCab → Drivers and click Add New Driver
- Enter the driver's name, email, phone number, and license information
- Assign the driver to a specific vehicle type
- Upload a driver photo for display on booking tickets
- The driver receives login credentials for the driver panel where they can view and manage trips
- Assign drivers to specific bookings from the order edit screen

## How do I translate the plugin?

- eCab is fully translatable using .po/.mo translation files
- Install Loco Translate plugin to translate directly from the WordPress admin
- Alternatively, use Poedit to edit the .po file located in /wp-content/plugins/ecab/languages/
- Name your translation file ecab-xx_XX.po (e.g., ecab-fr_FR.po for French)
- All front-end and back-end strings are registered for translation

## Why is my shortcode not displaying?

- Go to Settings → Permalinks and click Save Changes to flush rewrite rules
- Verify WooCommerce is installed and active
- Check that you are using the correct shortcode for your selected pricing model
- Clear any caching plugins (WP Super Cache, W3 Total Cache) and CDN caches
- Test with a default WordPress theme (Twenty Twenty-Four) to rule out theme conflicts
- Check the browser console for JavaScript errors that may prevent the form from rendering

## How do I set up distance-based pricing for my city?

- Enter a valid Google Maps API key in eCab → Settings → Maps
- Choose your distance unit (km or miles) under eCab → Settings → General
- Create a transport service and select Distance Based as the pricing model
- Set the per-km rate (e.g., $1.50), per-hour waiting rate (e.g., $12.00), and initial base fare
- Set a minimum fare to ensure short trips remain profitable
- Optionally set different rates for different vehicle types
- Embed the distance-based shortcode on your booking page

## How do I set up fixed hourly pricing for tours?

- Create a transport service and select Fixed Hourly as the pricing model
- Set the hourly rate (e.g., $25 per hour for a sedan)
- Configure the minimum hours required per booking (e.g., minimum 3 hours)
- Optionally set an included mileage cap (e.g., 50 km included per hour)
- Configure overtime charges for bookings that run over the reserved time
- Set extra distance charges per km for distances beyond the included mileage
- Embed the fixed hourly shortcode on your tour booking page

## How do I set up manual fixed location pricing?

- First, create your locations under eCab → Locations → Add Location
- Enter the location name, address, and GPS coordinates (latitude/longitude)
- Create a transport service and select Manual Fixed Location as the pricing model
- Define location pairs (pickup → dropoff) and assign a fixed price to each pair
- For example: Airport to Downtown Hotel — $35.00, Downtown Hotel to Convention Center — $12.00
- Different vehicle types can have different prices for the same route pair
- Embed the manual fixed location shortcode on your booking page

## How do I set the advance booking window?

- Go to eCab → Settings → General Settings
- Find the Advance Booking Days setting
- Enter the maximum number of days in advance customers can book (e.g., 30 for 30 days)
- Set the minimum lead time in hours (e.g., 2 hours before the booking time)
- These limits apply globally to all transport services

## Can I use eCab without WooCommerce?

- No, WooCommerce is a required dependency for eCab. The plugin uses WooCommerce's order management, cart, and checkout systems to process bookings and payments
- Both WooCommerce and eCab must be activated for the booking system to function
- eCab integrates with WooCommerce payment gateways including PayPal, Stripe, and offline payments
