import React from "react";
import { Col, Row } from "react-bootstrap";
<<<<<<< HEAD
import { CgCPlusPlus } from "react-icons/cg";
import {DiJavascript, DiReact, DiNodejs, DiMongodb, DiPython, DiGit,} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase, SiPostgresql, SiJava } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
=======
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiOpencv, SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";
>>>>>>> b5e3f2719b15781383daa2a909dfe905c2f29b00

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
<<<<<<< HEAD
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
=======
>>>>>>> b5e3f2719b15781383daa2a909dfe905c2f29b00
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
<<<<<<< HEAD
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
=======
        <SiOpencv />
>>>>>>> b5e3f2719b15781383daa2a909dfe905c2f29b00
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
<<<<<<< HEAD
=======
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
>>>>>>> b5e3f2719b15781383daa2a909dfe905c2f29b00
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      

    </Row>
  );
}

export default Techstack;
