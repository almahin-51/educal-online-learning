import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Contact.css';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <div>
            <div className="contact-container">
                <h1>Contact</h1>
            </div>
            <div className="my-5 py-5">
                <Container>
                    <Row className="justify-content-between">
                        <Col xm={12} md={6}>
                            <div className="contact-head mb-5">
                                <h1>Get Intouch</h1>
                                <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                            </div>
                            <div className="cantact-input">
                                <input className="one" type="text" placeholder="Your Name" />
                                <input className="two" type="text" placeholder="Your Email" />
                                <input className="three" type="text" placeholder="Subject" />
                                <textarea name="" placeholder="Enter Your Message" cols="30" rows="6"></textarea>
                            </div>
                            <div className="pt-5">
                                <p>
                                    <input className="me-2" type="checkbox" name="" id="check" />
                                    <label for="check">I agree to the <span className="text-primary fw-bold ">Terms & Conditions</span></label>
                                </p>
                                <Button>Send your message</Button>
                            </div>
                        </Col>
                        <Col xm={12} md={3}>
                            <div className="address">
                                <div className="d-flex mb-4">
                                    <FontAwesomeIcon icon={faMapMarker} />
                                    <div className="ms-2">
                                        <h4>New York Office</h4>
                                        <p>Maypole Crescent 70-80 Upper</p>
                                        <p>St Norwich NR2 1LT</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <div className="ms-2">
                                        <h4>Email us directly</h4>
                                        <p>support@educal.com</p>
                                        <p>info@educal.com</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <div className="ms-2">
                                        <h4>Phone</h4>
                                        <p>+(426) 742 26 44</p>
                                        <p>+(224) 762 442 32</p>
                                    </div>
                                </div>
                            </div>
                            <div className="follow ms-3">
                                <h5>Follow Us</h5>
                                <div className="d-flex social-container mt-4">
                                    <div className="social-icons"><FontAwesomeIcon className="social-icon" icon={faFacebookF} /></div>
                                    <div className="social-icons"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></div>
                                    <div className="social-icons"><FontAwesomeIcon className="social-icon" icon={faPinterest} /></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;