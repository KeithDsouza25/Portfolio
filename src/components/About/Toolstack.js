import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
<<<<<<< HEAD
  SiHeroku,
  SiGithub
=======
  SiGithub,
  SiDocker,
  SiJenkins,
  SiPowerbi,
  SiTableau,
  SiMicrosoftexcel
>>>>>>> 1d5eaf06884d33375fc51179617dda24a0e34106
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
    </Row>
  );
}

export default Toolstack;
