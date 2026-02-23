# Development Guide — portfolio-website

**Project:** Harold Nucamendi — Personal Portfolio SPA
**Stack:** React 18 + TypeScript + Vite 5 + Styled Components

---

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| **Node.js** | v22.x (current env) | No `.nvmrc` pinned — use LTS or latest stable |
| **npm** | 10.x | Comes bundled with Node.js |
| **Git** | Any | For version control |

> **Note:** No `.nvmrc`, `.node-version`, or `engines` field is defined in `package.json`. The project was developed with Node v22.19.0 / npm 10.9.3. Any modern Node LTS (18+) should work given the dependencies.

---

## Installation

```bash
# 1. Clone the repository
git clone <repo-url>
cd portfolio-website

# 2. Install dependencies
npm install
```

That's it — no environment variables, no database, no external services required.

---

## Environment Setup

**No environment variables required.** The project is fully static:

- No `.env` file needed (`.env` is listed in `.gitignore` for safety but unused)
- No API keys, tokens, or secrets
- No runtime configuration
- Google Fonts are loaded from CDN via CSS `@import` in `src/styles/index.ts`

---

## Local Development

```bash
# Start the Vite dev server (hot module replacement enabled)
npm run dev
```

- Dev server starts at: `http://localhost:5173` (Vite default)
- HMR (Hot Module Replacement) enabled via `@vitejs/plugin-react-swc`
- Changes to `.tsx`, `.ts`, and `.json` files reload instantly

---

## Building for Production

```bash
# Type-check + build optimized static bundle
npm run build
```

Build process:
1. `tsc` — TypeScript type checking (strict mode, no emit)
2. `vite build` — Bundles and optimizes output to `dist/`

**Output:** `dist/` directory contains static HTML, JS, and CSS files ready for any static host.

```bash
# Preview the production build locally
npm run preview
```

Serves the `dist/` folder at `http://localhost:4173` for local production verification.

---

## Updating Portfolio Content

**No code changes needed** to update displayed content — edit the JSON data files directly:

| To update | File | Format |
|---|---|---|
| Work experience entries | `src/data/experienceData.json` | `Experience[]` |
| Skills and categories | `src/data/skillsData.json` | `SkillCategory[]` |
| Projects showcase | `src/data/projectData.json` | `Project[]` |

After editing JSON, the dev server will hot-reload automatically. For production, run `npm run build`.

See `docs/data-models-main.md` for the complete JSON schema for each file.

---

## Adding a New Section

To add a new portfolio section (e.g., "Blog", "Certifications"):

1. **Add data file** (if needed): `src/data/newSectionData.json`
2. **Add TypeScript interface**: `src/types/index.ts`
3. **Add styled components**: `src/styles/newSection.ts`
4. **Create component**: `src/components/NewSection.tsx`
5. **Register in App**: Import and add `<NewSection />` to `src/App.tsx`
6. **Add nav link** (if needed): Add entry to `navItems` array in `src/components/Navigation.tsx`

---

## Linting

```bash
# Run ESLint
npx eslint src/

# ESLint config: eslintrc.cjs
# Rules: eslint:recommended + @typescript-eslint/recommended + react-hooks
```

---

## Testing

**No test suite configured.** No test runner (Jest, Vitest, Playwright, etc.) is installed or configured in `package.json`. No test files exist in the codebase.

To add testing:
- **Unit/component tests**: Add [Vitest](https://vitest.dev/) + `@testing-library/react` (recommended for Vite projects)
- **E2E tests**: Add [Playwright](https://playwright.dev/) or [Cypress](https://cypress.io/)

---

## Project Structure Quick Reference

```
src/components/    ← React components (one per file)
src/styles/        ← Styled Components (paired with components)
src/data/          ← JSON content files (edit to update portfolio)
src/types/         ← TypeScript interfaces
public/images/     ← Static images (portraits, cursors, favicon)
```

See `docs/source-tree-analysis.md` for the full annotated file tree.

---

## Common Development Tasks

| Task | Command / Action |
|---|---|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Update projects list | Edit `src/data/projectData.json` |
| Update experience | Edit `src/data/experienceData.json` |
| Update skills | Edit `src/data/skillsData.json` |
| Add new component | Create `src/components/Foo.tsx` + `src/styles/foo.ts` |
| Change color theme | Edit `theme` object in `src/main.tsx` |
| Change global fonts | Edit `@import` in `src/styles/index.ts` |
| Change animations | Edit `src/styles/animations.ts` |
