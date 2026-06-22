---
name: react-docs
description: Use when writing React documentation, component guides, or tutorials. Covers hooks, JSX, state management, component patterns, testing, performance, and best practices.
---

# React Documentation

## Components
- Function components with hooks (preferred over class components)
- Component naming: PascalCase, matches filename
- Each component file: one default export
- Props: destructure in the parameter, define with PropTypes or TypeScript
- Default props: default parameters in function signature
- Keep components small and focused on a single responsibility

## JSX
- Single root element or Fragment (`<></>` or `<Fragment>`)
- JS expressions in `{}`, not statements
- Conditional rendering: ternary, `&&`, or early return
- Lists: `.map()` with unique `key` (stable ID, never index)
- Event handlers: `onClick`, `onChange`, etc. — camelCase
- `className` instead of `class`, `htmlFor` instead of `for`

## Hooks

### useState
```jsx
const [state, setState] = useState(initialValue)
```
- State updater can be a function: `setCount(prev => prev + 1)`
- Lazy initializer: `useState(() => expensiveCompute())`

### useEffect
```jsx
useEffect(() => { /* effect */ return () => /* cleanup */ }, [dependencies])
```
- Empty deps `[]`: mount/unmount only
- No deps: every render
- With deps: when listed values change
- Cleanup for subscriptions, timers, event listeners

### useRef
- Mutable values that persist across renders
- DOM refs: `const el = useRef(null)` → `<div ref={el}>`
- No re-render on change (unlike useState)

### useContext
- `const value = useContext(MyContext)`
- Wrap with `<MyContext.Provider value={...}>`
- Avoid overuse — prefer prop drilling or composition for simple cases

### useReducer
```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```
- For complex state logic or multiple sub-values
- Action: `{ type: 'INCREMENT', payload: ... }`

### Performance Hooks
- `useMemo(() => value, [deps])` — memoize computed value
- `useCallback(fn, [deps])` — memoize function reference
- `memo(Component)` — prevent re-render on unchanged props
- Profile before optimizing — don't add prematurely

## State Management
- Lift state up to nearest common ancestor
- Use context for global state (theme, auth, locale)
- External libraries (Redux, Zustand, Jotai) for complex global state
- Server state: React Query, SWR, or similar

## Testing
- RTL (`@testing-library/react`): render, screen, fireEvent, userEvent
- Test user behavior, not implementation details
- Query priority: `getByRole`, `getByLabelText`, `getByPlaceholderText`, `getByText`
- `waitFor`, `findBy*` for async operations

## Best Practices
- Composition over inheritance
- Controlled vs uncontrolled components (prefer controlled for form inputs)
- Error boundaries for crash recovery
- Code splitting: `React.lazy()` + `<Suspense>`
- Portal for modals/tooltips: `createPortal()`
- Accessibility: semantic HTML within JSX, ARIA attributes, focus management
- TypeScript: define `interface` for props, use `React.FC` sparingly
