# Xi Lin Academic Website

Single-page personal academic website for `xilin03.github.io`.

## Stack

- Astro
- Tailwind CSS
- GitHub Pages via GitHub Actions

## Main Content

- Hero introduction
- About
- Selected research
- Experience
- Education
- Contact and CV

## Key Files

- `src/config.ts`: main site content
- `src/pages/index.astro`: page assembly
- `src/components/`: section components
- `.github/workflows/deploy.yml`: GitHub Pages deployment

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Push to `master` and GitHub Actions will build and deploy the site to GitHub Pages.
