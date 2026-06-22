---
name: jquery-docs
description: Use when writing jQuery documentation, migration guides, or maintaining legacy jQuery code documentation. Covers selectors, DOM traversal/manipulation, events, AJAX, animations, and best practices.
---

# jQuery Documentation

## Selectors
- CSS-based selectors: `$('#id')`, `$('.class')`, `$('tag')`, `$('[attr=val]')`
- jQuery custom: `:first`, `:last`, `:even`, `:odd`, `:eq()`, `:gt()`, `:lt()`
- Form selectors: `:input`, `:text`, `:checkbox`, `:radio`, `:selected`, `:checked`
- Visibility: `:visible`, `:hidden`
- Prefer ID and class selectors for performance

## DOM Traversal
- `$(element).find()`, `children()`, `parent()`, `parents()`, `closest()`
- `next()`, `prev()`, `nextAll()`, `prevAll()`, `siblings()`
- `first()`, `last()`, `eq()`, `filter()`, `not()`
- Chain traversal methods for readability

## DOM Manipulation
- Content: `html()`, `text()`, `val()`, `attr()`, `prop()`, `data()`
- Insertion (inside): `append()`, `prepend()`, `appendTo()`, `prependTo()`
- Insertion (outside): `after()`, `before()`, `insertAfter()`, `insertBefore()`
- Wrapping: `wrap()`, `wrapAll()`, `wrapInner()`
- Removal: `remove()`, `detach()`, `empty()`, `unwrap()`
- CSS: `css()`, `addClass()`, `removeClass()`, `toggleClass()`, `hasClass()`

## Events
- `on()` (preferred): `$(el).on('click', handler)` — supports delegation
- `off()` to unbind, `one()` for single-fire
- Event object: `event.preventDefault()`, `event.stopPropagation()`, `event.target`
- Delegation: `$(parent).on('click', '.child', handler)`
- Shorthand methods: `click()`, `hover()`, `submit()`, `change()`, `keyup()`, `ready()`

## AJAX
- `$.ajax()`: full config object: `url`, `method`, `data`, `dataType`, `success`, `error`, `complete`
- `$.get()`, `$.post()`: convenience methods
- `$.getJSON()`: shorthand for JSON data
- `$.fn.load()`: load HTML into element
- Promise interface: `.done()`, `.fail()`, `.always()`
- `$(document).ajaxStart/Stop/Send/Error/Success()`: global handlers

## Animations
- Basic: `hide()`, `show()`, `toggle()`, `slideDown()`, `slideUp()`, `slideToggle()`, `fadeIn()`, `fadeOut()`, `fadeToggle()`
- Custom: `animate(properties, duration, easing, callback)`
- Stop: `stop()`, `finish()` — clear animation queues
- Easing: `swing` (default), `linear`
- Callback fires after animation completes

## Best Practices
- Cache jQuery objects: `const $el = $('#element')`
- Use event delegation for dynamic elements
- Keep DOM manipulations in memory before appending
- Prefer `on()` over deprecated `bind()`, `live()`, `delegate()`
- Use jQuery slim build if effects/AJAX aren't needed
- Handle `$(document).ready()` for DOM-safe execution
- Graceful degradation: check `$.fn` before calling methods
- jQuery 3.x: use `$.now()` instead of `Date.now()`, `.css()` returns CSSOM values
