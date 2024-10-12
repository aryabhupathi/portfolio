import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="My Movie"
              description="Movie finder is a web application that allows users to search for movies and view their details from a trusted database."
              ghLink="https://github.com/aryabhupathi/MyMovie"
              demoLink="https://havetime.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Festival"
              description="A clone of bookmyshow web application with self decided features and functions."
              ghLink="https://github.com/aryabhupathi/lost"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="My PortFolio"
              description="Portfolio web application with my details and work."
              ghLink="https://github.com/aryabhupathi/portfolio"
              demoLink="/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
