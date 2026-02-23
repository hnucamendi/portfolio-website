# Component Inventory — portfolio-website

**Generated:** 2026-02-22
**Total Components:** 12 (9 React components + 3 data files driving content)
**Styling:** All components paired with a Styled Components file in `src/styles/`

---

## Component Categories

### 1. Layout Primitives
*Reusable structural wrappers with no business logic. Highly reusable across any section.*

| Component | File | Styled File | Props | Purpose |
|---|---|---|---|---|
| `Section` | `components/Section.tsx` | `styles/section.ts` | `id: string`, `children: ReactNode` | Semantic `<section>` wrapper; provides `id` for anchor scroll navigation |
| `SectionTitle` | `components/SectionTitle.tsx` | `styles/section.ts` | `children: ReactNode` | `<h2>` heading with a 60px cyan `::after` underline accent bar |
| `Container` | `components/Container.tsx` | `styles/container.ts` | `children: JSX.Element \| JSX.Element[]` | Generic content wrapper `<div>` |
| `GridContainer` | `components/GridContainer.tsx` | `styles/gridContainer.ts` | `children: JSX.Element \| JSX.Element[]` | CSS grid layout wrapper `<div>` |
| `Card` | `components/Card.tsx` | `styles/card.ts` | `children: JSX.Element` | Generic card surface (single child only) |

**Reusability notes:**
- `Section` + `SectionTitle` are used by every data-driven section (Experience, Skills, Projects)
- `Container` and `GridContainer` are defined but not currently used in any section — available as layout utilities
- `Card` is defined but not currently used — `ProjectsSection` uses its own `ProjectCard` styled component directly

---

### 2. Page Shell Components
*Structural components that form the persistent site frame. Not data-driven.*

#### `Header` — `components/Header.tsx`
**Styled file:** `styles/header.ts`
**State:** `isMobileMenuOpen: boolean` (useState — only stateful component in app)

| Styled export | Description |
|---|---|
| Default export | Sticky `<header>` (z-index 100, backdrop-blur, `rgba(33,37,41,0.95)` background) |

**Behavior:**
- Sticky positioned at top of viewport
- Contains site logo ("Harold Nucamendi") — click scrolls to top
- Owns mobile menu open/close state; passes to `Navigation` via props
- Logo styled with Montserrat font, H5 size

---

#### `Navigation` — `components/Navigation.tsx`
**Styled file:** `styles/navigation.ts`
**Props:** `isMobileMenuOpen: boolean`, `toggleMobileMenu: () => void`

| Styled export | Description |
|---|---|
| `Nav` | Desktop horizontal nav container |
| `NavLink` | Desktop anchor link with hover cyan color |
| `MobileMenuButton` | Hamburger/close button (`☰` / `✕`) |
| `MobileNav` | Full-width mobile nav overlay (`$isOpen` transient prop controls visibility) |
| `MobileNavLink` | Mobile anchor link |

**Nav items (hardcoded):**
```ts
[
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
]
```

**Behavior:** Smooth-scrolls to section on click using `element.scrollIntoView({ behavior: "smooth" })`. Closes mobile menu after navigation.

---

#### `Footer` — `components/Footer.tsx`
**Styled file:** `styles/footer.ts`
**State:** None (uses `new Date().getFullYear()` for dynamic copyright year)

**Contact links (hardcoded):**
- `mailto:harold@hnucamendi.com`
- `https://github.com/hnucamendi/`
- `https://linkedin.com/in/hnucamendi/`

All external links use `rel="noopener noreferrer"`.

---

### 3. Data-Driven Section Components
*Consume static JSON data files. All stateless — render-only.*

#### `HeroSection` — `components/HeroSection.tsx`
**Styled file:** `styles/heroSection.ts`
**Data source:** Hardcoded strings (not from JSON)
**Section ID:** `#hero`

| Styled export | Description |
|---|---|
| `HeroWrapper` | Full-width hero container |
| `HeroContent` | Inner content wrapper |
| `HeroName` | Large display name ("Harold Nucamendi") |
| `HeroTitle` | Role label ("Backend Engineer") |
| `HeroTagline` | 1-2 sentence professional summary |

**Note:** Hero content is hardcoded in JSX rather than from a data file. Consider migrating to `src/data/heroData.json` for consistency.

---

#### `ExperienceSection` — `components/ExperienceSection.tsx`
**Styled file:** `styles/experienceSection.ts`
**Data source:** `src/data/experienceData.json` → typed as `Experience[]`
**Section ID:** `#experience`

