import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import brain from "../../Assets/Projects/brain.jpg";
import house from "../../Assets/Projects/house.jpg";
import youtube from "../../Assets/Projects/youtube.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Real Estate Price Prediction"
              description="Changes in the real estate price can affect various investors, bankers, policy makers and many more lives. In this project, we apply the concepts learnt to understand this business problem through the eyes of data scientist. Moreover we manage and critically analyze data using R programming to build statistical models for the given problem and showcase it using Tableau. This project aims to predict house prices in Iowa based on the factors provided.
              "
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Target Treatment and Detection of Brain Tumor"
              description="Under optimal circumstances a team of experienced radiologists might take months to determine whether tumor is present in a sample X-ray. In this project, we aimed to create a web application that is accesible by all doctors and patients willing to look out for a second opinion. This application was created by using deep learning techniques to generate a model based on EfficientNet B0 and hosted using flask."
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Trend Analysis"
              description="Youtube Studio is an inhouse application provided by Youtube for youtubers to analyse data and understand their audiance and revenue bases. As data scientists we aimed to understand the and analyse the data inorder to visualise what kind of music and artists were trending in the year of the pandemic (2020)."
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>
          </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
