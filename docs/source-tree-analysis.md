# Source Tree Analysis — portfolio-website

**Project:** Harold Nucamendi — Personal Portfolio SPA
**Type:** Monolith Web Frontend (React + TypeScript + Vite)
**Generated:** 2026-02-22

---

## Annotated Directory Tree

```
portfolio-website/                        ← Project root
│
├── index.html                            ← ⭐ HTML shell entry point
│                                            Mounts React app at <div id="root">
│                                            Sets page title: "Harold Arriola Nucamendi"
│                                            Applies custom-pointer CSS class to <body>
│
├── package.json                          ← Dependency manifest + npm scripts
│                                            Scripts: dev | build | preview
│
├── vite.config.js                        ← Build tool config (Vite 5 + SWC plugin)
│                                            Minimal: only react() plugin configured
│
├── tsconfig.json                         ← TypeScript compiler config
│                                            Strict mode on; targets ES2020; jsx: react-jsx
│
├── tsconfig.node.json                    ← TS config for Vite config file itself
│
├── eslintrc.cjs                          ← Linting rules
│                                            Extends: eslint:recommended + @typescript-eslint
│                                            Plugins: react-hooks, react-refresh
│
├── package-lock.json                     ← Lockfile (npm)
│
├── public/                               ← Static assets served as-is (not processed by Vite)
│   ├── favicon.ico                       ← Browser tab icon (legacy format)
│   └── images/                           ← All static image assets
│       ├── favicon-32x32.png             ← PNG favicon (referenced in index.html)
│       ├── harold-portrait.webp          ← Owner portrait (WebP — primary format)
│       ├── harold-portrait2.jpg          ← Owner portrait (JPEG — alternate)
│       ├── kitty1.JPG                    ← Cat photo asset
│       ├── kitty2.JPG                    ← Cat photo asset
│       ├── custom-cursor.png             ← Custom cursor: default state
│       ├── custom-cursor-hover.png       ← Custom cursor: hover state
│       └── custom-cursor-active.png     ← Custom cursor: active/click state
│
├── src/                                  ← ⭐ All application source code
│   │
│   ├── main.tsx                          ← ⭐ Application entry point
│   │                                        Creates React root; wraps in ThemeProvider
│   │                                        Defines complete design system theme object
│   │                                        (colors, typography scale, spacing, shadows,
│   │                                         transitions, border-radius)
│   │                                        Theme palette: Open Color (dark grays + cyan)
│   │
│   ├── App.tsx                           ← ⭐ Root component
│   │                                        Composes page layout: Header → main sections → Footer
│   │                                        No routing — single page, static structure
│   │
│   ├── vite-env.d.ts                     ← Vite TypeScript ambient declarations
│   │
│   ├── components/                       ← ⭐ All React UI components
│   │   │
│   │   │   ── Layout Primitives ──
│   │   ├── Section.tsx                   ← Semantic <section> wrapper with anchor ID
│   │   ├── SectionTitle.tsx              ← <h2> with cyan underline accent bar
│   │   ├── Container.tsx                 ← Generic content wrapper
│   │   ├── GridContainer.tsx             ← CSS grid layout wrapper
│   │   ├── Card.tsx                      ← Generic card surface (single JSX.Element child)
│   │   │
│   │   │   ── Page Shell ──
│   │   ├── Header.tsx                    ← ⭐ Sticky header; ONLY stateful component
│   │   │                                    Owns: isMobileMenuOpen state
│   │   │                                    Passes state down to Navigation via props
│   │   ├── Navigation.tsx                ← Desktop nav links + mobile hamburger menu
│   │   │                                    Smooth-scroll to section anchors on click
│   │   │                                    Mobile: toggles ✕ / ☰ icon
│   │   ├── Footer.tsx                    ← Copyright + Email / GitHub / LinkedIn links
│   │   │
│   │   │   ── Data-Driven Sections ──
│   │   ├── HeroSection.tsx               ← Hero banner (hardcoded name, title, tagline)
│   │   ├── ExperienceSection.tsx         ← Timeline of work history ← experienceData.json
│   │   ├── SkillsSection.tsx             ← Categorized skill badge grid ← skillsData.json
│   │   └── ProjectsSection.tsx           ← Project card grid ← projectData.json
│   │                                        Sorts featured projects to top
│   │
│   ├── styles/                           ← ⭐ Styled Components style definitions
│   │   │                                    Convention: one .ts file per component
│   │   │
│   │   ├── index.ts                      ← ⭐ GlobalStyles (CSS reset + base typography
│   │   │                                    + responsive breakpoints: 480/768/1200px)
│   │   │                                    Google Fonts: IBM Plex Sans + Montserrat
│   │   │
│   │   ├── animations.ts                 ← Reusable keyframe animations
│   │   │                                    fadeInUp | fadeIn | slideInLeft
│   │   │                                    staggerDelay(index) helper
│   │   │
│   │   │   ── Component Styles ──
│   │   ├── header.ts                     ← Sticky header (z-100, blur backdrop)
│   │   ├── navigation.ts                 ← Nav, NavLink, MobileMenuButton,
│   │   │                                    MobileNav ($isOpen transient prop), MobileNavLink
│   │   ├── heroSection.ts                ← HeroWrapper, HeroContent, HeroName,
│   │   │                                    HeroTitle, HeroTagline
│   │   ├── experienceSection.ts          ← Timeline, TimelineItem, TimelineHeader,
│   │   │                                    Role, CompanyInfo, Company, Dates,
│   │   │                                    Achievements, Technologies, TechBadge
│   │   ├── skillsSection.ts              ← SkillsGrid, SkillCategory, CategoryTitle,
│   │   │                                    SkillsList, SkillBadge
│   │   ├── projectsSection.ts            ← ProjectsGrid, ProjectCard ($featured transient),
│   │   │                                    ProjectHeader, ProjectTitle, FeaturedBadge,
│   │   │                                    ProjectDescription, ProjectTechnologies,
│   │   │                                    TechTag, ProjectLinks
│   │   ├── footer.ts                     ← Footer layout + links
│   │   │
│   │   │   ── Layout Primitive Styles ──
│   │   ├── section.ts                    ← SectionWrapper (padding), SectionTitleWrapper
│   │   │                                    (h2 with ::after cyan underline bar)
│   │   ├── card.ts                       ← Card surface styles
│   │   ├── container.ts                  ← Container wrapper styles
│   │   └── gridContainer.ts              ← Grid layout styles
│   │
│   ├── data/                             ← ⭐ Static JSON content (edit to update portfolio)
│   │   ├── projectData.json              ← 6 projects (id, title, desc, tech[], links[], featured?)
│   │   ├── experienceData.json           ← 3 roles (id, role, company, dates, achievements[])
│   │   └── skillsData.json              ← 4 categories (category, skills[{name}])
│   │
│   └── types/                            ← TypeScript type definitions
│       └── index.ts                      ← Interfaces: Experience, Skill, SkillCategory,
│                                            ProjectLink, Project
│
├── dist/                                 ← Build output (generated — do not edit)
│                                            Produced by: npm run build (tsc + vite build)
│
├── node_modules/                         ← Dependencies (generated — do not edit)
│
└── docs/                                 ← Project documentation (this workflow output)
    ├── index.md                          ← Master documentation index (to be generated)
    ├── project-scan-report.json          ← Workflow state file
    ├── api-contracts-main.md             ← Data access layer documentation
    ├── data-models-main.md               ← TypeScript interfaces + JSON schemas
    └── source-tree-analysis.md           ← This file
```

