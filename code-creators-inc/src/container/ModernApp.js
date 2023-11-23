import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Heromock from '../assets/images/experience.png';

export default function ModernApp() {
    return (
        <div className="hero-banner modern-app">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={Heromock} alt="banner" className="hero-mock mw-100 mb-lg-0 mb-5" />
                    </Col>
                    <Col lg={6}>
                        <Jumbotron className="banner-txt mt-lg-0 mt-5">
                            <h1 className="main-Hd">EXPERIENCEAWSOME, MODERNAPP</h1>
                            <p>Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described.</p>
                            <Button color="primary animated-btn">More Detail</Button>                     
                        </Jumbotron>
                    </Col>                    
                </Row>
            </Container>
        </div>
    )
}
