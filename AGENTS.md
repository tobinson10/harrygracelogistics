# AGENTS.md

This document provides an overview of the project architecture for developers and AI agents working on this codebase.

## Project Overview

A premium single-page marketing website for **Harrygrace International Logistics Venture**, a Lagos-based international logistics company. The site serves as a marketing and lead-generation platform with 11 major sections.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── components/
│   ├── Nav.tsx              # Sticky nav, scroll-aware active state, dark mode toggle, mobile menu
│   ├── Hero.tsx             # Full-screen image slideshow with animated headline and stats
│   ├── About.tsx            # Company story + animated counter stats (IntersectionObserver)
│   ├── Services.tsx         # 8 service cards in a responsive grid
│   ├── Tracking.tsx         # Interactive shipment tracking UI with step-by-step demo
│   ├── WhyUs.tsx            # 6 feature highlights with diagonal split layout
│   ├── Coverage.tsx         # SVG world map with route animations + regional coverage cards
│   ├── Testimonials.tsx     # Auto-sliding testimonial carousel with manual controls
│   ├── Gallery.tsx          # Logistics image grid with hover overlays
│   ├── FAQ.tsx              # Animated accordion with 8 questions
│   ├── Contact.tsx          # Form with validation, WhatsApp CTA, Google Maps embed
│   ├── Footer.tsx           # Full footer with newsletter, social links, quick links
│   └── FloatingActions.tsx  # Floating WhatsApp button + back-to-top button
├── routes/
│   ├── __root.tsx           # HTML shell, Google Fonts (Bebas Neue, Syne, Plus Jakarta Sans), SEO meta
│   └── index.tsx            # Composes all 11 section components; manages dark mode state
├── styles.css               # Tailwind import, @theme tokens, keyframe animations, utility classes
└── router.tsx               # TanStack Router setup
```

## Key Architecture Decisions

### Single-Page Layout
All content lives in `src/routes/index.tsx` via composed section components. This is a pure marketing landing page with no sub-routes needed.

### Tailwind CSS 4 Custom Tokens
Uses `@theme` in `styles.css` instead of `tailwind.config.js`. Custom colors/fonts are available as CSS variables (`var(--color-navy)`, `var(--color-gold)`) and used via `style={}` inline props throughout components.

**Brand colors:**
- `--color-navy: #0B1E3D`
- `--color-gold: #C9A84C`
- `--color-slate: #F4F7FC`

**Brand fonts:**
- `--font-display: "Bebas Neue"` — hero display headings
- `--font-heading: "Syne"` — section titles, labels, buttons
- `--font-body: "Plus Jakarta Sans"` — body text

### Scroll Animations
Every section uses `IntersectionObserver` + `useState(visible)`. Sections start `opacity-0 translate-y-8` and transition to `opacity-100 translate-y-0` when they enter the viewport.

### Dark Mode
Managed at `HarrygraceHome` level in `index.tsx`. Toggled via `document.documentElement.classList.toggle('dark')`, persisted to `localStorage('hgl-dark')`. The `Nav` receives `dark` prop for the toggle button icon.

## Coding Conventions

- Components: PascalCase files
- Brand colors via `style={}` with CSS variables (not Tailwind classes) for consistency
- Inline `style` overrides are preferred for brand-specific values; Tailwind handles layout/spacing
- No `cn()` utility needed — conditional classes via template literals
- All scroll-to-section via `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`

## Business Context

- **Company**: Harrygrace International Logistics Venture
- **HQ**: 45 Apapa Road, Apapa, Lagos, Nigeria
- **Email**: info@harrygrace-logistics.com
- **WhatsApp**: +234 801 234 5678
- **Tracking ID format**: `HGL-YYYY-XXXX`
- **Coverage**: 47+ countries, 6 regions

## Development Commands

```bash
npm run dev      # Dev server on http://localhost:3000
npm run build    # Production build
netlify dev      # Local Netlify emulation on http://localhost:8888
```
