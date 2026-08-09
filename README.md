# Josh Roe Portfolio

Personal engineering portfolio for `josh-roe.github.io`, built with React, Vite, JavaScript, and CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Adding your photos

The current gallery images are SVG placeholders in `public/images/`.

Replace the placeholder files or update the image paths in `src/App.jsx`:

- `public/images/profile.svg`
- `public/images/robotics.svg`
- `public/images/ai.svg`
- `public/images/hardware.svg`

## GitHub Pages

This repository includes `.github/workflows/deploy.yml` for Vite + GitHub Pages deployment.

After the workflow file is on GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