| Styled export | Description |
|---|---|
| `Timeline` | Vertical timeline container |
| `TimelineItem` | Individual experience entry card |
| `TimelineHeader` | Header row (role + company info) |
| `Role` | Job title display |
| `CompanyInfo` | Flex container for company + bullet + dates |
| `Company` | Employer name |
| `Dates` | "startDate - endDate" display |
| `Achievements` | `<ul>` list of achievement bullets |
| `Technologies` | Flex container for tech badges |
| `TechBadge` | Individual technology pill badge |

**Data rendered:** 3 roles (Junior SE → Associate SE → SE, all at Red Ventures)

---

#### `SkillsSection` — `components/SkillsSection.tsx`
**Styled file:** `styles/skillsSection.ts`
**Data source:** `src/data/skillsData.json` → typed as `SkillCategory[]`
**Section ID:** `#skills`

| Styled export | Description |
|---|---|
| `SkillsGrid` | CSS grid container for categories |
| `SkillCategory` | Individual category card |
| `CategoryTitle` | Category label heading |
| `SkillsList` | Flex container for skill badges |
| `SkillBadge` | Individual skill pill badge |

**Data rendered:** 4 categories (Languages, Backend & Systems, Cloud & Infrastructure, Practices)

---

#### `ProjectsSection` — `components/ProjectsSection.tsx`
**Styled file:** `styles/projectsSection.ts`
**Data source:** `src/data/projectData.json` → typed as `Project[]`
**Section ID:** `#projects`

| Styled export | Description |
|---|---|
| `ProjectsGrid` | CSS grid container for project cards |
| `ProjectCard` | Individual project card (`$featured` transient prop for highlight styling) |
| `ProjectHeader` | Card header row |
| `ProjectTitle` | Project name |
| `FeaturedBadge` | "Featured" label badge (shown when `featured: true`) |
| `ProjectDescription` | Project description text |
| `ProjectTechnologies` | Flex container for tech tags |
| `TechTag` | Individual tech label (with bullet separator except last) |
| `ProjectLinks` | Container for external link anchors |

**Business logic:** Sorts projects so `featured: true` entries appear first:
```ts
[...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
```

**Data rendered:** 6 projects (2 featured: Hyuga, CreeperKeeper)

---

## Design System Elements

### Global Styled Components (`src/styles/index.ts`)
- `GlobalStyles` — CSS reset, base typography, Google Fonts import, responsive breakpoints

### Animation Utilities (`src/styles/animations.ts`)

| Export | Type | Usage |
|---|---|---|
| `fadeInUp` | keyframes | Fade + translate Y (20px → 0) over 0.5s |
| `fadeIn` | keyframes | Opacity fade over 0.4s |
| `slideInLeft` | keyframes | Fade + translate X (-20px → 0) |
| `fadeInUpAnimation` | css helper | Pre-composed animation CSS for fadeInUp |
| `fadeInAnimation` | css helper | Pre-composed animation CSS for fadeIn |
| `staggerDelay(index)` | css helper | `animation-delay: ${index * 0.1}s` for list staggering |

---

## Component vs Style File Mapping

| Component File | Paired Style File |
|---|---|
| `App.tsx` | *(no paired style — uses GlobalStyles + ThemeProvider)* |
| `Header.tsx` | `styles/header.ts` |
| `Navigation.tsx` | `styles/navigation.ts` |
| `HeroSection.tsx` | `styles/heroSection.ts` |
| `ExperienceSection.tsx` | `styles/experienceSection.ts` |
| `SkillsSection.tsx` | `styles/skillsSection.ts` |
| `ProjectsSection.tsx` | `styles/projectsSection.ts` |
| `Footer.tsx` | `styles/footer.ts` |
| `Section.tsx` | `styles/section.ts` (shared with SectionTitle) |
| `SectionTitle.tsx` | `styles/section.ts` (shared with Section) |
| `Container.tsx` | `styles/container.ts` |
| `GridContainer.tsx` | `styles/gridContainer.ts` |
| `Card.tsx` | `styles/card.ts` |

---

## Reuse Assessment

| Component | Reusability | Currently Used By |
|---|---|---|
| `Section` | High — general purpose | ExperienceSection, SkillsSection, ProjectsSection |
| `SectionTitle` | High — general purpose | ExperienceSection, SkillsSection, ProjectsSection |
| `Container` | High — general purpose | Defined but unused in active sections |
| `GridContainer` | High — general purpose | Defined but unused in active sections |
| `Card` | Medium — single-child constraint | Defined but unused (ProjectsSection uses its own ProjectCard) |
| `Header` + `Navigation` | Low — site-specific | App.tsx only |
| `Footer` | Low — site-specific | App.tsx only |
| `HeroSection` | Low — portfolio-specific | App.tsx only |
| `ExperienceSection` | Low — portfolio-specific | App.tsx only |
| `SkillsSection` | Low — portfolio-specific | App.tsx only |
| `ProjectsSection` | Low — portfolio-specific | App.tsx only |
