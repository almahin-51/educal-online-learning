import React from 'react';
import error from '../../image/error.png';
import './NotFound.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center mt-5 error-page">
            <img src={error} alt="" />
            <h1>Page Not Found!</h1>
            <p>Please try searching for currect page.</p>
            <Link to="/home" className="btn btn-primary mt-4">Back To Home</Link>
        </div>
    );
};

export default Error;