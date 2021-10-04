import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { faArrowRight, faStar, faBook } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
    const { img, serviceName, lesson, rate, instactorName, instactorImg, cost } = props.course;

    return (
        <Col xm={6} md={4} className="g-4 my-4">
            <Card className=" my-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text className="d-flex align-items-center justify-content-between mb-4">
                        <span className="m-0"><FontAwesomeIcon className="text-muted me-2" icon={faBook} />
                            <span>{ lesson}</span>
                        </span>
                        <span className="m-0"><FontAwesomeIcon className="text-warning" icon={faStar} /><span className="ms-1">{rate[0].rating}</span><span className="ms-1">({rate[0].ratingCount})</span></span>
                    </Card.Text>

                    <Card.Title className="fw-bold mb-4">{serviceName}</Card.Title>
                    <Card.Text className="d-flex align-items-center mb-4">
                        <img className="rounded-circle me-2" src={instactorImg} alt="" />
                        <span className="m-0">{instactorName}</span>
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center justify-content-between">
                        <span className="m-0 fs-5 fw-bold text-danger">{cost}</span>
                        <Button variant="light">Know Details <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;