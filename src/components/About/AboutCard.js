import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arya Bhupathi </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I have previously worked as a software developer at CIPL.
            I am currently looking forward to work as a frontend developer .
            <br />
            I have completed Bachelor of Technology(B.Tech)  in Computer Science and Engineering from <span className="purple">SVCE</span>, Tirupati
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
