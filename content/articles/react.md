---
title: React
summary: A JavaScript library for building user interfaces, developed by Meta (formerly Facebook).
categories:
  - Technology
  - Web Development
lastModified: "2026-04-09"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
imageCaption: "The React logo — an atom with orbiting electrons."
infobox:
  _title: "React"
  Developer: "Meta (Facebook)"
  Initial release: "May 29, 2013"
  License: MIT
  Written in: JavaScript
  Website: react.dev
---

**React** (also known as **React.js** or **ReactJS**) is a free and open-source JavaScript library for building user interfaces. It was developed by Facebook (now Meta) and released in May 2013. React is currently maintained by Meta and a community of individual developers and companies.

React is the underlying UI library for [[Next.js]], which powers [[ReyesWiki]].

## Core concepts

### Components

React applications are built from **components** — self-contained pieces of UI that can be composed together. Components can be class-based or functional:

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### JSX

**JSX** is a syntax extension that lets you write HTML-like code inside JavaScript:

```jsx
const element = <div className="greeting">Hello!</div>;
```

JSX is compiled to regular JavaScript function calls by tools like Babel.

### State and props

- **Props** — data passed from parent to child components
- **State** — data that changes over time within a component

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Hooks

React Hooks (introduced in React 16.8) let you use state and other React features in functional components:

| Hook | Purpose |
|------|---------|
| `useState` | Local component state |
| `useEffect` | Side effects (fetching, subscriptions) |
| `useContext` | Access React context |
| `useRef` | Mutable references |
| `useMemo` | Memoize expensive computations |
| `useCallback` | Memoize functions |

### Server Components

React 18 and [[Next.js]] 13 introduced **React Server Components** — components that render exclusively on the server, with no JavaScript sent to the client.

## Virtual DOM

React's key innovation is the **Virtual DOM** — an in-memory representation of the real DOM. When state changes, React computes the minimum set of DOM operations needed to update the UI, making updates fast.

## Ecosystem

The React ecosystem is vast:

- **Next.js** — full-stack React framework by [[Vercel]]
- **React Router** — client-side routing
- **Zustand / Redux** — state management
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **shadcn/ui** — component library

## See also

- [[Next.js]] — the most popular React framework
- [[Vercel]] — the company behind Next.js
