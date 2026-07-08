---
title: Customization
description: Guide for customizing MagePeople plugins.
sidebar_position: 4
---

# Customization

## Template Overrides

MagePeople plugins use template files for front-end display. Override any template in your theme:

1. Create a folder in your theme: `wp-content/themes/your-theme/magepeople/`
2. Copy the template file from the plugin `templates/` folder.
3. Modify the copied file as needed.

### Overridable Templates

- `booking-form.php` — Booking form layout
- `product-grid.php` — Product grid display
- `email/booking-confirmation.php` — Email template
- `single-product.php` — Single product page

## CSS Customization

Add custom CSS to your theme's `style.css` or use the WordPress Customizer.

### Key CSS Classes

```css
/* Booking form */
.magepeople-booking-form { }

/* Product grid */
.magepeople-product-grid { }

/* Availability calendar */
.magepeople-calendar { }

/* Price display */
.magepeople-price { }
```

## JavaScript Customization

Use the `magepeople_` JavaScript namespace for custom scripts.

```javascript
// Custom booking form validation
document.addEventListener('magepeople_booking_submit', function(e) {
  // Your custom logic here
});
```

## Child Theme

For extensive customizations, create a WordPress child theme and override templates there.
