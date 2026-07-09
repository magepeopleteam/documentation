---
title: Settings
description: Configure eCab taxi booking plugin settings.
sidebar_position: 3
---

# Plugin Settings

Configure Google Maps integration, pricing models, passenger and baggage filters, distance units, waiting service settings, and extra features to tailor the eCab booking experience to your business.

## Google Maps Settings

- Enter your Google Maps API key in the designated field under eCab → Settings → Maps
- Ensure the Maps JavaScript API and Geocoding API are enabled in Google Cloud Console
- Set the default map center coordinates and zoom level for the booking form
- Configure address autocomplete to help customers quickly enter pickup and dropoff locations
- Set map styling options to match your website's design and brand colors
- Enable or disable map display on the booking form based on your preference

## Distance Unit Configuration

- Choose between Kilometers (km) or Miles (mi) as the global distance unit
- The setting affects fare calculations for distance-based pricing models
- Distance conversion is applied automatically in all booking forms system-wide
- Display format can be configured to show distance with decimal precision (e.g., 2 decimal places)
- Changes to this setting require re-saving existing transport services to update pricing
- Larger distances can be displayed in a shortened format for better UX

## Pricing Model Selection

- Distance-based pricing: fare calculated per km/mi plus per-hour waiting charges
- Fixed hourly pricing: flat hourly rate with configurable minimum hours and overtime charges
- Manual fixed location pricing: predefined route pairs with manually set flat fares
- Each transport service can use a different pricing model for maximum flexibility
- Initial price can be set as a base charge that applies to all rides before distance calculation
- Price configuration includes separate fields for different vehicle types within the same service

## Passenger & Baggage Filters

- Set maximum passenger capacity per vehicle type (e.g., sedan: 4, SUV: 6, minivan: 8)
- Configure baggage capacity in terms of number of suitcases or total weight
- Filter available vehicles based on customer-entered passenger and baggage counts
- Show or hide passenger and baggage selectors on the booking form
- Set default passenger count for the booking form initial state
- Configure extra charges for additional passengers beyond the standard count

## Waiting Service Settings

- Enable or disable waiting service as a bookable add-on in the booking form
- Set the per-hour waiting charge rate applied after the free waiting period expires
- Configure free waiting time in minutes before waiting charges begin accruing
- Display waiting service as an optional extra or include it in the base fare
- Maximum waiting time limits can be set to prevent excessive idle charges
- Waiting service can be applied to airport pickups with an extended free period

## Extra Features & Service Settings

- Add optional extra services such as child seats, pet transportation, or luggage assistance
- Set fixed prices for each extra service feature (e.g., child seat: $5, pet: $10)
- Configure extra services to be per-booking or per-passenger charges
- Enable or disable individual extra features on the booking form
- Set service schedules including operating hours, off days, and holiday closures
- Configure advance booking restrictions to limit how far ahead customers can reserve

## Service Schedule & Availability

- Define daily operating hours for each day of the week (e.g., Mon-Fri 8:00-20:00)
- Set off days when no bookings are accepted (e.g., public holidays, maintenance days)
- Choose between repeated weekly schedules or particular date-specific schedules
- Configure how many days in advance a customer can place a booking (e.g., 30 days max)
- Set minimum notice time required before a booking can be made (e.g., 2 hours minimum)
- Multiple service schedules can be created and assigned to different vehicle types

## General Global Settings

- Set the global currency symbol and position (before or after the amount)
- Configure price display format including decimal and thousand separators
- Set the default timezone for all booking calculations and date displays
- Choose the date format for the booking calendar (e.g., d/m/Y or m/d/Y)
- Enable or disable guest checkout for customers who don't want to register
- Configure WooCommerce checkout integration for seamless payment processing
