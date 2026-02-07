import React from "react";
import {
  HeroWrapper,
  HeroContent,
  HeroName,
  HeroTitle,
  HeroTagline,
} from "../styles/heroSection";

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContent>
        <HeroName>Harold Nucamendi</HeroName>
        <HeroTitle>Backend Engineer</HeroTitle>
        <HeroTagline>
          Software Engineer with 3+ years of experience building backend systems and internal tooling.
          Working primarily with Go, Node.js, AWS, and Terraform to deliver scalable solutions.
        </HeroTagline>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
