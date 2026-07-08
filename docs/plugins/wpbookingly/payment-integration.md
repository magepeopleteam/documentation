---
title: Payment Integration
description: Configure payments with WpBookingly and WooCommerce.
sidebar_position: 6
---

# Payment Integration

WpBookingly uses WooCommerce as its payment processing engine, providing a secure and familiar checkout experience.

## WooCommerce Integration

### How It Works

- Bookings are added to the WooCommerce cart during checkout
- Customers proceed through WooCommerce's standard checkout flow
- Inventory and booking availability are checked in real time
- Order statuses sync between WooCommerce and WpBookingly

### Setup Requirements

- WooCommerce must be installed, activated, and configured
- Configure WooCommerce currency to match your pricing
- Set up WooCommerce shipping zones if applicable
- Enable guest checkout in WooCommerce for faster bookings

## Supported Payment Gateways

All WooCommerce-compatible payment gateways work seamlessly with WpBookingly bookings.

### Popular Gateways

- PayPal Standard and PayPal Express Checkout
- Stripe (credit cards, Apple Pay, Google Pay)
- Direct bank transfer and offline payments
- Cash on delivery for on-site services

### Gateway Configuration

- Enable and configure gateways in WooCommerce > Settings > Payments
- Enter API keys and credentials for live processing
- Test gateways using WooCommerce sandbox modes
- Multi-currency gateways supported for international bookings

## Deposit & Partial Payments

Offer flexible payment options with deposit and partial payment configurations.

### Deposit Configuration

- Set a flat or percentage-based deposit amount per service
- Configure the remaining balance due date
- Send automatic payment reminders for outstanding balances
- Deposits work with all supported payment gateways

### Payment Plans

- Create multi-installment payment plans using the WooCommerce Deposits addon
- Set installment amounts, intervals, and due dates
- Automatically calculate interest or service fees for plans
- Customers see full payment schedule during checkout

## Order & Booking Management

Manage bookings and orders from a unified dashboard with full lifecycle control.

### Booking Statuses

- **Pending** — Awaiting payment or manual approval
- **Confirmed** — Payment received and booking secured
- **In Progress** — Appointment is currently underway
- **Completed** — Appointment finished successfully
- **Cancelled** — Booking cancelled by customer or admin
- **No Show** — Customer did not attend

### Admin Actions

- View all bookings from WpBookingly > All Bookings
- Change booking status manually from the edit screen
- Reschedule bookings to different dates and times
- Process refunds directly from WooCommerce order pages

### Customer Self-Service

- Customers can view bookings via My Account > Appointments
- Allow customers to cancel bookings within a defined window
- Enable self-service rescheduling with availability checks
- Email links provide one-click access to booking management

### Refund Handling

- Refunds are processed through WooCommerce order management
- Full and partial refunds are supported
- Refund amounts automatically update booking status
- Configure a refund policy that displays during checkout

## Free Consultations & $0 Bookings

WpBookingly supports free bookings with no payment required, ideal for consultations or complimentary services.

### Setup Free Services

- Set service price to $0 in the service editor
- Free bookings skip the WooCommerce checkout entirely
- Customers receive a confirmation without payment
- Still captures customer details and appointment time

### Hybrid Models

- Offer free initial consultations with paid follow-ups
- Use deposit mode with $0 minimum for free trials
- Combine free and paid extras on the same service
- Track free bookings separately in reports
