import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FooterLogo from '../assets/images/logo-white.png';
import Newsletter from './Newsletter';


export default function Footer() {
    return (
        <>
        <Newsletter />
        <div className="bg-footer">
             <Container>                 
                <div className="biuld-app"> 
                    <Row>
                        <Col lg={4}>
                            <div className="ftr-left">
                                <a href="/apdash">
                                    <img src={FooterLogo} alt=""/>
                                </a>
                                <p>Dynamically re-engineer high standards in functiona with alternative paradigms. Conveniently monetize resource maximizing initiatives.</p>
                                <div className="s-links">
                                    <a href="javascript:;" className="fa fa-twitter"></a> 
                                    <a href="javascript:;" className="fa fa-youtube"></a> 
                                    <a href="javascript:;" className="fa fa-linkedin"></a> 
                                    <a href="javascript:;" className="fa fa-dribbble"></a> 
                                </div>
                            </div>
                        </Col>  
                        <Col lg={8}>
                            <div className="ftr-right">
                                <Row>
                                    <Col lg={3}>
                                        <p>RESOURCES</p>
                                        <ul>
                                            <li><a href="javascript:;">Help</a></li>
                                            <li><a href="javascript:;">Events</a></li>
                                            <li><a href="javascript:;">Live Sessions</a></li>
                                            <li><a href="javascript:;">Open Source</a></li>
                                            <li><a href="javascript:;">Documentstion</a></li>
                                        </ul>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Products</p>
                                        <ul>
                                            <li><a href="javascript:;">Pricing</a></li>
                                            <li><a href="javascript:;">Navigation</a></li>
                                            <li><a href="javascript:;">Al Studio</a></li>
                                            <li><a href="javascript:;">Page Speed</a></li>
                                            <li><a href="javascript:;">Performance</a></li>
                                        </ul>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Company</p>
                                        <ul>
                                            <li><a href="javascript:;">About Us</a></li>
                                            <li><a href="javascript:;">Careers</a></li>
                                            <li><a href="javascript:;">Customers</a></li>
                                            <li><a href="javascript:;">Community</a></li>
                                            <li><a href="javascript:;">Our Team</a></li>
                                        </ul>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Support</p>
                                        <ul>
                                            <li><a href="javascript:;">FAQ</a></li>
                                            <li><a href="javascript:;">Sells</a></li>
                                            <li><a href="javascript:;">Contact Support</a></li>
                                            <li><a href="javascript:;">Network Status</a></li>
                                            <li><a href="javascript:;">Product Services</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>    
                    </Row>     
                </div>
            </Container>
        </div>   
    </>     
    )
}
