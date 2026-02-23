# API Contracts — Main (portfolio-website)

> **Note:** This is a fully static SPA with no external API calls, no backend, and no HTTP client libraries. There are no REST, GraphQL, or RPC endpoints. All data is served via statically imported JSON files at build time.

---

## Data Access Layer

Instead of API endpoints, data is accessed via **static JSON imports** resolved by Vite at build time.

### Pattern

```ts
import dataFile from "../data/dataFile.json";
const typed = dataFile as TypeScriptInterface[];
```

---

## Static Data Sources

### 1. Project Data

**File:** `src/data/projectData.json`
**Consumer:** `src/components/ProjectsSection.tsx`
**Type:** `Project[]`

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique project identifier |
| `title` | `string` | Display name of the project |
| `description` | `string` | Short project description |
| `technologies` | `string[]` | Tech tags shown on card |
| `links` | `ProjectLink[]` | External links (GitHub, demo, etc.) |
| `featured` | `boolean?` | If true, sorted to top of grid |

**Links sub-schema:**

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Link label (e.g., "GitHub") |
| `link` | `string` | Full URL |

---

### 2. Experience Data

**File:** `src/data/experienceData.json`
**Consumer:** `src/components/ExperienceSection.tsx`
**Type:** `Experience[]`

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique experience identifier |
| `role` | `string` | Job title |
| `company` | `string` | Employer name |
| `location` | `string` | City, State |
| `startDate` | `string` | Human-readable start date (e.g., "March 2023") |
| `endDate` | `string` | Human-readable end date or "Present" |
| `achievements` | `string[]` | Bullet-point accomplishments |
| `technologies` | `string[]` | Tech badges shown per role |

---

### 3. Skills Data

**File:** `src/data/skillsData.json`
**Consumer:** `src/components/SkillsSection.tsx`
**Type:** `SkillCategory[]`

| Field | Type | Description |
|---|---|---|
| `category` | `string` | Category label (e.g., "Languages") |
| `skills` | `Skill[]` | Array of skill objects |

**Skill sub-schema:**

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Skill display name |

---

## External Links (Runtime — Not API Calls)

The following external resources are referenced as `<a>` tags rendered at runtime. They are **not** fetch/XHR calls:

| Destination | Location | Purpose |
|---|---|---|
| `mailto:harold@hnucamendi.com` | `Footer.tsx` | Contact email |
| `https://github.com/hnucamendi/` | `Footer.tsx` | GitHub profile |
| `https://linkedin.com/in/hnucamendi/` | `Footer.tsx` | LinkedIn profile |
| Per-project GitHub links | `ProjectsSection.tsx` | Individual project repos |
| Google Fonts CDN | `styles/index.ts` | IBM Plex Sans + Montserrat fonts |

---

## Authentication & Security

- **No authentication** — fully public static site
- **No session management** — no cookies, localStorage, or tokens
- **No form inputs** — no user data collected or transmitted
- **External links** use `rel="noopener noreferrer"` for security
