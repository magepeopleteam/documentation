---
name: html-docs
description: Use when writing HTML documentation, tutorials, or reference content. Covers semantic HTML, accessibility, best practices, form patterns, and modern HTML features.
---

# HTML Documentation

## Structure & Semantics
- Document structure: `<!DOCTYPE html>`, `<html lang="...">`, `<head>`, `<body>`
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Heading hierarchy: one `<h1>` per page, don't skip levels
- Use `<figure>` and `<figcaption>` for images with captions
- Use `<time>` for dates/times, `<address>` for contact info
- Lists: `<ul>` for unordered, `<ol>` for ordered, `<dl>` for definitions

## Accessibility (a11y)
- All images need `alt` text (decorative images: `alt=""`)
- Form inputs need associated `<label>` elements
- Use `aria-label`, `aria-labelledby`, `aria-describedby` where semantics are insufficient
- `role` attributes only when native semantics don't cover the need
- Tab order should follow visual order
- Color contrast ratio: 4.5:1 for normal text, 3:1 for large text

## Forms
- Each input needs a `<label>` with `for` attribute matching `id`
- Group related fields with `<fieldset>` and `<legend>`
- Use appropriate `type` attributes: `email`, `tel`, `url`, `number`, `date`
- Use `required`, `pattern`, `minlength`, `maxlength` for validation
- `autocomplete` attributes for common fields
- Error messages associated via `aria-describedby`

## Modern HTML Features
- `<template>` and `<slot>` for reusable markup
- `<details>` / `<summary>` for expandable sections
- `<dialog>` for modal dialogs
- `<progress>` and `<meter>` for visual indicators
- Responsive images: `<picture>`, `srcset`, `sizes`
- Lazy loading: `loading="lazy"` on images and iframes

## Best Practices
- Valid HTML (validate via validator.w3.org)
- No deprecated elements (`<center>`, `<font>`, `<marquee>`)
- Inline styles only when absolutely necessary (prefer CSS classes)
- Minimize DOM depth
- Use `<link rel="preload">` for critical resources
- Always close void elements with `/>` (e.g., `<br />`, `<img />`)
