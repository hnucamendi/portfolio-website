import React from "react";
import Block from "../Shared/Block";

const Cv: React.FC = () => {
  return (
    <Block
      contentType={"cv"}
      title={"CV"}
      content={`
  <div>
  <header>
    <p>
      Charlotte, NC | 704-968-1310 |
      <a href="mailto:developer@hnucamendi.net">
        developer@hnucamendi.net
      </a>
      | <a href="https://www.linkedin.com/hnucamendi">LinkedIn</a> |
      <a href="https://github.com/hnucamendi">GitHub</a> |
      <a href="http://hnucamendi.net/">Portfolio</a>
    </p>
  </header>

  <section>
    <h2>Objective</h2>
    <p>
      I am an aspiring software developer passionate about innovative
      technologies and creating an efficient workplace utilizing 3rd
      party services to help. I love learning new languages, frameworks,
      cloud technologies while continually refreshing and improving my
      skills as an engineer. I can provide quick, practical, and
      original solutions.
    </p>
  </section>

  <section>
    <h2>Experience</h2>
    <article>
      <h3>Full Stack Coding Apprentice — RoadtoHire, Charlotte NC</h3>
      <time>November 2021 - Present</time>
      <ul>
        <li>
          Developing complex front-end UI responsive elements and
          accessible applications to improve user experience
        </li>
        <li>
          Mastering 3 front-end technologies; HTML / CSS / React.js /
          JavaScript. As well as 2 backend technologies; Node / MySQL
          and working on 7 projects in the span of 6 months
        </li>
        <li>
          Spearheaded full-stack Hackathon project with 3rd Party News
          API integration, delegated tasks to improve group cohesiveness
          and collaboration
        </li>
        <li>
          Managing large group project code libraries and dependencies
          on GitHub using Git to increase group work organization &
          efficiency
        </li>
        <li>
          Improving self-management and teamwork skills during this
          6-month rigorous boot camp through formal training
        </li>
      </ul>
    </article>
    <article>
      <h3>
        Game Functions Enthusiast — Personal Project, Charlotte NC
      </h3>
      <time>September 2021 - Present</time>
      <ul>
        <li>
          Managing significant Minecraft code dependencies using Gradle
          to develop original Minecraft game features
        </li>
        <li>
          Using JSON to automate item creation in-game to improve code
          efficiency
        </li>
        <li>
          Hosting Minecraft server using AWS EC2 with proper security
          groups
        </li>
      </ul>
    </article>
  </section>

  <section>
    <h2>Volunteer</h2>
    <article>
      <h3>
        Early Education Literacy Tutor — HELPS Tutoring, Charlotte NC
      </h3>
      <time>November 2021 - May 2022</time>
      <p>
        Led 1:1 sessions to improve reading literacy for Elementary
        School students; HELPS aims to improve education equity and
        advanced educational outcome
      </p>
    </article>
    <article>
      <h3>
        Frontend Tech Tutor — RoadtoHire Volunteering, Charlotte NC
      </h3>
      <time>March 2022</time>
      <p>
        Worked with Highschool students in the R2H Pathways program;
        pathways help young students build their early careers in tech.
        Also worked with upcoming RoadtoHire Apprentices for Coding
        Cohort 10
      </p>
    </article>
  </section>
  <section>
    <h2>Education</h2>
    <article>
      <h3>Charlotte Engineering Early College, Charlotte NC</h3>
      <time>August 2016 - May 2021</time>
      <p>
        The CEEC program aims at teaching students how to think like an
        engineer using the STEM curriculum; Three years were a hybrid
        College / Highschool model
      </p>
    </article>
  </section>

  <section>
    <h2>Certifications</h2>
    <ul>
      <li>AWS Cloud Practitioner</li>
    </ul>
  </section>

  <section>
    <h2>Languages / Technical Skills</h2>
    <ul>
      <li>JavaScript</li>
      <li>Node JS</li>
      <li>React JS</li>
      <li>Java</li>
      <li>Git</li>
      <li>HTML / CSS</li>
      <li>FullStack Development</li>
    </ul>
  </section>

  <section>
    <h2>Skills</h2>
    <ul>
      <li>Leader</li>
      <li>Communication</li>
      <li>Adaptability</li>
      <li>Team Player</li>
      <li>Resourceful</li>
      <li>Openness to Criticism</li>
      <li>Problem-Solving</li>
      <li>Time Management</li>
      <li>Decision Making</li>
    </ul>
  </section>

  <section>
    <h2>Projects</h2>
    <ul>
      <li>Minecraft Modding</li>
      <li>E-Commerce Website</li>
      <li>News Outlet Hackathon</li>
    </ul>
  </section>
</div>
)}
</div>`}
    ></Block>
  );
};

export default Cv;
