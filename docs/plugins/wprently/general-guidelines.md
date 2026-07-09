---
title: General Guidelines
description: Best practices for managing rental inventory, bookings, and configuration in WpRently.
sidebar_position: 7
---

# General Guidelines

Best practices and workflows for managing rental inventory, processing bookings, and configuring the plugin to match your business model.

## Managing Rental Products

Rental items are WooCommerce products with special rental fields. Create and manage them from Products → Add New or by editing existing products.

### Creating a Rental Item

- Go to Products → Add New and select a rental type category (Bike, Car, Resort, Equipment, Dress, or General)
- Set the product type to "Rental Product" in the Product Data metabox
- Configure pricing: per-day or per-hour rate, security deposit, and optional extras
- Upload high-quality images and write a detailed description
- Set inventory quantity and define availability rules (off-days, holidays)
- Publish the product — it will appear in `[rent-list]` shortcodes automatically

### Rental Pricing Models

- **Per Day:** Customer pays a fixed rate for each calendar day of the rental
- **Per Hour:** Customer pays based on the number of hours between pickup and return
- **Per Day + Per Hour:** Hybrid model charging a daily base rate plus an hourly surcharge beyond the included hours
- **Flat Rate:** A single fixed price for the entire rental period regardless of duration

## Inventory & Availability

### Stock Management

- Enable WooCommerce stock management per product for quantity tracking
- Set the initial stock count to your total available units of each item
- Stock is decremented automatically when a rental booking is confirmed
- Use the "Out of Stock Threshold" to stop bookings when stock reaches zero
- Back-orders can be disabled to prevent overbooking

### Off-Days & Holidays

- Define global off-days under WpRently → Global Settings → Availability
- Set weekly off-days (e.g., Sundays closed) and specific holiday dates
- Off-days can be overridden per product for different operating schedules
- Customers cannot select off-days as pickup or return dates
- Buffer periods between bookings can be configured to allow cleaning or maintenance

### Availability Calendar

- Each rental product has an availability calendar showing booked and available dates
- Booked dates are blocked and cannot be double-booked
- Color-coded indicators: green (available), red (booked), gray (off-day)
- Calendar syncs with external calendars via the Availability Calendar Sync addon
- Manually block dates from the product edit screen for maintenance or private use

### Buffer & Preparation Time

- Set a minimum buffer period between consecutive bookings for cleaning, inspection, or transport
- Buffer can be configured globally or per product in hours or days
- A 1-hour buffer means the next booking can only start 1 hour after the previous return
- Preparation time ensures items are ready before each new rental begins

## Booking & Order Management

### Processing Bookings

- Customers select pickup and return dates on the product page or via `[rbfw_search]`
- Price is calculated dynamically based on the selected dates and pricing model
- Customers proceed to checkout (WooCommerce or plugin's built-in checkout)
- Order statuses: Pending, Confirmed, Active (rented out), Completed (returned), Cancelled
- Admins can manually change statuses from the order edit screen

### Order Notifications

- Email notifications are sent on order confirmation, status changes, and upcoming returns
- Customize email templates under WooCommerce → Settings → Emails
- Admin gets notified of new bookings; customer gets booking confirmation and reminders
- Late-return alerts can be enabled with the Late Return Fees addon

### Deposits & Payments

- Require a deposit (percentage or fixed amount) at checkout to secure the booking
- Remaining balance can be collected on pickup or via a scheduled payment
- Refundable damage deposits are handled by the Damage Deposit Handler addon
- Supported gateways: Stripe, PayPal, WooCommerce Payments, and any standard WooCommerce gateway
- Partial refunds can be issued for deposits when items are returned early or damaged

### Delivery & Pickup

- Enable delivery option to let customers specify a delivery address
- Distance-based delivery fees can be calculated with the Delivery Zone Mapper addon
- Define delivery zones, radius limits, and per-km pricing
- Customers can choose between pickup and delivery at checkout
- Delivery time slots can be configured in the product settings

## Search & Filtering

### Rent Item Search Form

- Use `[rbfw_search]` to display an advanced search form on any page
- Fields: pickup date, return date, rental type, category, location, keyword
- Results redirect to a search results page (set in plugin settings)
- The search form supports AJAX if enabled for instant filtering
- All fields are optional — empty fields return all available items

### Category & Type Filtering

- Use the `category` parameter in `[rent-list]` to narrow results by WooCommerce category
- Use the `type` parameter to filter by rental type (bike, car, etc.)
- Categories and types can be combined for granular filtering
- Custom taxonomy archives work out of the box with rental categories
