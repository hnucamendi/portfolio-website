# Architecture — portfolio-website

**Owner:** Harold Nucamendi
**Type:** Personal Portfolio — Web Frontend SPA
**Generated:** 2026-02-22
**Scan Level:** Deep

---

## Executive Summary

`portfolio-website` is a **fully static, single-page React application** serving as Harold Nucamendi's personal portfolio. It showcases professional experience, skills, and projects through a clean dark-themed UI with smooth scroll navigation.

The architecture is intentionally minimal: no backend, no database, no authentication, no routing library, and no global state management. All content is stored in static JSON files imported at build time, making the site trivially cheap to host and maintain. The entire stack compiles down to a static `dist/` bundle deployable to any static host (GitHub Pages, Vercel, Netlify, S3, etc.).

The most architecturally significant element is the **CSS-in-JS design system** — a centralized theme object (colors, typography scale, spacing, shadows, transitions, border-radius) distributed via Styled Components `ThemeProvider`, with per-component style files that consume theme tokens consistently.

---

## Technology Stack

| Category | Technology | Version | Role |
|---|---|---|---|
| Language | TypeScript | ^5.2.2 | Primary language; strict mode |
| UI Framework | React | ^18.2.0 | Component rendering |
| Build Tool | Vite | ^5.2.0 | Dev server + production bundler |
| Compiler | SWC (`@vitejs/plugin-react-swc`) | ^3.5.0 | Fast TypeScript/JSX transform |
| CSS-in-JS | Styled Components | ^6.1.8 | Component styling + theming |
| Theming | ThemeProvider (SC built-in) | — | Design token distribution |
| Typography | IBM Plex Sans + Montserrat | Google Fonts | Body + heading fonts |
| Animation | SC `keyframes` + `css` helpers | — | Entrance animations |
| State | React `useState` | built-in | Local component state only |
| Data | Static JSON imports | — | Content data layer |
| Linting | ESLint + `@typescript-eslint` | ^8.57 / ^7.2 | Code quality enforcement |
| Module System | ES Modules | native | `"type": "module"` in package.json |

**Runtime dependencies:** `react`, `react-dom`, `styled-components` only.
**No routing library. No HTTP client. No state management library.**

---

## Architecture Pattern

**Pattern:** Stateless Component-Based SPA with CSS-in-JS Design System

```
┌─────────────────────────────────────────────────────────┐
│                    Browser Runtime                       │
│                                                          │
│   index.html  ──►  src/main.tsx                         │
│                         │                                │
│                  ThemeProvider (theme object)            │
│                  GlobalStyles (CSS reset + typography)   │
│                         │                                │
│                     App.tsx                              │
│              ┌──────────┴──────────┐                    │
│         Header.tsx           Sections (stateless)        │
│        (only stateful)     ┌──────────────────┐         │
│              │              │  HeroSection      │         │
│       Navigation.tsx        │  ExperienceSection│         │
│    (receives props)         │  SkillsSection    │         │
│                             │  ProjectsSection  │         │
│                             └──────────────────┘         │
│                                Footer.tsx                │
└─────────────────────────────────────────────────────────┘
```

**Key architectural properties:**
- **Unidirectional data flow:** JSON files → components → rendered UI
- **No client-side routing:** Single HTML page; anchor-based smooth scroll
- **Minimal state surface:** Only `Header.tsx` uses `useState` (mobile menu toggle)
- **Fully static:** No API calls, no server-side logic, no dynamic data fetching
- **Build-time data:** All content resolved at `vite build` time via JSON imports

---

## Design System

The design system is defined as a theme object in `src/main.tsx` and distributed via Styled Components `ThemeProvider`. All styled components access tokens via `({ theme }) => theme.Token.Path`.

### Color Palette (Open Color — Dark Mode)

| Token | Value | Usage |
|---|---|---|
| `Background.One` | `#212529` (Gray 9) | Page background |
| `Background.Two` | `#343a40` (Gray 8) | Card/elevated surfaces |
| `Background.Three` | `#495057` (Gray 7) | Borders, dividers |
| `Foreground.One` | `#f8f9fa` (Gray 0) | Primary text, headings |
| `Foreground.Two` | `#f1f3f5` (Gray 1) | Body text |
| `Foreground.Three` | `#e9ecef` (Gray 2) | Active link text |
| `Accent.Primary` | `#22b8cf` (Cyan 5) | Links hover, underline bars |
| `Accent.Light` | `#3bc9db` (Cyan 4) | Lighter accent |
| `Accent.Dark` | `#15aabf` (Cyan 6) | Darker accent |
| `Text.Muted` | `#868e96` (Gray 6) | Secondary/muted text |

