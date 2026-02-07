import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillsList,
  SkillBadge,
} from "../styles/skillsSection";
import skillsData from "../data/skillsData.json";
import { SkillCategory as SkillCategoryType } from "../types";

const SkillsSection: React.FC = () => {
  const categories = skillsData as SkillCategoryType[];

  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        {categories.map((category, index) => (
          <SkillCategory key={index}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge key={skillIndex}>{skill.name}</SkillBadge>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default SkillsSection;
