export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ProjectLink {
  title: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  featured?: boolean;
}
