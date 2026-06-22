---
name: css-docs
description: Use when writing CSS documentation, style guides, or layout tutorials. Covers Flexbox, Grid, responsive design, CSS custom properties, animations, and best practices.
---

# CSS Documentation

## Layout: Flexbox
- Container properties: `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap`
- Item properties: `flex-grow`, `flex-shrink`, `flex-basis`, `flex` (shorthand), `align-self`, `order`
- Common patterns: centering (`justify-content: center; align-items: center;`), sticky footer, equal-height columns, holy grail layout

## Layout: Grid
- Container: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, `grid-template-areas`
- Item: `grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`
- Units: `fr`, `minmax()`, `auto-fill`, `auto-fit`
- Responsive without media queries: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`

## Responsive Design
- Mobile-first: base styles for small screens, `@media (min-width: ...)` for larger
- Common breakpoints: 576px (sm), 768px (md), 992px (lg), 1200px (xl)
- Fluid typography: `clamp(min, preferred, max)`
- Viewport units: `vw`, `vh`, `dvh`, `svh`, `lvh`
- Container queries: `@container (min-width: ...)`

## CSS Custom Properties
- Defined on `:root` or scoped to components: `--color-primary: #007bff`
- Access via `var(--color-primary)` with optional fallback: `var(--color-unknown, #000)`
- Dynamic at runtime — change via JS or media queries

## Animations & Transitions
- `transition: property duration timing-function delay`
- `@keyframes` with `animation-name`, `animation-duration`, `animation-timing-function`
- Prefer `transform` and `opacity` for performant animations (GPU-accelerated)
- `prefers-reduced-motion: reduce` for accessibility
- `will-change` as last resort (performance hint)

## Best Practices
- BEM naming: `.block__element--modifier`
- Specificity: keep low — avoid `!important`, deep nesting, ID selectors
- Logical properties: `margin-inline-start` instead of `margin-left`
- Modern reset: box-sizing, margin/padding reset, smooth scrolling
- Group properties logically (positioning → box model → typography → visual)
