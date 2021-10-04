import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Service = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <Container className="mt-5 pt-5">
                <div className="home my-5 pt-4">
                    <h1>Find The Right <span>Online Course For You</span></h1>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
                <Row>
                    {
                        courses.map(course => <Course key={course.index} course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Service;