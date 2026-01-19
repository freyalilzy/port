# Communication Studies Portfolio

A professional portfolio site built with Astro showcasing communication studies projects.

## Features

- 🎨 Clean, professional design optimized for academic portfolios
- 📝 Content-driven with Astro's content collections
- 🚀 Static site generation for fast performance
- 📱 Responsive design for all devices
- 🔍 SEO optimized with proper meta tags

## Project Structure

```
/
├── site/                      # Astro project
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── content/          # Portfolio content (markdown)
│   │   │   └── portfolio/    # Individual portfolio pieces
│   │   ├── pages/            # Routes and pages
│   │   └── styles/           # Global styles
│   └── public/               # Static assets
├── nix/                      # Nix configuration
└── .github/workflows/        # GitHub Actions
```

## Local Development

### Using Nix (Recommended)

```bash
# Enter development shell
nix develop

# Install dependencies
cd site && pnpm install

# Start dev server
pnpm run dev
```

### Without Nix

```bash
# Requires Node.js 20+ and pnpm
cd site
pnpm install
pnpm run dev
```

Visit `http://localhost:4321` to see your site.

## Adding New Portfolio Items

1. Create a new markdown file in `site/src/content/portfolio/`
2. Add frontmatter with required fields:

```markdown
---
title: "Your Project Title"
description: "Brief description for the card"
gradient: primary  # or secondary, accent
date: 2026-01-19
tags: ["tag1", "tag2"]
---

# Your Project Title

Your content here...
```

3. The site will automatically generate a page and add a card to the homepage!

## Deploying to GitHub Pages

### Setup

1. Update `site/astro.config.mjs`:
   - Replace `USERNAME` with your GitHub username
   - Replace `REPO_NAME` with your repository name

2. In your GitHub repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

3. Push to main branch - the site will deploy automatically!

### Custom Domain (Optional)

To use a custom domain:

1. Update `site/astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://yourdomain.com',
     // Remove or comment out the base property
   });
   ```

2. Add a `CNAME` file to `site/public/` with your domain

3. Configure DNS settings with your domain provider

## Building for Production

```bash
cd site
pnpm run build
```

The built site will be in `site/dist/`.

## Technology Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: Vanilla CSS with custom design system
- **Fonts**: Crimson Pro (serif), Inter (sans-serif)
- **Package Manager**: pnpm
- **Development Environment**: Nix (optional)

## License

This project structure is available for use. Content should be replaced with your own work.
