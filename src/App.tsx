import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Container from "./components/Container"
import data from "./projectData.json"

const App: React.FC = () => {
  console.log(data)
  return (
    <Container>
      <Header />
      <div>
        <p style={{ textAlign: "center" }}>
          Software Engineer based in North Carolina. I work mostly with Go, Node.js, React, AWS, and Terraform. Today I maintain backend systems, and collaborate with cross-functional teams to deliver internal product tooling.
        </p>
      </div>
      <div className="projects" id="projects">
        {data.map((card, i) => (
          <Card key={i}>
            <div className="project-wrapper">
              <h3>{card.title}</h3>
              <p>
                {card.description}
              </p>
              {card.links.map((link, j) => (
                <a key={j} href={link.link}>{`${link.title}\t`}</a>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Footer />
    </Container >
  );
};
export default App;
