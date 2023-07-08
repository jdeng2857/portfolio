"use client"

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ExperienceSection from "./ExperienceSection";

import kubernetesImg from '../assets/img/technologies/kubernetes.png';
import gcpImg from '../assets/img/technologies/gcp.png';
import terraformImg from '../assets/img/technologies/terraform.png';
import nginxImg from '../assets/img/technologies/nginx.png';
import golangImg from '../assets/img/technologies/golang.png';
import mysqlImg from '../assets/img/technologies/mysql.png';
import datadogImg from '../assets/img/technologies/datadog.png';
import elasticsearchImg from '../assets/img/technologies/elasticsearch.png';
import rubyImg from '../assets/img/technologies/ruby.png';
import graphqlImg from '../assets/img/technologies/graphql.png';
import reactImg from '../assets/img/technologies/react.png';
import typescriptImg from '../assets/img/technologies/typescript.png';
import cssImg from '../assets/img/technologies/css.png';
import wiresharkImg from '../assets/img/technologies/wireshark.png';
import bashImg from '../assets/img/technologies/bash.png';
import linuxImg from '../assets/img/technologies/linux.png';
import gitImg from '../assets/img/technologies/git.png';

export const Experience = () => {

  const experience_data = [
    {
      images: [
        {
          classname: "kubernetes",
          src: kubernetesImg,
        },
        {
          classname: "gcp",
          src: gcpImg,
        },
        {
          classname: "terraform",
          src: terraformImg,
        },
        {
          classname: "nginx",
          src: nginxImg,
        },
        {
          classname: "golang",
          src: golangImg,
        },
      ],
      technologies: [
        "Kubernetes",
        "Google Cloud Platform",
        "Terraform",
        "Nginx",
        "Go",
      ],
      headings: {
        title: "Shopify | Infrastructure Engineer Intern",
        period: "Jan 2023 - Aug 2023",
      },
      descriptions: [
        "- On the Edge Infrastructure team, developed HTTPS L7 routing infrastructure with Google Kubernetes Engine, involving updating custom NGINX" +
        " middleware written in Lua, provisioning SSL certificates and firewall rules, traffic management, handling 20 million RPM.",
        "- Built observability tooling with Prometheus metrics and integrated request latency dashboards with alerts.",
        "- Implemented automated memory deletion for Kubernetes controller in Golang, reducing resources used.",
        "- Upgraded Kubernetes cluster fleet in Terraform with custom developer tools, improving infrastructure security.",
        "- Reduced latency between two major services by 75% using Kubernetes and Google Cloud Load Balancers",
      ],
    },
    {
      images: [
        {
          classname: "graphql",
          src: graphqlImg,
        },
        {
          classname: "mysql",
          src: mysqlImg,
        },
        {
          classname: "elasticsearch",
          src: elasticsearchImg,
        },
        {
          classname: "ruby",
          src: rubyImg,
        },
        {
          classname: "datadog",
          src: datadogImg,
        },
      ],
      technologies: [
        "GraphQL",
        "MySQL",
        "Elasticsearch",
        "Ruby",
        "Datadog",
      ],
      headings: {
        title: "Shopify | Backend Developer Intern",
        period: "May 2022 - Dec 2022",
      },
      descriptions: [
        "- Prepared project experiment to add a new server-driven section to the store screen of the Shop app, including"
        +" developing Ruby data loader ingesting MySQL data into client-ready GraphQL APIs with Redis caching",
        "- Integrated Elasticsearch templates adding a new sort option for products, with over 2 million records",
        "- Added Datadog monitoring and alerts for key backend services with StatsD metrics",
        "- Championed project deep-dive into improving store section performance, discovering extraneous logic with distributed tracing in Observe and"
        +" coordinated action items for the team, resulting in 10% average reduction in latency across all services",
      ],
    },
    {
      images: [
        {
          classname: "react",
          src: reactImg,
        },
        {
          classname: "typescript",
          src: typescriptImg,
        },
        {
          classname: "graphql",
          src: graphqlImg,
        },
        {
          classname: "ruby",
          src: rubyImg,
        },
        {
          classname: "css",
          src: cssImg,
        },
      ],
      technologies: [
        "React",
        "Typescript",
        "GraphQL",
        "Ruby",
        "CSS",
      ],
      headings: {
        title: "Shopify | Software Engineer Intern",
        period: "May 2021 - Apr 2022",
      },
      descriptions: [
        "- Designed and integrated report editing buttons into a data platform website combining all data sources, creating"
         +" React components, enabling archiving and locking reports for over 1000 developers and data scientists",
        "- Fixed CSS styling errors, resulting in correct links and improved flex layout for superior user experience",
        "- Developed Ruby GraphQL APIs to allow authenticated users to access restricted functionalities and datasets",
        "- Owned pages of a major data discovery website revamp, drafting Figma designs, creating React components, "
        +"transforming GraphQL queries with Typescript, resulting in improved UI navigation for over 4000 users",
      ],
    },
    {
      images: [
        {
          classname: "git",
          src: gitImg,
        },
        {
          classname: "graphql",
          src: graphqlImg,
        },
        {
          classname: "react",
          src: reactImg,
        },
        {
          classname: "typescript",
          src: typescriptImg,
        },
        {
          classname: "ruby",
          src: rubyImg,
        },
      ],
      technologies: [
        "Git",
        "GraphQL",
        "React",
        "Typescript",
        "Ruby",
      ],
      headings: {
        title: "Shopify | Dev Degree Intern",
        period: "Sep 2020 - Apr 2021",
      },
      descriptions: [
        "- Accepted into Shopify's Dev Degree program, where I intern in developer positions at Shopify " + 
        "while taking university classes at Carleton University for a computer Science degree.",
        "- Completed an 8-month long training path with courses in Ruby on Rails, Git, Scrum, SQL databases, React, Javascript, and GraphQL",
      ],
    },
    {
      images: [
        {
          classname: "bash",
          src: bashImg,
        },
        {
          classname: "wireshark",
          src: wiresharkImg,
        },
        {
          classname: "linux",
          src: linuxImg,
        },
      ],
      technologies: [
        "Bash",
        "Wireshark",
        "Linux",
      ],
      headings: {
        title: "Nokia | Future Tech Intern",
        period: "Jul 2019 - Aug 2019",
      },
      descriptions: [
        "- Analyzed network traffic with Wireshark to detect malware on mobile devices",
        "- Developed and shipped malware signatures into a system that blocks malignant requests",
        "- Learned the OSI model, TCP/IP, network security, bash, linux",
      ],
    },
  ]
  

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <section className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Experience</h2>
                  {experience_data.map((experience, index) => (
                    <ExperienceSection 
                      key={index}
                      images={experience.images} 
                      technologies={experience.technologies}
                      headings={experience.headings} 
                      descriptions={experience.descriptions}
                    />
                  ))}
                </section>
              } 
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}