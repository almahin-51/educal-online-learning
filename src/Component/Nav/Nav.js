import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-bar d-flex justify-content-between py-4">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="nav align-items-center">
                <Link to="/home">Home</Link>
                <Link to="/service">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                
                <Button variant="danger" className="px-3">Sign up</Button>
            </div>
        </div>
    );
};

export default Nav;