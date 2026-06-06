"use client"

import { Container, Row, Col} from "react-bootstrap";
import { useIsVisible } from '../hooks/useIsVisible';

export const ExperienceDescription = ({ title, description, images }) => {
    const [ref, isVisible] = useIsVisible();

    function renderImages() {
        return (
            <img src={images}/>
        );
    }

    return (
        <section className="experience_description" id="experience_description">
            <Container>
                <Row>
                    <Col size={12}>
                        <div ref={ref} className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Experience</h2>
                            <h3>Shopify | Infrastructure Engineer Intern</h3>
                            <p>Developed HTTPS L7 routing infrastructure with Google Kubernetes Engine, involving updating custom NGINX
            middleware written in Lua, provisioning SSL certificates and firewall rules, traffic management, handling 20 million RPM</p>
                            <p>Built observability tooling with Prometheus metrics and integrated request latency dashboards with alerts</p>
                            <p>Implemented automated memory deletion for Kubernetes controller in Golang, reducing resources used</p>
                            <p>Upgraded Kubernetes cluster fleet in Terraform with custom developer tools, improving infrastructure security</p>
                            <p>Reduced latency between two major services by 75% using Kubernetes load testing</p>
                            <p>Skills: Kubernetes, Google Cloud Platform (GCP), Terraform, NGINX, Golang</p>
                            {renderImages()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
