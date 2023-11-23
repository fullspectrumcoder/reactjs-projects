import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import OwlCarousel from "react-owl-carousel";
import slide1 from '../assets/images/01.jpg';
import slide2 from '../assets/images/02.jpg';
import slide3 from '../assets/images/03.jpg';
import slide4 from '../assets/images/04.jpg';
import slide5 from '../assets/images/05.jpg';
import slide6 from '../assets/images/06.jpg';

export default function AppScreens() {
    return (
        <Container>
            <div className="biuld-app easy-process appSlider">
                <h1 className="text-center mw-100">Apps Screenshots</h1>
                <p className="text-center">Proactively impact value-added channels via backend leadership skills. Efficiently revolutionize worldwide networks whereas strategic catalysts for change.</p>
                <Row>
                    <Col md="12">
                        <div className="screenshot-wrap">
                            <div class="screenshot-frame"></div>
                            <OwlCarousel className="owl-theme" loop  items={4} autoplay center dots>
                                <div className="item">
                                    <img src={slide1} alt="" />
                                </div>
                                <div className="item">
                                    <img src={slide2} alt="" />
                                </div>
                                <div className="item">
                                    <img src={slide3} alt="" />
                                </div>
                                <div className="item">
                                    <img src={slide4} alt="" />
                                </div>
                                <div className="item">
                                    <img src={slide5} alt="" />
                                </div>
                                <div className="item">
                                    <img src={slide6} alt="" />
                                </div>
                            </OwlCarousel>  
                        </div>                        
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
