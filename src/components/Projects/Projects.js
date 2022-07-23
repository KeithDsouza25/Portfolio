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
<<<<<<< HEAD
              title="Target Treatment and Detection of Brain Tumor"
              description="Under optimal circumstances a team of experienced radiologists might take months to determine whether tumor is present in a sample X-ray. In this project, we aimed to create a web application that is accesible by all doctors and patients willing to look out for a second opinion. This application was created by using deep learning techniques to generate a model based on EfficientNet B0 and hosted using flask."
=======
              title="Plant AI"
              description="Description"
>>>>>>> 1d5eaf06884d33375fc51179617dda24a0e34106
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
<<<<<<< HEAD
              title="Youtube Trend Analysis"
              description="Youtube Studio is an inhouse application provided by Youtube for youtubers to analyse data and understand their audiance and revenue bases. As data scientists we aimed to understand the and analyse the data inorder to visualise what kind of music and artists were trending in the year of the pandemic (2020)."
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>
          </Row>
=======
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/KeithDsouza25/portfolio"
            />
          </Col>
        </Row>
>>>>>>> 1d5eaf06884d33375fc51179617dda24a0e34106
        
      </Container>
    </Container>
  );
}

export default Projects;
