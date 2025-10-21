# Rosely Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5330f8d6-4a92-49dc-8bb7-2fd3f1f459c4/deploy-status)](https://app.netlify.com/projects/rosely/deploys)

This contains the documentation of the [Rosely](https://github.com/hellotham/Rosely) design system, written in [Astro](https://astro.build) using the [Starlight](https://starlight.astro.build) template.

It is currently hosted at [Netlify](https://netlify.com). The website address is https://rosely.hellotham.com

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images are in `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Deploy to Netlify

[Read the full deployment guide here.](https://docs.astro.build/en/guides/deploy/netlify/)

Follow the instructions to [build your site locally]((https://docs.astro.build/en/guides/deploy/#building-your-site-locally). After building, you will have a `.netlify/` folder containing both [Netlify Functions](https://docs.netlify.com/functions/overview/) in the `.netlify/functions-internal/` folder and [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) in the`.netlify/edge-functions/` folder.

To deploy your site, install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) and run:

```sh
netlify deploy
```

The [Netlify Blog post on Astro](https://www.netlify.com/blog/how-to-deploy-astro/) and the [Netlify Docs](https://docs.netlify.com/integrations/frameworks/astro/) provide more information on how to use this integration to deploy to Netlify.
