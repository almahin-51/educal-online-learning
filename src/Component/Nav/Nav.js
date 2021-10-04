import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className="nav-bar d-flex justify-content-between py-4">
            <div>
                <img src={props.cl} alt="" />
            </div>
            <div className="nav align-items-center">
                <Link className={props.color} to="/home">Home</Link>
                <Link className={props.color} to="/service">Services</Link>
                <Link className={props.color} to="/about">About</Link>
                <Link className={props.color} to="/contact">Contact</Link>
                
                <Button variant="danger" className="px-3">Sign up</Button>
            </div>
        </div>
    );
};

export default Nav;