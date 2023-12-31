"use client"

import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import Image from "next/image";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/api/resume';
        link.download = 'jerrydeng.pdf';
        link.click();
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                </Nav>
                <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/jdeng2857/" target="_blank"><Image src={navIcon1} alt="linkedin" /></a>
                    <a href="https://github.com/jdeng2857" target="_blank"><Image src={navIcon3} alt="github"/></a>
                    <a href="/jerrydeng.pdf" download target="_blank"><Image src={navIcon2} alt="resume" /></a>
                </div>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}