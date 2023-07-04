"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ExperienceSection = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <section 
            className={`experience_section ${hovered ? 'hovered' : ''}`}
            onClick={toggleExpanded}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3>{props.headings.title}</h3>
            <h4>{props.headings.period}</h4>

            <section className="technologies_section">
                {props.technologies?.map((technology, index) => (
                    <Button variant="outline-light" className="technologies_button" key={index}>{technology}</Button>
                ))}
            </section>
            <section className="images_section">
                {props.images?.map((image, index) => (
                <Image
                    key={index}
                    className={image.classname}
                    src={image.src}
                    alt={image.classname}
                />
                ))}
            </section>
          
            {expanded && (
                <section className={`${expanded ? 'expanded' : ''}`}>
                    {props.descriptions.map((description, index) => (
                        <p key={index}>{description}</p>
                    ))}
                </section>
            )}
        </section>
    );
    
};

export default ExperienceSection;