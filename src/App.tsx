import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Container from "./components/Container"
import GridContainer from "./components/GridContainer"
import data from "./projectData.json"

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <p style={{ textAlign: "center" }}>
          Welcome! My name is Harold. I'm a Software Engineer based in North Carolina, working primarily with Go, Node, AWS, and Terraform. These days, I focus on maintaining backend systems and collaborating with cross-functional teams to deliver internal product tooling.
        </p>
      </div>
      <GridContainer>
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
      </GridContainer>
      <Footer />
    </Container >
  );
};
export default App;
