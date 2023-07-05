"use client"

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import portfolioImg from "../assets/img/portfolio.png";
import rustImg from "../assets/img/rust-web-server.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from "next/image";

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Site",
      description: "The site you're on. Made with React.js and deployed on Vercel",
      imgUrl: portfolioImg,
    },
    {
      title: "Bird Classifier",
      description: "Categorizes bird images to one of over 500 species. Developed with Python using Flask and Tensorflow machine learning.",
      imgUrl: projImg3,
    },
    {
      title: "Rust Multithread Web Server",
      description: "Created CLI-based web server in Rust utilizing TCP sockets",
      imgUrl: rustImg,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="project-title">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}