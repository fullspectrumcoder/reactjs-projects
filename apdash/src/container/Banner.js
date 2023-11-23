import React from 'react';
import { Container, Row , Col } from 'reactstrap';
import BannerImg from '../assets/images/app-mobile-image.png';

export default function Banner() {
    return (
        <div className="Banner">
            <Container>
                <Row className="align-items-center">
                    <Col lg="6">
                        <div className="txt-HD">
                            <h1>Creative Way to Showcase Your App</h1>
                            <p>Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="app-download">
                                        <span className="fa fa-apple"></span>
                                        <div className="download-text text-left">
                                            <small>Download form</small>
                                            <h5>App Store</h5>
                                        </div>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="app-download">
                                        <span className="fa fa-play"></span>
                                        <div className="download-text text-left">
                                            <small>Download form</small>
                                            <h5>Google Play</h5>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="5" className="text-right">
                        <img src={BannerImg} alt="" className='mw-100 m-auto d-block' />
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
