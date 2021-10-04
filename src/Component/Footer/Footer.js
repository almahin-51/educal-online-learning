import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../image/logo.png';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-5 pt-4">
            <Container>
                <Row>
                    <Col xm="6" md="4">
                        <img src={logo} alt="" />
                        <p className="text-color my-4">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        <div className="d-flex social-container">
                            <div className="social-icons"><FontAwesomeIcon className="social-icon" icon={faFacebookF} /></div>
                            <div className="social-icons"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></div>
                            <div className="social-icons"><FontAwesomeIcon className="social-icon" icon={faPinterest} /></div>
                        </div>
                    </Col>
                    <Col xm="6" md="2">
                        <p className="fw-bold mb-3 fs-5">Company</p>
                        <ul className="links">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/service">Courses</Link></li>
                            <li><Link to="#">Events</Link></li>
                            <li><Link to="#">Instructor</Link></li>
                            <li><Link to="#">Career</Link></li>
                            <li><Link to="#">Become a Teacher</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col xm="6" md="2">
                        <p className="fw-bold mb-3 fs-5">Platform</p>
                        <ul className="links">
                            <li><Link to="/about">Browse Library</Link></li>
                            <li><Link to="/service">Library</Link></li>
                            <li><Link to="#">Partners</Link></li>
                            <li><Link to="#">News & Blogs</Link></li>
                            <li><Link to="#">FAQs</Link></li>
                            <li><Link to="#">Tutorials</Link></li>
                        </ul>
                    </Col>
                    <Col xm="6" md="4">
                        <p className="fw-bold mb-2 fs-5 mb-3">Subscribe</p>
                        <div className="input-fluid">
                            <input type="text" placeholder="Your email address  "/>
                            <Button><FontAwesomeIcon className="fs-4" icon={faArrowRight}/></Button>
                        </div>
                        <p className="text-color mt-4"><small>Get the latest news and updates right at your inbox.</small></p>
                    </Col>
                </Row>
                <p className="text-muted text-center mt-5"><small>© 2022 Educal, All Rights Reserved.</small></p>
            </Container>
        </div>
    );
};

export default Footer;