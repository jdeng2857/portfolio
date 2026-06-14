"use client"

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useState } from 'react';
import 'animate.css';
import { useIsVisible } from '../hooks/useIsVisible';
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


export const Experience = () => {
  const [ref, isVisible] = useIsVisible();

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
        title: "Shopify | Infrastructure Engineer",
        period: "Oct 2023 - Present",
      },
      descriptions: [
        "On the Edge Infrastructure team, manage ingress-nginx routing infrastructure on GKE handling 60 million RPM, including traffic shifting, autoscaling, and integration with edge network providers, DNS, and BGP. Architected a custom Kubernetes autoscaler for nginx that decouples scaling from deployments, reducing execution time by 99.9% (from 12 hours to under 30 seconds). Led an effort to simplify routing infrastructure images by removing unused dependencies and coordinating zero-downtime migrations, cutting image size by 50% and build times by 70%. Onboarded service traffic to a new GCP load balancer-based routing path, configuring Terraform resources, DNS, Kubernetes controllers, and gRPC-based control planes, delivering a 20ms reduction in latency. Serve in 24/7 on-call rotations, resolving incidents and driving root cause analyses and postmortems.",
      ],
    },
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
        period: "Jan 2023 - Sep 2023",
      },
      descriptions: [
        "On the Edge Infrastructure team, implemented location-based routing with Go and gRPC to route requests within the same region as clients, reducing p99 latency by 40%. Evaluated cloud vendor alternatives for north-south service communication and created a proposal that became the foundation of routing simplification projects. Built progressive multi-stage Kubernetes deployments by region with CI/CD tooling.",
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
        "Remodeled the merchant store page on the Shop mobile app, introducing GraphQL dataloaders to run experiments. Integrated Elasticsearch templates to add a new product-sorting capability across 2 million records, improving relevance and query performance at scale. Developed backwards-compatible pagination support for the store products page in Ruby on Rails.",
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
        "Built Ruby-based GraphQL APIs to securely authenticate users against sensitive datasets. Owned major sections of an internal dataset discovery platform redesign, developing React TypeScript components and refactoring GraphQL data layers, delivering a significantly improved navigation experience for 4,000 internal users.",
      ],
    },
  ]


  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <section ref={ref} className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}
