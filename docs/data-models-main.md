# Data Models — Main (portfolio-website)

> All data models are TypeScript interfaces defined in `src/types/index.ts` and backed by static JSON files in `src/data/`. There is no database, ORM, or migration system — all data is hardcoded in JSON and typed statically.

---

## TypeScript Interfaces

**Source:** `src/types/index.ts`

---

### `Experience`

Represents a professional work experience entry.

```ts
export interface Experience {
  id: string;           // Unique identifier (e.g., "se", "ase", "jse")
  role: string;         // Job title (e.g., "Software Engineer")
  company: string;      // Employer name
  location: string;     // City, State (e.g., "Charlotte, NC")
  startDate: string;    // Human-readable (e.g., "March 2023")
  endDate: string;      // Human-readable or "Present"
  achievements: string[]; // Bullet-point accomplishment strings
  technologies: string[]; // Tech badge labels
}
```

**Backed by:** `src/data/experienceData.json`
**Consumed by:** `src/components/ExperienceSection.tsx`

---

### `Skill`

A single named skill.

```ts
export interface Skill {
  name: string;   // Display name (e.g., "Go", "AWS Lambda")
}
```

---

### `SkillCategory`

Groups skills under a category label.

```ts
export interface SkillCategory {
  category: string; // Category label (e.g., "Languages", "Cloud & Infrastructure")
  skills: Skill[];  // Array of skills in this category
}
```

**Backed by:** `src/data/skillsData.json`
**Consumed by:** `src/components/SkillsSection.tsx`

---

### `ProjectLink`

A single external link associated with a project.

```ts
export interface ProjectLink {
  title: string;  // Link label (e.g., "GitHub")
  link: string;   // Full URL
}
```

---

### `Project`

Represents a portfolio project showcase card.

```ts
export interface Project {
  id: string;               // Unique identifier (e.g., "hyuga", "creeperkeeper")
  title: string;            // Display name
  description: string;      // Short description (1-2 sentences)
  technologies: string[];   // Tech tags (e.g., ["TypeScript", "Electron", "Desktop"])
  links: ProjectLink[];     // External links (GitHub, demo, etc.)
  featured?: boolean;       // If true, sorted to top of projects grid
}
```

**Backed by:** `src/data/projectData.json`
**Consumed by:** `src/components/ProjectsSection.tsx`

---

## Static Data Files

### `src/data/experienceData.json`

3 entries (chronological order, most recent first):

| id | role | company | period |
|---|---|---|---|
| `se` | Software Engineer | Red Ventures | March 2025 – Present |
| `ase` | Associate Software Engineer | Red Ventures | March 2023 – March 2025 |
| `jse` | Junior Software Engineer | Red Ventures | May 2022 – March 2023 |

---

### `src/data/skillsData.json`

4 categories:

| Category | Skills |
|---|---|
| Languages | Go, TypeScript, Node.js, Java, SQL |
| Backend & Systems | REST APIs, Distributed Systems, Auth Patterns, ETL Pipelines |
| Cloud & Infrastructure | AWS Lambda, API Gateway, DynamoDB, S3, RDS, Terraform, CI/CD |
| Practices | BMAD Method, Spec-Driven Development, AI-Assisted Development |

---

### `src/data/projectData.json`

6 entries:

| id | title | featured | technologies |
|---|---|---|---|
| `hyuga` | Hyuga | ✓ | TypeScript, Electron, Desktop |
| `creeperkeeper` | CreeperKeeper | ✓ | Go, AWS, Terraform, Lambda |
| `terraform-minecraft` | Terraform Minecraft Module | — | Terraform, AWS, EC2, Docker |
| `neovim` | Neovim Config | — | Lua, Neovim, LSP |
| `nethertravel` | NetherTravel | — | TypeScript, Web |
| `tech-deep-dives` | Tech Deep Dives | — | JavaScript, Education |

---

## Data Flow

```
src/data/*.json  (static JSON — edited manually to update content)
       │
       ▼  (Vite resolveJsonModule — imported at build time)
src/components/*.tsx  (typed cast: `dataFile as Interface[]`)
       │
       ▼  (rendered via .map())
Styled UI components
```

---

## Adding / Updating Content

To update portfolio content, **edit the JSON files directly** — no code changes required:

| To change | Edit file |
|---|---|
| Work experience | `src/data/experienceData.json` |
| Skills | `src/data/skillsData.json` |
| Projects | `src/data/projectData.json` |

After editing, run `npm run build` (or `vite build`) to regenerate the static bundle.
