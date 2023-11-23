import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BannerImg from '../assets/images/app-mobile-image.png';

export default function EasyProcess() {
    return (
        <Container className="Featured">
            <div className="biuld-app easy-process">
                <h1 className="text-center mw-100">Quick & Easy Process With Best Features</h1>
                <p className="text-center">Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.</p>
                <Row>
                    <Col md="4">
                       <div className="build-box">
                            <div className='iconImg'><span><i class="fa fa-smile"></i></span></div>
                            <div className="icon-text">
                                <h5>Responsive web design</h5>
                                <p>Modular and interchangable componente between layouts and even demos.</p>
                            </div>                            
                        </div> 
                        <div className="build-box">
                            <div className='iconImg'><span><i class="fa fa-bezier-curve"></i></span></div>
                            <div className="icon-text">
                                <h5>Loaded with features</h5>
                                <p>Modular and interchangable componente between layouts and even demos.</p>
                            </div>                            
                        </div> 
                        <div className="build-box">
                            <div className='iconImg'><span><i class="fas fa-headphones"></i></span></div>
                            <div className="icon-text">
                                <h5>Friendly online support</h5>
                                <p>Modular and interchangable componente between layouts and even demos.</p>
                            </div>                            
                        </div> 
                    </Col>
                    <Col md="4">
                       <div className="easy-img">
                            <img src={BannerImg} alt="" className="mw-100" />
                       </div>
                    </Col>
                    <Col md="4">
                       <div className="build-box">
                            <div className='iconImg'><span><i class="fa fa-desktop"></i></span></div>
                            <div className="icon-text">
                                <h5>Free updates forever</h5>
                                <p>Modular and interchangable componente between layouts and even demos.</p>
                            </div>                            
                        </div> 
                        <div className="build-box">
                            <div className='iconImg'><span><i class="fab fa-sass"></i></span></div>
                            <div className="icon-text">
                                <h5>Built with Sass</h5>
                                <p>Modular and interchangable componente between layouts and even demos.</p>
                            </div>                            
                        </div> 
                        <div className="build-box">
                            <div className='iconImg'><span><i class="fa fa-palette"></i></span></div>
                            <div className="icon-text">
                                <h5>Infinite colors</h5>
                                <p>Modular and interchangable componente between layouts and even demos.</p>
                            </div>                            
                        </div> 
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
