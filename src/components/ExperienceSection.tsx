import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  Role,
  CompanyInfo,
  Company,
  Dates,
  Achievements,
  Technologies,
  TechBadge,
} from "../styles/experienceSection";
import experienceData from "../data/experienceData.json";
import { Experience } from "../types";

const ExperienceSection: React.FC = () => {
  const experiences = experienceData as Experience[];

  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {experiences.map((exp) => (
          <TimelineItem key={exp.id}>
            <TimelineHeader>
              <Role>{exp.role}</Role>
              <CompanyInfo>
                <Company>{exp.company}</Company>
                <span>•</span>
                <Dates>{exp.startDate} - {exp.endDate}</Dates>
              </CompanyInfo>
            </TimelineHeader>
            <Achievements>
              {exp.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </Achievements>
            <Technologies>
              {exp.technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </Technologies>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default ExperienceSection;
