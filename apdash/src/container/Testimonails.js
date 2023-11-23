import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import testimg1 from '../assets/images/1.jpg';
import testimg2 from '../assets/images/2.jpg';
import testimg3 from '../assets/images/3.jpg';
import testimg4 from '../assets/images/4.jpg';
import OwlCarousel from "react-owl-carousel";

export default function Testmonails() {
    return (
        <div className="app-platform testimonails">
             <Container>
                <div className="biuld-app">    
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="left-side">
                            <h1>What Our Client Say About Apdash</h1>
                            <p>Collaboratively actualize excellent schemas without effective models. Synergistically engineer functionalized applications rather than backend e-commerce.</p>
                        </div>
                    </Col>      
                    <Col lg={6}>
                        <OwlCarousel className="owl-theme testi-slider" loop  items={1} autoplay dots>
                            <div className="pading-top">
                                <div className="testi-slide">
                                    <div className="flex-slide">
                                        <div>
                                            <img src={testimg1} alt="" /> 
                                        </div>
                                        <div>
                                            <p>John Charles</p>
                                            <span>Head Of Admin</span>
                                        </div>
                                        <div className="ml-auto">
                                        <i class="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <span className="descrb">Interactively optimize fully researched expertise vis-a-vis plug-and-play relationships. Intrinsicly develop viral core competencies for fully tested customer service. Enthusiastically create next-generation growth strategies and.</span>
                                </div>
                            </div>
                            <div className="pading-top">
                                <div className="testi-slide">
                                    <div className="flex-slide">
                                        <div>
                                            <img src={testimg2} alt="" /> 
                                        </div>
                                        <div>
                                            <p>Arabella Ora</p>
                                            <span>HR Manager</span>
                                        </div>
                                        <div className="ml-auto">
                                        <i class="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <span className="descrb">Objectively synthesize client-centered e-tailers for maintainable channels. Holisticly administrate customer directed vortals whereas tactical functionalities. Energistically monetize reliable imperatives through client-centric.</span>
                                </div>
                            </div>
                            <div className="pading-top">
                                <div className="testi-slide">
                                    <div className="flex-slide">
                                        <div>
                                            <img src={testimg3} alt="" /> 
                                        </div>
                                        <div>
                                            <p>Jeremy Jere</p>
                                            <span>Team Leader</span>
                                        </div>
                                        <div className="ml-auto">
                                        <i class="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <span className="descrb">Enthusiastically innovate B2C data without clicks-and-mortar convergence. Monotonectally deliver compelling testing procedures vis-a-vis B2B testing procedures. Competently evisculate integrated resources whereas global.</span>
                                </div>
                            </div>
                            <div className="pading-top">
                                <div className="testi-slide">
                                    <div className="flex-slide">
                                        <div>
                                            <img src={testimg4} alt="" /> 
                                        </div>
                                        <div>
                                            <p>John Charles</p>
                                            <span>Marketing Head</span>
                                        </div>
                                        <div className="ml-auto">
                                        <i class="fa fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <span className="descrb">Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>    
                </Row>          
                </div>
            </Container>
        </div>        
    )
}
