import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am an aspiring <span className="purple"> Data Engineer </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am currently pursuing a Master's degree in Artificial Intelligence and Machine Learning from NMIMS, Mumbai.
            <br />
            <br />
            Apart from software development, other activities I engage myself include...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
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
