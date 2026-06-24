---
title: Next.js
summary: A React framework for building full-stack web applications, developed by Vercel.
categories:
  - Technology
  - Web Development
lastModified: "2026-04-09"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/200px-Nextjs-logo.svg.png"
imageCaption: "The Next.js logo."
infobox:
  _title: "Next.js"
  Developer: Vercel
  Initial release: "October 25, 2016"
  License: MIT
  Written in: JavaScript, TypeScript
  Built on: React
  Website: nextjs.org
---

**Next.js** is an open-source web development framework created by Vercel that enables React-based web applications with server-side rendering and static website generation. It was initially released on October 25, 2016 and has grown to become one of the most popular [[React]] frameworks.

This wiki — [[ReyesWiki]] — is built with Next.js.

## Features

### App Router

Next.js 13 introduced the **App Router**, a new paradigm based on React Server Components. The App Router allows:

- **Server Components** — components that render on the server, reducing client JavaScript
- **Streaming** — progressive rendering with Suspense
- **Layouts** — persistent UI across route changes
- **File-based routing** — folders and files define URL routes

### Rendering strategies

Next.js supports several rendering approaches:

| Strategy | When content renders |
|----------|---------------------|
| Static Site Generation (SSG) | At build time |
| Server-Side Rendering (SSR) | On each request |
| Incremental Static Regeneration (ISR) | On demand, with revalidation |
| Client-Side Rendering (CSR) | In the browser |

### Image optimization

The `next/image` component automatically optimizes images: resizing, formatting as WebP, and lazy loading.

### API routes

API routes let you build server-side logic directly in a Next.js app. Files in `app/api/` export HTTP handler functions like `GET` and `POST`.

## Deployment

Next.js applications are typically deployed to [[Vercel]], though they can run on any Node.js server or be exported as static files.

The recommended deployment workflow is:

1. Push code to a Git repository (GitHub, GitLab, etc.)
2. Connect the repository to Vercel
3. Vercel automatically builds and deploys on every push

## See also

- [[React]] — the underlying UI library
- [[Vercel]] — the cloud platform that hosts this wiki
- [[Markdown]] — the content format used in this wiki
