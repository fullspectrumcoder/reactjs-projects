import React from 'react';
import { Container, Row, Col, Button  } from 'reactstrap';
import AppImg from '../assets/images/app-mobile-image-2.png';

export default function AppManage() {
    return (
        <div className="About bg_gray biuld-app">
            <Container>
                <Row className="align-items-center">
                    <Col lg="5">
                        <div className="mobl-app">
                            <img src={AppImg} alt="" />
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="app-wrap">
                            <h1>Use Our App to Manage Everything.</h1>
                            <ul>
                                <li>
                                    <span><i class="fa fa-check"></i></span>
                                    <p><b>Big Data Consulting</b> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships.</p>
                                </li>
                                <li>
                                    <span><i class="fa fa-check"></i></span>
                                    <p><b>Machine Learning</b> – Assertively engage backend web-readiness through efficient web services. Enthusiastically innovate frictionless e-commerce after prospective.</p>
                                </li>
                                <li>
                                    <span><i class="fa fa-check"></i></span>
                                    <p><b>Artificial Intelligence</b> – Dynamically incubate transparent technologies after cost effective action items. Competently promote user-centric sources via empowered experiences.</p>
                                </li>
                                <li>
                                    <span><i class="fa fa-check"></i></span>
                                    <p><b>Big Data Analytics</b> – Quickly incubate revolutionary data and effective infomediaries. Credibly transform high standards in convergence via market positioning interfaces.</p>
                                </li>
                            </ul>
                            <div className="get-btns">
                                <Button color="primary">Get Start Now</Button>{' '}
                                <Button outline color="primary">Learn More</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
