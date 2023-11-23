import React from 'react';
import { FaRegWindowRestore } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaBezierCurve } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap';

export default function BuildApp() {
    return (
        <Container>
            <div className="biuld-app">
                <h1>We Will Helps You to Build Beautiful App</h1>
                <p>Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative manufactured products.</p>
                <Row>
                    <Col md="3">
                       <div className="build-box">
                       <FaConciergeBell />
                            <h5>Modular</h5>
                            <p>All components are built to be used in combination.</p>
                        </div> 
                    </Col>
                    <Col md="3">
                       <div className="build-box">
                           <FaRegWindowRestore />
                            <h5>Responsive</h5>
                            <p>Quick is optimized to work for most devices.</p>
                        </div> 
                    </Col>
                    <Col md="3">
                       <div className="build-box">
                           <HiRefresh />
                           <h5>Scalable</h5>
                            <p>Remain consistent while developing new features.</p>
                        </div> 
                    </Col>
                    <Col md="3">
                       <div className="build-box">
                       <FaBezierCurve />
                            <h5>Customizable</h5>
                            <p>Change a few variables and the whole theme adapts.</p>
                        </div> 
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
