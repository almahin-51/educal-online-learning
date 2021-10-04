import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className="nav-bar d-flex justify-content-between py-4">
            <div>
                <img src={props.cl} alt="" />
            </div>
            <div className="nav align-items-center">
                <NavLink to="/faq"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className={props.color} to="/home">Home</NavLink>
                <NavLink to="/faq"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className={props.color} to="/service">Services</NavLink>
                <NavLink to="/faq"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className={props.color} to="/about">About</NavLink>
                <NavLink to="/faq"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className={props.color} to="/contact">Contact</NavLink>
                
                <Button variant="primary" className="px-3">Sign up</Button>
            </div>
        </div>
    );
};

export default Nav;