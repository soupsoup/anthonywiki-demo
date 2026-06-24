---
title: Vercel
summary: A cloud platform for deploying and hosting web applications, and the company behind Next.js.
categories:
  - Technology
  - Web Development
lastModified: "2026-04-09"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/200px-Vercel_logo_black.svg.png"
imageCaption: "The Vercel logo."
infobox:
  _title: "Vercel"
  Founded: "2015"
  Founders: "Guillermo Rauch"
  Type: Cloud platform
  Products: "Next.js, v0, Fluid"
  Headquarters: "San Francisco, CA"
---

**Vercel** is a cloud platform for deploying and hosting front-end web applications. It was founded in 2015 by Guillermo Rauch and is the company behind [[Next.js]]. Vercel is known for its developer experience, zero-configuration deployments, and global edge network.

This wiki, [[ReyesWiki]], is hosted on Vercel.

## Products

### Next.js

[[Next.js]] is Vercel's open-source React framework. It is one of the most popular web frameworks and is used by companies including Netflix, GitHub, and Twitch.

### Vercel platform

The Vercel platform offers:

- **Automatic deployments** from Git
- **Preview deployments** for every pull request
- **Edge network** for fast global delivery
- **Serverless functions** for backend logic
- **Analytics** for performance monitoring

### v0

v0 is Vercel's AI-powered UI generation tool. It creates React components from natural language descriptions.

## Deployment model

Vercel uses a **Git-based** deployment model:

1. Connect a Git repository to a Vercel project
2. Push a commit to trigger an automatic build
3. Vercel runs the build command and deploys
4. Each branch gets its own preview URL

The production branch (usually `main`) deploys to the production URL. Other branches get preview URLs like `my-project-git-branch-team.vercel.app`.

## Edge Network

Vercel's edge network has servers in over 100 cities worldwide. Static assets and edge functions are distributed globally, so users are served from the nearest location.

## Pricing

Vercel offers a free tier suitable for personal projects and small teams. Paid plans add more bandwidth, team features, and enterprise support.

## See also

- [[Next.js]] — the framework built by Vercel
- [[ReyesWiki]] — this wiki, hosted on Vercel
