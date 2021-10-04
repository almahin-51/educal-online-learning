import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import bannar from '../../image/bannar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../../image/company.png';

const About = () => {
    return (
        <div>
            <div className="about">
                <h1>About</h1>
            </div>
            <div>
                <Container>
                    <Row className="my-5 py-5">
                        <Col xm={12} md={6} className="mb-4">
                            <img src={bannar} alt="" />
                        </Col>
                        <Col xm={12} md={6}>
                            <div className="about-head">
                                <h1>Achieve Your
                                    <span className="d-block">Goals With Educal</span></h1>
                                <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                            </div>
                            <div className="details">
                                <p> <FontAwesomeIcon className="me-1" icon={faCheck} />  Upskill your organization.</p>
                                <p> <FontAwesomeIcon className="me-1" icon={faCheck} />  Access more then 100K online courses</p>
                                <p> <FontAwesomeIcon className="me-1" icon={faCheck} />  Learn the latest skills</p>
                                <button className="about-btn">Apply Now</button>
                            </div>
                        </Col>
                    </Row>
                    <div className="mb-5 pb-4 text-center">
                        <h3 className="text-center mb-4">Trusted by 100 world's best companies</h3>
                        <img src={companyLogo} alt="" />
                        <button className="btn btn-light mt-4 me-2">View all partners <FontAwesomeIcon className="arrow" icon={faArrowRight} /></button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;