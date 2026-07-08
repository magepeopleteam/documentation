---
title: Min/Max Quantity
description: Control minimum and maximum ticket quantities per ticket type or globally.
sidebar_position: 6
---

## Overview

Control minimum and maximum ticket quantities for events. Set limits per ticket type or globally for all tickets in an event.

## Installation

1. Download the addon zip from your account.
2. Go to **Plugins → Add New → Upload Plugin**.
3. Upload the zip and click **Install Now**.
4. Activate the plugin from the Plugins page.

## Settings

Configure min/max quantity settings when creating or editing an event.

### Enable Minimum Requirements

Toggle this option to enable min/max quantity restrictions for the event.

- **Location:** Event edit page → Event Settings tab
- **Default:** Off

### Min/Max Type

Choose how quantity limits are applied:

- **Ticket Type Base** — Set separate min/max limits for each ticket type.
- **Full Event Base** — Set a global min/max limit for all ticket types combined.

### Global Settings (Full Event Base)

When using Full Event Base type:
- **Global Min Quantity** — Minimum total tickets a customer must purchase.
- **Global Max Quantity** — Maximum total tickets a customer can purchase.

### Ticket Type Settings

When using Ticket Type Base type, configure for each ticket type:
- **Min Qty** — Minimum quantity for this ticket type.
- **Max Qty** — Maximum quantity for this ticket type.
- **Must Buy All Minimum Options Together** — When enabled, customers must buy minimum quantities of ALL enabled ticket types.

## How It Works

### Global Mode Example

If you set Global Min = 2 and Global Max = 10:
- Customer must buy at least 2 tickets total (any ticket type).
- Customer can buy up to 10 tickets total.

### Ticket Type Mode Example

If VIP has Min = 2, Max = 5 and General has Min = 1, Max = 10:
- Customer must buy at least 2 VIP tickets if they select VIP.
- Customer can buy up to 5 VIP tickets.
- Customer must buy at least 1 General ticket if they select General.
- Customer can buy up to 10 General tickets.

## Purchase

This addon is available for purchase from the [MagePeople website](https://mage-people.com/product/event-min-max-quantity-addon/).
