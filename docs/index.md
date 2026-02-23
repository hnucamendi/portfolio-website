# Project Documentation Index — portfolio-website

> **Primary AI Reference** — Start here when using AI-assisted development on this project.
> All documentation was generated via deep scan on 2026-02-22.

---

## Project Overview

| Property | Value |
|---|---|
| **Project** | portfolio-website |
| **Owner** | Harold Nucamendi |
| **Type** | Monolith — Web Frontend SPA |
| **Primary Language** | TypeScript |
| **Framework** | React 18.2 |
| **Build Tool** | Vite 5 + SWC |
| **Styling** | Styled Components 6.1 (CSS-in-JS, ThemeProvider) |
| **Architecture** | Stateless component-based SPA with CSS-in-JS design system |
| **Data Strategy** | Static JSON imports (build-time) |
| **Backend** | None — fully static |
| **Routing** | None — single page, anchor scroll |
| **State** | Local component state only (React useState) |
| **Testing** | None configured |
| **Deployment** | Unknown — produces static `dist/` bundle |

---

## Quick Reference

### Entry Points
| File | Purpose |
|---|---|
| `index.html` | HTML shell — mounts React at `#root` |
| `src/main.tsx` | JS entry — ThemeProvider + GlobalStyles + React root |
| `src/App.tsx` | Root component — assembles page layout |
| `vite.config.js` | Build configuration |

### Content Files (edit to update portfolio)
| File | Content |
|---|---|
| `src/data/experienceData.json` | Work experience (3 roles) |
| `src/data/skillsData.json` | Skills by category (4 categories) |
| `src/data/projectData.json` | Projects showcase (6 projects, 2 featured) |

### Key Directories
| Directory | Purpose |
|---|---|
| `src/components/` | All React components (12 files) |
| `src/styles/` | Styled Components definitions (paired per component) |
| `src/data/` | Static JSON content — edit here to update portfolio |
| `src/types/` | TypeScript interfaces |
| `public/images/` | Static assets (portraits, cursors, favicon) |
| `docs/` | This documentation |

### Dev Commands
```bash
npm install       # Install dependencies
npm run dev       # Dev server → http://localhost:5173
npm run build     # Type-check + build → dist/
npm run preview   # Preview production build → http://localhost:4173
```

---

## Generated Documentation

### Core References
- [Project Overview](./project-overview.md) — Executive summary, site sections, quick start, content at a glance
- [Architecture](./architecture.md) — Full technical architecture: design system, component hierarchy, data flow, security, known gaps
- [Source Tree Analysis](./source-tree-analysis.md) — Annotated directory tree with file-level descriptions and key conventions

### Component & UI
- [Component Inventory](./component-inventory.md) — All 12 components: props, styled exports, behavior, reuse assessment

### Data & APIs
- [Data Models](./data-models-main.md) — TypeScript interfaces + JSON schemas for all 3 data files
- [API Contracts](./api-contracts-main.md) — Data access layer (static JSON imports + external links; no HTTP APIs)

### Development
- [Development Guide](./development-guide.md) — Setup, build, content updates, adding sections, common tasks

---

## Existing Documentation

*(None found in project at scan time — no README.md, CONTRIBUTING.md, or ARCHITECTURE.md existed)*

---

## Getting Started

### For AI-Assisted Development

When working on this project with an AI agent, provide this index as context:

```
Reference: docs/index.md
```

**For UI/component work** → also load:
- `docs/component-inventory.md`
- `docs/architecture.md` (Design System section)
- `docs/source-tree-analysis.md`

**For content updates** → load:
- `docs/data-models-main.md`

**For understanding project structure** → load:
- `docs/architecture.md`
- `docs/source-tree-analysis.md`

### For Human Developers

```bash
# 1. Clone and install
git clone <repo-url> && cd portfolio-website
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. To update portfolio content (no code changes needed):
#    Edit: src/data/projectData.json
#          src/data/experienceData.json
#          src/data/skillsData.json

# 4. Build for production
npm run build
# → Output in dist/
```

---

## Architecture Summary

```
index.html  ──►  src/main.tsx (ThemeProvider + GlobalStyles)
                      │
                  src/App.tsx  (root component)
                 ┌────┴─────────────────────────────────┐
            Header.tsx          HeroSection.tsx          │
           [stateful]           ExperienceSection.tsx    │
                │               SkillsSection.tsx        │
          Navigation.tsx        ProjectsSection.tsx      │
          [props from Header]   Footer.tsx               │
                 └────────────────────────────────────────┘

Data flow:  src/data/*.json  →  components  →  styled UI
State:      Header.tsx only (mobile menu toggle)
No routing · No API calls · No global state · Fully static
```

---

## Known Gaps (as of 2026-02-22)

| Gap | Impact | Recommendation |
|---|---|---|
| No CI/CD pipeline | Manual deployment only | Add GitHub Actions workflow |
| No test suite | No regression protection | Add Vitest + React Testing Library |
| No README.md | Poor discoverability | Add basic README to project root |
| No `.nvmrc` | Node version undocumented | Pin with `.nvmrc` |
| Deployment target unknown | Undocumented ops | Document hosting platform |
| `HeroSection` hardcoded | Inconsistent with other sections | Migrate to `heroData.json` |

---

## Documentation Metadata

| Property | Value |
|---|---|
| Scan date | 2026-02-22 |
| Scan level | Deep (critical directories + source files read) |
| Workflow version | 1.2.0 |
| Files generated | 8 |
| Total documented | 32 source files, 12 components, 3 data schemas |
| State file | `docs/project-scan-report.json` |
