# Rosely Documentation - Project Context

This is the documentation website for the **Rosely** design system, a simple and uncluttered design system based on millennial pinks and purples.

## Project Overview

*   **Type:** Documentation Website
*   **Framework:** [Astro](https://astro.build/)
*   **Theme:** [Starlight](https://starlight.astro.build/)
*   **Content Format:** [Markdoc](https://markdoc.dev/) (via `@astrojs/markdoc`)
*   **Deployment:** Netlify

## Key Technologies

*   **Astro v5:** Modern web framework for content-driven websites.
*   **Starlight:** Documentation theme for Astro.
*   **Markdoc:** A powerful, Markdown-compatible content format used for structured documentation.
*   **TypeScript:** Used for configuration and content schemas.
*   **Pnpm:** Recommended package manager.

## Directory Structure

*   `src/content/docs/`: Contains the documentation content. Files use `.mdoc` (Markdoc) or `.md` (Markdown) extensions.
*   `src/components/`: Custom Astro components integrated with Markdoc (e.g., `Swatch.astro`, `SwatchGroup.astro`, `Download.astro`).
*   `src/assets/`: Local images and assets used in documentation.
*   `public/`: Static assets like favicons and downloadable theme files.
*   `src/styles/custom.css`: Custom CSS overrides for Starlight.

## Commands

All commands are run from the project root using `pnpm`:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Start the local development server at `localhost:4321`. |
| `pnpm build` | Build the production site to `dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro check` | Run Astro's built-in diagnostic tool. |
| `pnpm clean` | Remove build artifacts and `node_modules`. |

## Development Conventions

### Content Authoring
*   Prefer `.mdoc` (Markdoc) for new documentation files to leverage custom components.
*   Custom Markdoc tags are defined in `markdoc.config.mjs`:
    *   `{% swatch color="#..." code="roselyX" name="..." pantone="..." %}`: Displays a color swatch.
    *   `{% swatchgroup name="..." %}`: Groups swatches together.
    *   `{% download href="..." title="..." description="..." %}`: Displays a download link for theme files.

### Styling
*   Global overrides should be added to `src/styles/custom.css`.
*   Starlight's CSS custom properties (starting with `--sl-`) should be used for consistency with the theme.

### Components
*   Components are located in `src/components/`.
*   When adding new custom tags to Markdoc, remember to register them in `markdoc.config.mjs`.

## Deployment
The project is configured for deployment on **Netlify** using the `@astrojs/netlify` adapter.
