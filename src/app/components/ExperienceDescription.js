"use client"

import { Container, Row, Col} from "react-bootstrap";
import TrackVisibility from "react-on-screen"
import PropTypes from 'prop-types';

export const ExperienceDescription = ({ title, description, images }) => {

    ExperienceDescription.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        // images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

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
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Experience</h2>
                            <h3>Shopify | Infrastructure Engineer Intern</h3>
                            <p>Developed HTTPS L7 routing infrastructure with Google Kubernetes Engine, involving updating custom NGINX
            middleware written in Lua, provisioning SSL certificates and firewall rules, traffic management, handling 20 million RPM</p>
                            <p>Built observability tooling with Prometheus metrics and integrated request latency dashboards with alerts</p>
                            <p>Implemented automated memory deletion for Kubernetes controller in Golang, reducing resources used</p>
                            <p>Upgraded Kubernetes cluster fleet in Terraform with custom developer tools, improving infrastructure security</p>
                            <p>Reduced latency between two major services by 75% using Kubernetes load testing</p>
                            <p>Skills: Kubernetes, Google Cloud Platform (GCP), Terraform, NGINX, Golang</p>
                            {/* <img className="kubernetes" src={kubernetesImg}></img>
                            <img className="gcp" src={gcpImg}></img>
                            <img className="terraform" src={terraformImg}></img>
                            <img className="nginx" src={nginxImg}></img>
                            <img className="golang" src={golangImg}></img> */}
                            {renderImages()}
                        </div>} 
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}