import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Chess from "../../Assets/Projects/chess.png";
import IMDb from "../../Assets/Projects/Imdb.jpg";
import FrontendProject from "../../Assets/Projects/FrontendProject.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
         
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blogs"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/harshborude/test"
              demoLink="https://portfoliowebsiteharsh.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FrontendProject}
              isBlog={false}
              title="Frontend Project"
              description="Front end website made using Next.js and React.js. Used tailwind and CSS for animations."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chess}
              isBlog={false}
              title="Chess Website"
              description="A personal chess website built using JavaScript to play, analyze, and explore games. Features include interactive boards, puzzle challenges, and progress tracking."
              ghLink="https://github.com/harshborude/Chess_website"
              demoLink="https://github.com/harshborude/Chess_website"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IMDb}
              isBlog={false}
              title="IMDb-Clone"
              description="This React.js-based Movie App uses JavaScript and integrates with The Movie Database (TMDb) REST API to fetch and display real-time movie data including popular titles, detailed information, ratings, genres, and production companies. Built with `create-react-app`, routing via React Router, and styling through CSS. The app uses `fetch()` for API calls, rendering content like posters, backdrops, and links (IMDb, homepage) dynamically based on TMDb responses.
"
              ghLink="https://github.com/harshborude/IMDb_Clone"
              demoLink=""
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
