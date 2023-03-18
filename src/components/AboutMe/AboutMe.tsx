import React from "react";
import Block from "../Shared/Block";
import "../../styles/AboutMe/aboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div id="about-me">
      <Block
        contentType="main"
        title="Harold Arriola Nucamendi 🇲🇽🇺🇸"
        content="As a Software Engineer, I am driven by my passion for developing
      efficient and innovative web applications and services. With expertise
      in Go, Node.js, React.js, AWS, and Terraform, I am dedicated to
      constantly updating my skills to meet the demands of modern web
      development. My role involves maintaining backend services, contributing
      to large-scale projects, and collaborating with different teams to
      achieve business goals and deliver value to customers. I am a fast
      learner who is constantly seeking new challenges and opportunities to
      grow professionally and add value to the team."
        images={["./harold-portrait1.webp"]}
      ></Block>
    </div>
  );
};

export default AboutMe;
