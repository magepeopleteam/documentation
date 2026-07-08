---
title: Staff & Scheduling
description: Manage staff and schedules with WpBookingly.
sidebar_position: 5
---

# Staff & Scheduling

Staff members can be assigned to specific services and have their own schedules, making it easy to manage team-based appointments.

## Staff Management

### Adding Staff Members

- Navigate to WpBookingly > Staff in the WordPress admin
- Enter staff name, email address, and contact information
- Upload a profile photo for staff identification
- Add a brief biography or specialization details

### Staff Assignment

- Assign each staff member to one or more services
- Multiple staff can serve the same service
- Set staff-specific pricing for specialized services
- Enable customer choice of staff during booking

### Bulk Staff Import

- Use the CSV import feature for adding multiple staff at once
- Prepare a CSV with columns for name, email, photo URL, and service IDs
- Map CSV columns to staff fields during import
- Review and confirm imported staff before saving

### Staff Permissions

- Control what each staff member can view and edit
- Enable staff-only dashboard access (Pro feature)
- Restrict staff to viewing their own appointments
- Allow staff to update appointment statuses

## Schedule Configuration

Define working hours, time slots, and availability rules for each service and staff member.

### Working Hours

- Set weekly working days per staff member or service
- Configure opening and closing hours for each day
- Define lunch breaks or split shifts
- Customize hours per day of the week

### Time Slots

- Set slot duration based on your shortest service
- Define gap time between consecutive appointments
- Set maximum bookings per time slot
- Auto-generate slots from working hours

### Date Restrictions

- Define booking cutoff time (e.g., no same-day booking after 2 PM)
- Set minimum advance notice for bookings
- Limit maximum advance booking window (e.g., 30 days ahead)
- Block specific dates for holidays or events

### Recurring Availability

- Set recurring weekly schedules that repeat automatically
- Override specific dates without affecting the base schedule
- Copy schedules between staff members
- Import schedules from a spreadsheet

## Holidays & Off Days

Manage exceptions to the regular schedule with global and staff-specific off days.

### Global Holidays

- Add public holidays that apply to all staff and services
- Set recurring annual holidays (e.g., Christmas, New Year)
- Import holiday calendars via CSV
- Holidays override all working day settings

### Staff-Specific Off Days

- Add individual staff vacation or sick days
- Temporarily disable a staff member from receiving bookings
- Set recurring weekly off days per staff member
- Override default schedule for specific dates only

## Google Calendar Sync

Sync your WpBookingly schedule with Google Calendar to manage appointments from a single interface.

### Setup & Configuration

- Requires the Staff and Resource Scheduler addon
- Connect your Google account via OAuth 2.0
- Select which calendar to sync with
- Choose synchronization direction (one-way or two-way)

### Sync Behavior

- New bookings automatically create calendar events
- Cancelled bookings remove events from the calendar
- Rescheduled appointments update existing events
- Conflicts are flagged and reported via email