### Typography Scale

| Token | px | rem | Usage |
|---|---|---|---|
| `Text.H1` | 61px | 3.8125rem | Display heading |
| `Text.H2` | 49px | 3.0625rem | Page-level heading |
| `Text.H3` | 39px | 2.4375rem | Section heading (used for `SectionTitle`) |
| `Text.H4` | 31px | 1.9375rem | Sub-section |
| `Text.H5` | 25px | 1.5625rem | Card heading (header logo) |
| `Text.H6` | 20px | 1.25rem | Small heading |
| `Text.Normal` | 16px | 1rem | Body |
| `Text.Small` | 13px | 0.8125rem | Small text |
| `Text.XSmall` | 10px | 0.625rem | Micro text |

**Fonts:** `IBM Plex Sans` (body), `Montserrat` (headings + links + logo)

### Spacing Scale

| Token | Value |
|---|---|
| `Spacing.XS` | 0.5rem |
| `Spacing.SM` | 1rem |
| `Spacing.MD` | 1.5rem |
| `Spacing.LG` | 2rem |
| `Spacing.XL` | 3rem |
| `Spacing.XXL` | 4rem |
| `Spacing.Section` | 6rem (section padding) |

### Other Tokens

- **Shadows:** SM / MD / LG / Hover (rgba black with varying opacity + blur)
- **Transitions:** Fast (150ms) / Normal (250ms) / Slow (350ms) — all `ease`
- **BorderRadius:** SM (8px) / MD (12px) / LG (16px) / Full (9999px)

---

## Component Architecture

### Component Hierarchy

```
main.tsx  (ThemeProvider + GlobalStyles)
└── App.tsx  (page shell)
    ├── Header.tsx          [STATEFUL] owns isMobileMenuOpen
    │   └── Navigation.tsx  receives {isMobileMenuOpen, toggleMobileMenu}
    ├── HeroSection.tsx     [stateless] hardcoded name/title/tagline
    ├── ExperienceSection.tsx [stateless] ← experienceData.json
    ├── SkillsSection.tsx   [stateless] ← skillsData.json
    ├── ProjectsSection.tsx [stateless] ← projectData.json (sorts featured first)
    └── Footer.tsx          [stateless] hardcoded contact links
```

### Layout Primitives

| Component | Styled Base | Purpose |
|---|---|---|
| `Section` | `<section>` | Semantic section wrapper with `id` for anchor scroll |
| `SectionTitle` | `<div>` + `<h2>` | Section heading with cyan `::after` underline bar |
| `Container` | `<div>` | Generic content wrapper |
| `GridContainer` | `<div>` | CSS grid layout wrapper |
| `Card` | `<div>` | Card surface (accepts single `JSX.Element` child) |

### Styling Convention

Each component has a paired style file:

```
src/components/Foo.tsx      ← logic + structure
src/styles/foo.ts           ← all styled-components for Foo
```

Transient props (SC 6.x pattern) are prefixed with `$`:
- `ProjectCard` uses `$featured` to conditionally style featured cards
- `MobileNav` uses `$isOpen` to control visibility

### Animation System (`src/styles/animations.ts`)

| Export | Type | Description |
|---|---|---|
| `fadeInUp` | `keyframes` | Fade in while moving up 20px |
| `fadeIn` | `keyframes` | Simple opacity fade in |
| `slideInLeft` | `keyframes` | Fade in while sliding from left 20px |
| `fadeInUpAnimation` | `css` | Ready-to-use animation CSS for fadeInUp (0.5s ease) |
| `fadeInAnimation` | `css` | Ready-to-use animation CSS for fadeIn (0.4s ease) |
| `staggerDelay(index)` | `css` | Generates `animation-delay` for staggered list animations |

---

## Data Architecture

**No database.** All data is static JSON stored in `src/data/` and imported at build time.

### Data Flow

```
src/data/*.json
    │  (Vite resolveJsonModule — build-time import)
    ▼
src/components/*.tsx
    │  (typed cast: `import data from "…json" as Interface[]`)
    ▼
Styled UI components (.map() rendering)
```

### Content Files

| File | Type | Records | Consumer |
|---|---|---|---|
| `src/data/experienceData.json` | `Experience[]` | 3 roles | `ExperienceSection.tsx` |
| `src/data/skillsData.json` | `SkillCategory[]` | 4 categories | `SkillsSection.tsx` |
| `src/data/projectData.json` | `Project[]` | 6 projects | `ProjectsSection.tsx` |

### TypeScript Interfaces (`src/types/index.ts`)

