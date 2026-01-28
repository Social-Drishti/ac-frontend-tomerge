# Copilot Instructions - AstroChitra Astrology Platform

## Project Overview

React 19 + Vite-based astrology services platform with Tailwind CSS 4. Marketing-focused site with multiple astrology reading pages, custom navigation, and section-based home page architecture.

## Tech Stack & Build

- **Framework**: React 19 (with React Router DOM v7)
- **Build Tool**: Vite 7 (rolldown-vite) with HMR
- **Styling**: Tailwind CSS 4 with `@tailwindcss/vite` plugin
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge (for `cn()` utility)

### Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## Architecture Patterns

### 1. File Organization

```
src/
  ├── pages/         # Full page components (route targets)
  ├── sections/      # Page section components (Hero, Services, etc.)
  ├── components/
  │   ├── layout/    # Navbar, Footer
  │   ├── ui/        # Reusable UI primitives (Button, Card, Input)
  │   └── common/    # Shared components (Logo, TrustLogos)
  ├── data/          # Static data exports (services, testimonials, FAQs)
  ├── hooks/         # Custom React hooks
  └── styles/        # Global CSS files
```

### 2. Routing Pattern

- **Centralized routing** in [AppRouter.jsx](src/AppRouter.jsx) using React Router DOM
- Pages are lazy-loaded with simple imports (no code splitting yet)
- All routes defined in single `<Routes>` block for easy overview
- Page components import their own Navbar/Footer (not in layout wrapper)

### 3. Home Page Architecture

The [home.jsx](src/pages/home.jsx) page follows a **section composition pattern**:

```jsx
<Navbar />
<main>
  <Hero />
  <Services />
  <WhyAstrology />
  <Clarity />
  <Guidance />
  <Testimonial />
  <Impact />
  <Newsletter />
  <CTA />
  <FAQ />
</main>
<Footer />
```

Each section is a self-contained component in `src/sections/` that handles its own layout and spacing.

### 4. Styling Approach

**Hybrid system**: Tailwind utility classes + custom CSS files + Traditional Indian Aesthetic

- **Primary**: Tailwind utility classes for layout/spacing
- **Custom CSS**: For complex components (Navbar, Hero) with `.css` files
- **Ornamental styles**: Traditional Indian decorative elements in `styles/ornamental.css`
- **Custom imports**: `@import "tailwindcss"` in [index.css](src/index.css), followed by variables, ornamental, and global styles
- **Theme colors** defined in [tailwind.config.js](tailwind.config.js) and [variables.css](src/styles/variables.css):
  - **Terracotta palette**: `#B8977A`, `#A87D5F`, `#8B6F47` (clay/terracotta tones)
  - **Sandstone**: `#C9B8A3`, `#D4C4B0`, `#E8DCC8` (warm stone backgrounds)
  - **Bronze/Gold**: `#8B6F47`, `#D4AF6A` (traditional accents)
  - **Text**: `#3D2F1F`, `#6B5437` (deep brown ink)
- **Visual aesthetic**: Warm terracotta, carved stone textures, traditional Indian ornaments inspired by deity sculptures
- **Decorative elements**: Ornamental dividers, carved patterns, mandala backgrounds, embossed effects

### 5. Component Patterns

#### UI Components

- Use **variant-based styling** (see [Button.jsx](src/components/ui/Button.jsx))
- Leverage `cn()` utility for conditional classes (imported from `../../lib/utils`)
- **Note**: `src/lib/utils.js` is referenced but missing - create it with:

  ```js
  import { clsx } from "clsx";
  import { twMerge } from "tailwind-merge";

  export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  ```

#### Data-Driven Sections

- Static data lives in `src/data/` as named exports
- Sections import and map over data arrays (see [Services.jsx](src/sections/Services.jsx) using carousel pattern)

#### Layout Components

- **Navbar**: Custom CSS with accordion dropdowns for "Reading" and "Resources" menus (state managed with `useState`)
- **Footer**: Grid layout with company info, links, and embedded Google Maps iframe
- Both use maroon theme (#800000) and logo image at `/Astrochitra-color-logo.png`

### 6. Vite Configuration

- Path alias: `@` → `/src` (configured in [vite.config.js](vite.config.js))
- Plugins: `@vitejs/plugin-react` + `@tailwindcss/vite`
- Note: Using `rolldown-vite@7.2.5` override for performance

### 7. Design Systems

The project now includes a **Palmistry Design System** with editorial, authority-driven aesthetics:

- **Location**: `docs/PALMISTRY_DESIGN_SPEC.md` (complete specification)
- **Design Tokens**: `src/styles/palmistry-tokens.css`
- **Implementation**: `src/pages/Palmistry.jsx` + `Palmistry.css`

**Key Design Principles:**

- Warm parchment background (#FAF8F3) for calm, editorial feel
- Serif typography (Playfair Display) for headings only
- Two-column layout (70% main content, 30% sidebar)
- Minimal borders, thin dividers (1px)
- Restrained color palette (saddle brown accent #8B4513)
- WCAG AA compliant contrast ratios
- Keyboard-first navigation with clear focus states
- Dark mode support via prefers-color-scheme

When creating new service pages (numerology, vastu, etc.), reference the Palmistry design system for consistent editorial aesthetics.

Several referenced files are empty or missing:

- `src/lib/utils.js` - needs `cn()` utility function
- `src/components/ui/Card.jsx` - empty
- `src/components/ui/Input.jsx` - empty
- `src/hooks/useScrollAnimations.js` - empty
- `src/styles/variables.css` - empty
- `src/data/testimonials.js` - empty

When implementing these, follow the existing patterns (variant-based components, export data arrays, etc.).

## Code Conventions

### ESLint Rules

- Unused vars allowed if starting with uppercase (React components): `^[A-Z_]`
- React Hooks rules enforced (recommended config)
- Fast Refresh enabled for instant updates

### Naming

- **Pages**: PascalCase files with lowercase routes (`AboutUs.jsx` → `/about`)
- **Sections**: PascalCase, descriptive names (Hero, CTA, FAQ)
- **Components**: PascalCase with feature grouping (ui/, layout/, common/)
- **Data files**: lowercase with `.js` extension

### Import Style

- React hooks imported as named: `import { useState } from "react"`
- Default exports for components
- Data exported as named exports or default arrays

## Development Notes

### Known Issues

1. `npm run dev` currently exits with code 1 - check terminal for specific error
2. Missing `cn()` utility breaks Button component styling
3. Several placeholder sections need content (Hero, Testimonial)

### When Adding New Features

1. **New pages**: Add route in [AppRouter.jsx](src/AppRouter.jsx), create in `src/pages/`
2. **New sections**: Create in `src/sections/`, import into relevant page
3. **Reusable UI**: Add to `src/components/ui/` with variant support
4. **Static data**: Create in `src/data/` as exports

### Astrology-Specific Routes

Reading-related pages under `/reading` dropdown:

- Natal Chart, Synastry, Progressions, Compatibility
- Lunar Nodes, Retrogrades, Aspects, Career Astrology, Transits

Resource pages:

- Calculator (`/calculator`)
- Calendar (`/calendar`)

All need implementation - currently just routed page shells.