---

## Critical Folders Summary

| Folder | Priority | Purpose |
|---|---|---|
| `src/` | ⭐⭐⭐ | All application source — start here for any code change |
| `src/components/` | ⭐⭐⭐ | React UI components — one file per component |
| `src/styles/` | ⭐⭐⭐ | Styled Components definitions — mirrors components/ structure |
| `src/data/` | ⭐⭐⭐ | Static JSON content — edit here to update portfolio content |
| `src/types/` | ⭐⭐ | TypeScript interfaces — update when JSON schema changes |
| `public/images/` | ⭐⭐ | Static image assets — portrait, cursors, favicon |
| `docs/` | ⭐⭐ | AI-readable project documentation (this workflow) |
| `dist/` | ⚠️ | Build output — never edit manually |
| `node_modules/` | ⚠️ | Dependencies — never edit manually |

---

## Entry Points

| Entry Point | Path | Role |
|---|---|---|
| HTML Shell | `index.html` | Browser loads this first; mounts React at `#root` |
| JS Entry | `src/main.tsx` | React bootstraps here; ThemeProvider + GlobalStyles applied |
| Root Component | `src/App.tsx` | Page layout assembled here; all sections composed |
| Build Config | `vite.config.js` | Controls bundling (dev server + production build) |
| TS Config | `tsconfig.json` | Governs type checking for all `src/` files |

---

## Key Conventions

| Convention | Details |
|---|---|
| One component per file | `components/Foo.tsx` + `styles/foo.ts` always paired |
| Transient props | SC transient props prefixed with `$` (e.g., `$featured`, `$isOpen`) |
| Data via JSON import | `import data from "../data/foo.json"` then `as Interface[]` |
| Section anchors | Each section uses `<Section id="sectionName">` for scroll navigation |
| Theme access | All styled components access theme via `({ theme }) => theme.Token.Name` |
| No barrel exports | Each component is a default export; styles are named exports |