- `Experience` — role, company, location, dates, achievements[], technologies[]
- `SkillCategory` — category, skills[]
- `Skill` — name
- `Project` — id, title, description, technologies[], links[], featured?
- `ProjectLink` — title, link

See `docs/data-models-main.md` for full schemas.

---

## API Design

**No external API calls.** This is a fully static site.

- No `fetch()`, `axios`, `XHR`, or HTTP client used anywhere
- No REST, GraphQL, or RPC endpoints
- No WebSockets or SSE
- External links (`<a>` tags) in `Footer.tsx` and `ProjectsSection.tsx` use `rel="noopener noreferrer"`

See `docs/api-contracts-main.md` for complete data access documentation.

---

## Responsive Design

Three breakpoints defined in `src/styles/index.ts` (GlobalStyles):

| Breakpoint | Width | Changes |
|---|---|---|
| Desktop | > 1200px | Max-width 1200px, centered |
| Tablet | ≤ 1200px | Full width, same padding |
| Mobile | ≤ 768px | Smaller font sizes, reduced headings, mobile nav |
| Small mobile | ≤ 480px | Reduced padding |

Mobile navigation:
- Desktop: horizontal `<nav>` links
- Mobile: hamburger button (`☰` / `✕`) toggles full-width `MobileNav` overlay
- State owner: `Header.tsx` (`isMobileMenuOpen: boolean`)

---

## Static Assets

**Location:** `public/images/` (served as-is by Vite, not processed/bundled)

| Asset | File | Usage |
|---|---|---|
| Portrait (primary) | `harold-portrait.webp` | Hero section (WebP format) |
| Portrait (fallback) | `harold-portrait2.jpg` | Alternate portrait |
| Custom cursor | `custom-cursor.png` | Default cursor state |
| Custom cursor hover | `custom-cursor-hover.png` | Hover cursor state |
| Custom cursor active | `custom-cursor-active.png` | Click cursor state |
| Favicon (PNG) | `favicon-32x32.png` | Browser tab icon |
| Favicon (ICO) | `favicon.ico` | Legacy browser fallback |
| Cat photos | `kitty1.JPG`, `kitty2.JPG` | Personal/Easter egg assets |

---

## Development Workflow

```bash
npm install          # Install dependencies (one-time)
npm run dev          # Start dev server → http://localhost:5173 (HMR enabled)
npm run build        # Type-check (tsc) + build → dist/
npm run preview      # Preview production build → http://localhost:4173
```

**No environment variables required.** No `.env` file needed.

To update content: edit JSON files in `src/data/` — hot reload handles the rest.

See `docs/development-guide.md` for full setup instructions.

---

## Deployment Architecture

**No deployment pipeline configured** as of scan date (2026-02-22).

**Build output:** `dist/` — standard static HTML/JS/CSS bundle compatible with:

| Host | Notes |
|---|---|
| GitHub Pages | Deploy `dist/` via `gh-pages` branch or Actions |
| Vercel | Auto-detects Vite; zero-config deploy |
| Netlify | Auto-detects Vite; zero-config deploy |
| AWS S3 + CloudFront | Manual or Terraform-managed |
| Any static file server | Just serve `dist/` |

**Recommended next step:** Add a CI/CD pipeline (GitHub Actions) to auto-deploy on push to `master`.

---

## Testing Strategy

**No test suite configured** as of scan date.

- No test runner (Jest, Vitest, Playwright, Cypress)
- No test files (`*.test.ts`, `*.spec.ts`, `*.test.tsx`)
- No test scripts in `package.json`

**Recommended additions:**
- **Unit/component:** Vitest + `@testing-library/react` (native Vite ecosystem)
- **E2E:** Playwright (lightweight, fast)
- **Priority areas to test:** Navigation scroll behavior, project sort logic, mobile menu toggle

---

## Security Considerations

- **No user inputs** — no forms, no authentication, no data collection
- **No secrets** — no API keys or tokens (`.env` gitignored for safety)
- **XSS surface:** Minimal — all content is static strings from controlled JSON files
- **External links:** All use `rel="noopener noreferrer"` to prevent tab-napping
- **No CSP configured** — could add via meta tag or hosting platform headers

---

## Known Gaps & Recommendations

| Area | Status | Recommendation |
|---|---|---|
| Deployment | No CI/CD | Add GitHub Actions workflow to auto-deploy |
| Testing | No test suite | Add Vitest + React Testing Library |
| Node version pin | Not pinned | Add `.nvmrc` with target Node version |
| Deployment target | Unknown | Document hosting platform |
| No README | Missing | Add basic README.md to project root |
| `HeroSection` | Hardcoded strings | Consider moving to `heroData.json` for consistency |
