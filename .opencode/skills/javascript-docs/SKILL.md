---
name: javascript-docs
description: Use when writing JavaScript documentation, tutorials, or API reference content. Covers ES6+, async patterns, DOM APIs, modules, error handling, and best practices.
---

# JavaScript Documentation

## ES6+ Features
- `let` / `const` (block-scoped, prefer `const` unless rebinding)
- Arrow functions: concise syntax, lexical `this`, implicit return
- Template literals: `` `Hello ${name}` ``, multi-line strings
- Destructuring: `const { name, age } = obj`, `const [first, ...rest] = arr`
- Spread/rest: `{...obj}`, `[...arr]`, `function(...args)`
- Optional chaining: `obj?.prop?.nested`
- Nullish coalescing: `val ?? defaultValue`
- Logical assignment: `a ||= b`, `a &&= b`, `a ??= b`

## Async JavaScript
- Promises: `new Promise((resolve, reject) => ...)`, `.then()`, `.catch()`, `.finally()`
- `async/await`: synchronous-looking async code, error handling with try/catch
- `Promise.all()` for parallel, `Promise.allSettled()` for non-failing parallel
- `Promise.race()` for timeout patterns
- `fetch()` API for HTTP requests
- `AbortController` for cancelable requests

## DOM Manipulation
- `document.querySelector()` / `querySelectorAll()` (preferred over legacy methods)
- `element.addEventListener()` (never use `on*` properties)
- `element.classList.add/remove/toggle/contains()`
- `element.textContent` vs `element.innerText`
- `document.createElement()`, `element.append/appendChild/prepend`
- `element.dataset` for `data-*` attributes
- `IntersectionObserver`, `MutationObserver`, `ResizeObserver`

## Modules
- ES modules: `export` / `import`, `export default`, named exports
- Dynamic import: `import('./module.js')`
- No longer use CommonJS (`require`, `module.exports`) in browser code

## Error Handling
- `try/catch/finally` for synchronous and async code
- Custom error classes: `class ApiError extends Error { ... }`
- `console.error()` for errors, `console.warn()` for warnings
- Avoid silent failures — always handle or re-throw
- Use `finally` for cleanup

## Best Practices
- Strict mode (`'use strict'` or ES modules auto-enable)
- No global variables — use IIFEs, modules, or block scope
- Prefer `===` / `!==` over `==` / `!=`
- Use `Array.map/filter/reduce/find/some/every` over imperative loops
- Debounce/throttle for performance-sensitive events
- Use JSDoc for function documentation
