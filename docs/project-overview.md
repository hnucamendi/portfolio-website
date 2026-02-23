# Project Overview — portfolio-website

**Owner:** Harold Nucamendi (harold@hnucamendi.com)
**Type:** Personal Portfolio Website
**Generated:** 2026-02-22

---

## Purpose

`portfolio-website` is Harold Nucamendi's personal portfolio — a public-facing web presence that showcases his professional experience, technical skills, and open-source projects. It serves as a living resume and project showcase for recruiters, collaborators, and the broader tech community.

---

## Executive Summary

A **fully static, single-page React application** built with TypeScript and Vite. The site presents four content sections (Hero, Experience, Skills, Projects) within a dark-themed, responsive layout. All content is stored in static JSON files, making updates trivial and hosting costs negligible.

The project reflects Harold's background as a backend engineer — pragmatic, minimal, and well-typed. No unnecessary complexity: no router, no global state, no external APIs. Just React components, Styled Components, and JSON data files compiled into a static bundle.

---

## Tech Stack Summary

| Layer | Technology |
|---|---|
| Language | TypeScript 5.2 (strict mode) |
| UI Framework | React 18.2 |
| Build Tool | Vite 5 + SWC |
| Styling | Styled Components 6.1 (CSS-in-JS, ThemeProvider) |
| Data | Static JSON files (build-time import) |
| Fonts | IBM Plex Sans + Montserrat (Google Fonts CDN) |
| Linting | ESLint 8 + @typescript-eslint 7 |
| Testing | None configured |
| Deployment | Unknown — static dist/ bundle |

---

## Architecture Classification

| Property | Value |
|---|---|
| Repository type | Monolith |
| Application type | Web Frontend SPA |
| Rendering strategy | Client-side rendering (CSR) |
| Data strategy | Static / build-time |
| State management | Local component state only (React useState) |
| Routing | None — single page, anchor-based scroll |
| Backend | None |
| Database | None |
| Authentication | None |

---

## Site Sections

| Section | ID | Data Source | Description |
|---|---|---|---|
| Header | — | Hardcoded | Sticky nav bar with logo and navigation links |
| Hero | `#hero` | Hardcoded | Name, title ("Backend Engineer"), tagline |
| Experience | `#experience` | `experienceData.json` | Timeline of 3 roles at Red Ventures (2022–present) |
| Skills | `#skills` | `skillsData.json` | 4 skill categories: Languages, Backend, Cloud, Practices |
| Projects | `#projects` | `projectData.json` | 6 projects; 2 featured (Hyuga, CreeperKeeper) |
| Footer | — | Hardcoded | Copyright, email, GitHub, LinkedIn links |

---

## Content at a Glance

**Owner:** Harold Nucamendi — Software Engineer at Red Ventures (Charlotte, NC)

**Experience:** 3+ years progressive growth (Junior → Associate → Software Engineer), specializing in Go backend systems, AWS infrastructure, and AI-assisted development.

**Featured Projects:**
- **Hyuga** — Desktop utility for managing printed assets (TypeScript + Electron)
- **CreeperKeeper** — On-demand Minecraft server management (Go + AWS + Terraform)

**Key Skills:** Go, TypeScript, AWS (Lambda, DynamoDB, API Gateway, S3, RDS), Terraform, REST APIs, BMAD Method, AI-Assisted Development

---

## Repository Structure

```
portfolio-website/          ← Monolith — single codebase
├── src/                    ← All source code
│   ├── components/         ← React components
│   ├── styles/             ← Styled Components (paired per component)
│   ├── data/               ← JSON content files
│   └── types/              ← TypeScript interfaces
├── public/                 ← Static assets (images, favicon)
├── dist/                   ← Build output (generated)
└── docs/                   ← Project documentation (this workflow)
```

---

## Quick Start

```bash
git clone <repo-url>
cd portfolio-website
npm install
npm run dev       # → http://localhost:5173
```

No environment variables needed. No external services required.

---

## Documentation Index

| Document | Description |
|---|---|
| [Architecture](./architecture.md) | Full technical architecture, design system, component hierarchy |
| [Source Tree](./source-tree-analysis.md) | Annotated directory tree with file-level descriptions |
| [Component Inventory](./component-inventory.md) | All React components categorized and described |
| [Data Models](./data-models-main.md) | TypeScript interfaces + JSON schemas |
| [API Contracts](./api-contracts-main.md) | Data access layer (static JSON + external links) |
| [Development Guide](./development-guide.md) | Setup, build, and content update instructions |
| [Master Index](./index.md) | Top-level navigation for all documentation |

---

## Updating Portfolio Content

To update what's displayed on the site — no code changes needed:

| Content | File to edit |
|---|---|
| Work experience | `src/data/experienceData.json` |
| Skills | `src/data/skillsData.json` |
| Projects | `src/data/projectData.json` |

After editing: `npm run build` to regenerate `dist/`.
