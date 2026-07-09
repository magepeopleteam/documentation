---
title: Pricing & Availability
description: Configure pricing models, seasonal rates, and availability for Car Rental Manager.
sidebar_position: 3
---

# Pricing & Availability

Configure flexible pricing models, manage vehicle availability calendars, set seasonal rates, and define booking restrictions. The pricing engine supports daily and hourly rates with automatic calculations for long-term rentals and add-on services.

## Pricing Models

Car Rental Manager supports multiple pricing structures that can be set globally or overridden per vehicle.

### Rate Types

- **Daily Rate:** Fixed price per 24-hour period. The most common model for car rentals.
- **Hourly Rate:** Per-hour pricing for short-duration rentals (ideal for hourly services).
- **Combined:** Daily rate with hourly overage charges for late returns.
- **Flat Rate:** Single fixed price regardless of rental duration.
- All rate types can include or exclude taxes and fees.

### Per-Vehicle Pricing

- Override the default pricing for any vehicle from its edit screen.
- Set a custom daily or hourly rate specific to that vehicle.
- Configure minimum and maximum rental duration per vehicle.
- Add a security deposit amount required at checkout.
- Set separate weekend and weekday rates for the same vehicle.

## Seasonal & Dynamic Pricing

### Seasonal Rates

- Define seasonal periods (e.g., Summer, Christmas, New Year) with custom pricing.
- Seasonal rates override regular rates for the specified date range.
- Multiple seasonal periods can overlap — the most specific period wins.
- Apply percentage increase or fixed amount adjustments.
- Seasonal pricing can be set globally or per vehicle.

### Discounts & Promotions

- **Long-term Discount:** Automatically apply a percentage discount for rentals exceeding X days.
- **Early Bird:** Discount for bookings made more than N days in advance.
- **Last Minute:** Reduced rates for bookings within N days of pickup.
- **Coupon Codes:** Create fixed or percentage coupons via the Coupons menu.
- Set coupon expiration dates, usage limits, and minimum booking values.

## Availability Management

Control when each vehicle is available for booking. The system prevents double bookings through real-time availability checks.

### Availability Calendar

- Each vehicle has an interactive calendar showing booked, blocked, and available dates.
- Manually block dates when a vehicle is out of service or reserved offline.
- View all bookings in a single calendar view under Car Rental > Calendar.
- Color-coded entries distinguish confirmed, pending, and blocked periods.
- Drag to create or modify booking blocks directly on the calendar.

### Off Days & Holidays

- Set global off days when your business is closed (e.g., public holidays).
- Off days prevent any vehicle from being booked for pickup or drop-off.
- Per-vehicle off days allow maintenance or unavailability schedules.
- Recurring weekly off days (e.g., Sundays) can be configured in general settings.
- Bulk-import off days from a CSV file for large fleets.

## Booking Restrictions

### Duration Limits

- Minimum booking days: Prevent rentals shorter than N days.
- Maximum booking days: Cap rentals at N days to ensure fleet availability.
- Advance notice: Require bookings to be made at least N hours before pickup.
- Cutoff time: Stop accepting bookings for the same day after a set time.
- Future booking window: Limit how far in advance customers can book (e.g., 60 days).

### Fleet-Level Controls

- Set a maximum number of active bookings per vehicle to prevent overbooking.
- Define buffer time between rentals for cleaning and inspection.
- Allow or disallow one-way rentals (different drop-off location).
- Require adult age verification or driver's license upload.
- Configure cancellation policies with refund tiers (full, partial, none).

## Tax & Fee Configuration

- Enable or disable tax calculation on rental prices.
- Set tax percentage (e.g., VAT, GST) applied to all bookings.
- Define additional fees: airport surcharge, young driver fee, late return fee.
- Fees can be fixed amounts or percentages of the base rental cost.
- Display fees as line items on the booking summary and invoice.
