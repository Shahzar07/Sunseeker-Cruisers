# Sunseeker Cruisers

Marketing homepage for Sunseeker Cruisers, built with Next.js (App Router), React 19 and Tailwind CSS 4.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. In Vercel, choose **Add New → Project** and import this GitHub repository.
2. Vercel detects **Next.js** automatically. Keep the defaults (build command `npm run build`, install command `npm install`).
3. Click **Deploy**. No environment variables are required.

## Project structure

- `app/` - layout, homepage (`page.tsx`) and global styles
- `components/ui/` - shadcn/ui components
- `public/` - images, fonts and favicon
- `ASSETS.md` - notes on where the imagery and copy came from
