---
title: Email Configuration
description: Configure email notifications for MagePeople booking plugins.
sidebar_position: 5
---

# Email Configuration

MagePeople plugins send automated email notifications for bookings, payments, and updates.

## SMTP Setup

For reliable email delivery, configure an SMTP plugin:

1. Install an SMTP plugin such as WP Mail SMTP or Post SMTP.
2. Configure your email service provider settings (SendGrid, Mailgun, SMTP2GO, etc.).
3. Send a test email to verify configuration.

## Notification Templates

Each plugin provides customizable email templates:

- **New Booking** — sent to the admin when a booking is made
- **Booking Confirmation** — sent to the customer after payment
- **Booking Reminder** — optional reminder before the event/booking date
- **Cancellation Notice** — sent when a booking is cancelled

Navigate to **Plugin Settings → Email** to customize templates.
