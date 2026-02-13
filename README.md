# Nexora Website

Professional multi-page company website for Nexora Technologies, built with React, Vite, React Router, and Tailwind CSS.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 3

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

The repository deploys automatically to GitHub Pages using:

- `.github/workflows/deploy-pages.yml`

Live URL:

- `https://nexora-technologies-dev.github.io/nexora-website/`

## SEO and Social Preview

Configured in `index.html`:

- title and description
- canonical URL
- Open Graph tags
- Twitter card tags
- favicon and Apple touch icon from `public/logo.png`

Configured in `public/`:

- `robots.txt`
- `sitemap.xml`

## Custom Domain Readiness

When you are ready to move from GitHub Pages subpath to a custom domain:

1. Set `base: '/'` in `vite.config.js`.
2. Add `public/CNAME` containing only your domain (example: `www.nexora.com`).
3. Update canonical/OG/Twitter URLs in `index.html` to your domain.
4. Update URLs in `public/sitemap.xml` and `public/robots.txt`.
5. In GitHub repo Settings > Pages, set your custom domain and enforce HTTPS.
