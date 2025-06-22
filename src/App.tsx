import React, { MouseEvent } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Container from "./components/Container"

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <div>
        <p style={{ textAlign: "center" }}>
          Software Engineer based in North Carolina. I work mostly with Go, Node.js, React, AWS, and Terraform. Today I maintain backend systems, and collaborate with cross-functional teams to deliver internal product tooling.
        </p>
      </div>
      <div className="projects" id="projects">
        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>Web Scraper</h3>
            <div className="status-wrapper">
              <h4>Status</h4>
              <p>WIP</p>
            </div>
            <p>
              This project is something I started working on after about 1 year
              of not working in Golang. I needed something to get me backup to
              speed with the syntax. Eventually I want to evolve this project
              into writing my own WebScraper package in Go, for now I am using
              the 3rd party
              <a href="https://github.com/gocolly/colly">Colly</a>.
            </p>

            <a>More Details</a>
            <hr />
          </div>
        </Card>

        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>NEOVIM</h3>
            <p>
              This is something I am actively working on as I write this, and
              hopefully I stick to this project, I am learning VIM, and trying
              to use NeoVim as my editor. So far I have gotten fairly
              comfortable with VIM motions, my biggest struggle at the moment is
              understanding how to configure VIM, I dont exactly understand why
              plugins work. Honestly I probably just need to spend a solid hour
              or two learning Lua.
            </p>
            <hr />
          </div>
        </Card>

        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>Track Commits Road to Hire</h3>
            <div className="status-wrapper">
              <h4>Status</h4>
              <p>Done</p>
            </div>
            <p>
              Here is another project I worked on for the Road to Hire nonprofit
              program. My goal here was to write a script that would track how
              many hours or commits each apprentice made, Ideally this would
              help us discover if one person took over a project in a group
              scenerio, or if an apprentice potentially copied over a project
              from somewhere else. The purpose was really to make the program
              more fair for everyone. This never ended up being used however as
              Road to Hire had other priorities, and to truly embed into the
              program would take more time than we had available
              <a href="https://github.com/hnucamendi/track_commits-R2H">
                track-commits-R2H
              </a>
              .
            </p>
            <a>More Details</a>
            <hr />
          </div>
        </Card>

        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>Advent of Code</h3>
            <div className="status-wrapper">
              <h4>Status</h4>
              <p>WIP</p>
            </div>
            <p>
              I have a love hate relationship with advent of code, on one hand,
              its a great way to think about new unique problems but on the
              other hand, they are just some really tough questions nonetheless,
              I keep trying, I plan on coming back to these some day and
              finishing them out
            </p>
            <h4>2022</h4>
            <a href="https://github.com/hnucamendi/adventofcode2022">
              Link to Repo
            </a>
            <h4>2023</h4>
            <a href="https://github.com/hnucamendi/adventofcode2023">
              Link to Repo
            </a>
            <hr />
          </div>
        </Card>

        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>Arch Linux</h3>
            <p>
              Thats right, I was an Arch Linux user for a while. It was great,
              it honestly is not as hard as people say it is to configure and
              setup. The only downside was that I could not really game on Linux
              without jumping through a bunch of hoops. Wine specifically I
              could never get to work properly. other than that I learned a ton
              about the linux file structure, formatting files, creating
              partitions, working with package managers, and generally had a lot
              of fun!
            </p>
            <hr />
          </div>
        </Card>

        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>Finance Tracker V1</h3>
            <div className="status-wrapper">
              <h4>Status</h4>
              <p>Done</p>
            </div>
            <p>
              This was a super fun project, at the time I was learning Python,
              and it was my first time coding on Windows bare metal. Apart from
              that, I really needed something to track my finances, so I learned
              about parsing CSV files, working with google cloud, and working on
              Windows with Powershell. I was planning on making a version 2 of
              this project in Golang (my number 1 language of choice) but then I
              lost the need for a tracking tool as I found the Mint app.
              Recently though the Mint app is being deprecated so I might have a
              use for this again
              <a href="https://github.com/hnucamendi/finance-tracker">
                finance-tracker
              </a>
              .
            </p>
            <a>More Details</a>
            <hr />
          </div>
        </Card>

        <Card>
          <div className="project-wrapper">
            <hr />
            <h3>Tech Write Up</h3>
            <div className="status-wrapper">
              <h4>Status</h4>
              <p>WIP</p>
            </div>
            <p>
              Originally I made this as a cheat sheet for the Road to Hire non
              profit program, I wanted to make a master document for the
              fundamental concepts of JavaScript for the apprentices to learn
              from. I quickly learned that this actually was really fun to
              research and write up and I wanted to do this for more than
              JavaScript. I plan on writing up more of these, and potentially at
              some point writing a book!
              <a href="https://github.com/hnucamendi/codingCheatSheet">
                CodingCheatSheet
              </a>
              .
            </p>

            <a>More Details</a>
            <hr />
          </div>
        </Card>
      </div>
      <Footer />
    </Container >
  );
};
export default App;
