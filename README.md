# ICpEP-SE Mapúa Website Development Guide

This repository contains the development source code for the Mapúa Institute of Computer Engineers of the Philippines Student Edition (Mapúa-ICpEP.SE) website. The platform is built using AstroJS and Tailwind CSS v4, featuring a technical blueprint HUD design theme operating over a dark `#121212` background with `#38BDF8` electric blue accent borders.

## Repository Architecture & Branching Strategy

This repository utilizes a strict branching workflow to maintain production stability. There are two primary branches:

* **`main`**: The production-ready branch. Code here should always be stable and deployable.
* **`development`**: The active integration branch. All approved features and fixes are merged here before being pushed to `main`.

**Contribution Workflow:**

1. Never commit directly to `main` or `development`.
2. For any feature addition, bug fix, or UI improvement, ensure your local repository is up to date and check out a new branch pulling directly from `development` (e.g., `feature/merch-storefront` or `bugfix/nav-alignment`).
3. Develop and test your changes locally.
4. Submit a Pull Request (PR) against the `development` branch for review.

## Prerequisites & Installation

Ensure you have Node.js (v22.23.4 or higher) installed on your system.

**1. Clone the repository and checkout development:**

```bash
git clone https://github.com/Turq0ise/ICpEP.SE-MAPUA_Website.git
cd ICpEP.SE-MAPUA_Website
git checkout development

```

**2. Install dependencies:**

```bash
npm install

```

**3. Start the local development server:**

```bash
npm run dev

```

The site will be available locally at `http://localhost:4321`.

**4. Build for production:**

```bash
npm run build

```

## Directory Structure

* **`src/pages/`**: Contains the core routing logic. Static pages like `about.astro`, `faqs.astro`, and `merch.astro` live here. Dynamic collections are handled in subdirectories (e.g., `src/pages/updates/[id].astro`).
* **`src/components/`**: Reusable UI elements such as `Navbar.astro`, `Footer.astro`, `ComingSoon.astro`, and `LandingHeroCarousel.astro`.
* **`src/styles/`**: Centralized design system. `global.css` is the single source of truth for theme variables and semantic component classes.
* **`src/content/`**: Markdown files for database posts, news updates, and organization announcements.

## Architecture & Design System

The project design system is strictly decoupled from the HTML markup. All global design rules, typography variables, and semantic components are centralized within the `src/styles/global.css` file utilizing Tailwind v4's `@theme` and `@layer components` directives.

### Typography Mapping

The website adheres to a standardized two-font system:

* **Krona One:** Exclusively utilized for all structural headings.
* **SUSE:** Applied to all body copy, UI elements, and descriptive text.

### Semantic Utility Classes

To maintain clean HTML and guarantee visual uniformity, avoid hardcoding Tailwind utility strings. Use the following semantic classes provided in `global.css`:

* `.text-page-title`: Primary page headers (e.g., Page Titles).
* `.text-section-heading`: Standard section dividers and secondary headers.
* `.text-sub-heading`: Tertiary headers and component titles.
* `.text-card-title`: Titles for article cards, grids, and feature blocks.
* `.text-supertitle`: Small overhead labels (e.g., officer roles or status indicators).
* `.text-body-primary`: Main paragraph and descriptive text.
* `.text-body-secondary`: Muted, supporting, or auxiliary text.
* `.text-nav-button`: Interactive buttons and navigation links.
* `.text-meta`: Metadata lines, including author credits and dates.
* `.text-badge`: Standardized tags that natively apply component padding and text colors.

## Content Management

Organization updates and database posts are driven by Markdown. When creating new updates:

1. Place the `.md` file in the appropriate collection directory.
2. Ensure the frontmatter (title, author, date, tags, image) is properly formatted.
3. The dynamic route (`src/pages/updates/[id].astro`) will automatically parse the Markdown.
4. The injected Markdown inherits the global `.prose-content` wrapper, ensuring elements like lists, links, and headers automatically map to the design system's semantic typography without manual HTML styling.