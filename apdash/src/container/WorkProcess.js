import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkImg from '../assets/images/app-mobile-image-3.png';

export default function WorkProcess() {
    return (
        <div className="workProcess">
            <Container>
                <div className="biuld-app easy-process">
                    <h1 className="text-center mw-100">Our Work Process</h1>
                    <p className="text-center">Professional hosting at an affordable price. Distinctively recaptiualize principle-centered core competencies through client-centered core competencies.</p>
                    <Row>
                        <Col lg="6">
                            <div className="build-box">
                                <div className='iconImg'> <span><i class="fas fa-project-diagram"></i></span></div>
                                <div className="icon-text">
                                    <h5>Planning Idea</h5>
                                    <p>Holisticly architect sustainable meta-services for process-centric core competencies. Enthusiastically re-engineer best-of-breed outsourcing.</p>
                                </div>                         
                            </div>                             
                            <div className="build-box">                                
                                <div className="icon-text">
                                    <h5>Developed Final Product</h5>
                                    <p>Monotonectally harness holistic web-readiness after multimedia based catalysts for change. Completely brand front-end systems before visionary.</p>
                                </div> 
                                <div className='iconImg'> <span><i class="fas fa-puzzle-piece"></i></span></div>                          
                            </div>                            
                            <div className="build-box">
                                <div className='iconImg'> <span><i class="fas fa-shuttle-van"></i></span></div>
                                <div className="icon-text">
                                    <h5>Deliver to Customer</h5>
                                    <p>Monotonectally plagiarize synergistic e-business for stand-alone communities. Professionally enhance visionary manufactured products progressive.</p>
                                </div>                            
                            </div> 
                        </Col>
                        <Col lg="6">
                            <div className="easy-img">
                                <img src={WorkImg} alt="" className="mw-100" />
                            </div>
                        </Col>                        
                    </Row>
                </div>
            </Container>
        </div>
        
    )
}
