# Deploy to Vercel

The project is ready. Run this from the `wiki-clone` folder:

```bash
npx vercel deploy --prod
```

That's it. Vercel will prompt you to log in if needed, then deploy.

## First time setup

If you haven't used Vercel before:
1. `npx vercel deploy --prod`
2. Follow the prompts (log in, confirm project name)
3. Done — you'll get a URL like `https://wiki-clone-xyz.vercel.app`

## After deploying

- Visit your URL to see the wiki live
- Articles are stored in `content/articles/` as Markdown files
- Edit them directly, then redeploy, or use the wiki's built-in editor
