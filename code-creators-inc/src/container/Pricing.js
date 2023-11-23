import React from 'react';
import { Container, Row, Col} from 'reactstrap'; 

export default function Pricing() {
    return (
        <div className="bg-pricing">
            <Container>
                <Row>
                    <Col sm="12">    
                        <div className="pricing">
                            <h1 className="main-Hd">PRICING PLANS</h1>
                        </div>                            
                        <Row>
                            <Col sm="4">
                                <div className="plans-box">
                                    <div className="plans-before">
                                        <div className="pricing-head">
                                            <div className="pr-box">
                                                <h1>$17 <span>/ Month</span></h1>
                                                <p>Starter</p>
                                            </div>                                            
                                            <span class="wave"></span>
                                            <span class="wave"></span>
                                            <span class="wave"></span>
                                        </div>
                                        <div className="pricing-body">
                                            <ul>
                                                <li>5 Projects</li>
                                                <li>5 GB of Storage</li>
                                                <li>Up to 10 Users</li>
                                                <li>Reliable Backup</li>
                                                <li>Security Suite</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <button class="btn btn-primary animated-btn">Purchase Now</button>
                                        </div>
                                    </div>
                                </div>
                            </Col> 
                            <Col sm="4">
                                <div className="plans-box">
                                    <div className="plans-before">
                                        <div className="pricing-head">
                                            <div className="pr-box">
                                                <h1>$34 <span>/ Month</span></h1>
                                                <p>Popular</p>
                                            </div> 
                                            <span class="wave"></span>
                                            <span class="wave"></span>
                                            <span class="wave"></span>
                                        </div>
                                        <div className="pricing-body">
                                            <ul>
                                                <li>5 Projects</li>
                                                <li>5 GB of Storage</li>
                                                <li>Up to 10 Users</li>
                                                <li>Reliable Backup</li>
                                                <li>Security Suite</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <button class="btn btn-primary animated-btn">Purchase Now</button>
                                        </div>
                                    </div>    
                                </div>
                            </Col> 
                            <Col sm="4">
                                <div className="plans-box">
                                    <div className="plans-before">
                                        <div className="pricing-head">
                                            <div className="pr-box">
                                                <h1>$99 <span>/ Month</span></h1>
                                                <p>Premium</p>
                                            </div> 
                                            <span class="wave"></span>
                                            <span class="wave"></span>
                                            <span class="wave"></span>
                                        </div>
                                        <div className="pricing-body">
                                            <ul>
                                                <li>5 Projects</li>
                                                <li>5 GB of Storage</li>
                                                <li>Up to 10 Users</li>
                                                <li>Reliable Backup</li>
                                                <li>Security Suite</li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <button class="btn btn-primary animated-btn">Purchase Now</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>    
                        </Row>   
                    </Col>                         
                </Row>
            </Container>
        </div>
    )
}
