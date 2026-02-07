import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {
  ProjectsGrid,
  ProjectCard,
  ProjectHeader,
  ProjectTitle,
  FeaturedBadge,
  ProjectDescription,
  ProjectTechnologies,
  TechTag,
  ProjectLinks,
} from "../styles/projectsSection";
import projectData from "../data/projectData.json";
import { Project } from "../types";

const ProjectsSection: React.FC = () => {
  const projects = projectData as Project[];
  const sortedProjects = [...projects].sort((a, b) =>
    (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} $featured={project.featured}>
            <ProjectHeader>
              <ProjectTitle>
                {project.title}
                {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechnologies>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>
                  {tech}
                  {index < project.technologies.length - 1 && " •"}
                </TechTag>
              ))}
            </ProjectTechnologies>
            <ProjectLinks>
              {project.links.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              ))}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default ProjectsSection;
