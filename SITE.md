# Personal site

The Astro site lives alongside the GitHub profile `README.md`. Its dark, narrow, minimal layout follows the visual style of the supplied ITMO page and uses Inter.

## Local development

```sh
npm install
npm run dev
```

Use `npm run build` for a static build and `npm run check` for Astro and TypeScript diagnostics.

## Publishing articles

Add Markdown files to `src/content/articles/en/` or `src/content/articles/ru/`. Matching file names link translations. Each article needs frontmatter like this:

```yaml
---
title: 'Article title'
description: 'A short summary.'
published: 2026-09-28
language: en
tags: ['Engineering']
draft: false
---
```

Set `draft: true` to hide an unfinished article. A translation is optional.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The site will be available at `https://yaroslavlky.github.io/yaroslavlky/`.

The `site` and `base` values in `astro.config.mjs` target that URL. Update both if the repository or host changes.
