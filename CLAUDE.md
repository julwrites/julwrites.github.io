# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog website built with Astro, deployed to GitHub Pages at [tehj.io](https://tehj.io). The site features blog posts, project showcases, and interactive labs.

## Development Commands

- `pnpm install` - Install dependencies (uses pnpm as package manager)
- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build the site for production
- `pnpm run preview` - Preview the built site locally

## Architecture

### Content Structure
- **Blog posts**: `src/content/blog/` - Markdown files with frontmatter
- **Projects**: `src/content/projects/` - Markdown files with frontmatter
- **Drafts**: `src/content/drafts/` - Unpublished content

### Content Collections
- Uses Astro's content collections with schema validation in `src/content/config.ts`
- Both blog and project collections use the same schema with title, description, pubDate, etc.

### Labs System
- **Static labs**: `public/labs/` - Self-contained HTML/CSS/JS applications
- Labs are served as static files and listed in `src/pages/labs/index.astro`
- Current labs include: Fasting Management, Temperament Quiz, Mortgage Calculator, Singapore Tax Calculator, Cortisol Management

### Framework & Styling
- **Astro** as the main framework with Vue components support
- **Tailwind CSS** for styling with typography and container queries plugins
- **MDX** for enhanced markdown support
- **Vue** for interactive components

### Integrations
- **Sitemap** for SEO
- **RSS feed** for blog content
- **Umami analytics** for tracking

## Key Directories

- `src/pages/` - Astro page components
- `src/layouts/` - Layout components (Layout.astro, BlogPost.astro)
- `src/components/` - Reusable components (Header, Footer, Intro, Links, ProjectListing)
- `src/styles/` - Global CSS and shared styles
- `public/` - Static assets including labs

## Content Management

- Blog and project files follow naming convention: `YYYY_MM_DD_Title.md`
- Frontmatter includes title, description, publication date, and optional hero image
- Drafts are stored in `src/content/drafts/` and not published

## Labs Development

Labs are standalone applications in the `public/labs/` directory. Each lab has:
- `index.html` - Main HTML file
- `app.js` - JavaScript functionality
- `style.css` - Lab-specific styling
- Shared CSS/JS available in `public/labs/shared.css` and `public/labs/shared.js`

To add a new lab:
1. Create a new directory in `public/labs/`
2. Add the lab files (index.html, app.js, style.css)
3. Update the labs array in `src/pages/labs/index.astro`