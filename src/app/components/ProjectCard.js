"use client"

import Image from "next/image";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="proj-link" href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <Image className="project-image" src={imgUrl} alt={title}/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
