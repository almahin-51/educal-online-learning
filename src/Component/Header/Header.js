import React from 'react';
import './Header.css';
import bg from '../../image/hero.png';
import { Col, Container, Row } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
        <div className="header-container">
            <Container className="m-0 p-0">
                <Row className="align-items-center">
                    <Col xm="12" md="6">
                        <h1 className="header-title mb-3 fw-bold">Educal online learning Platform</h1>
                        <h4 className="fw-bold title-bttom">Unlimited access to all 60+ instructors.</h4>
                        <p className="text-muted">2 passes (with access to all classes) for $240</p>
                        <div className="header-input">
                            <input placeholder="What do you want to learn?" type="text" />
                            <FontAwesomeIcon className="icon my-3 mx-2 text-muted" icon={faSearch} />
                        </div>
                        <p className="text-muted mt-2">You`re guaranteed to find something that`s right for you.</p>
                    </Col>
                    <Col xm="12" md="6">
                        <div className="header-img">
                            <img className="img-fluid" src={bg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;