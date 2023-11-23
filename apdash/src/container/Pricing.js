import React, { useState } from 'react';
import { Container, Button, Row, Col} from 'reactstrap';
import planImg1 from '../assets/images/priching-img-1.png';
import planImg2 from '../assets/images/priching-img-2.png';
import planImg3 from '../assets/images/priching-img-3.png';
import classnames from 'classnames';

export default function Pricing() {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const [checked, setChecked] = useState('false');

    const checkeAmount = (activeTab) => {
        if(checked !== activeTab) setChecked(activeTab);
    }

    return (
        <Container className="Pricing">
                <div className="biuld-app easy-process">
                    <h1 className="text-center mw-100">Our Flexible Price</h1>
                    <p className="text-center">Professional hosting at an affordable price. Distinctively recaptiualize principle-centered core competencies through client-centered core competencies.</p>
                    <div className="state-btns">
                        <a href="javascript:;" className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); checkeAmount(!checked); }}>
                             Monthly
                        </a>
                        <a href="javascript:;" className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); checkeAmount(!checked); }}>
                            Yearly
                        </a>    
                    </div>   
                    <div activeTab={activeTab}>
                        <Row>
                            <Col md={4}>
                                <div className="pricing-plan">
                                    <div className="img-icon">
                                        <img src={planImg1} alt="" />
                                    </div>
                                    <p>{checked ? '$19' : '$69' }<span>.99</span></p>
                                    <h5>Standard</h5>
                                    <ul>
                                        <li><span>Limited</span> access for a month</li>
                                        <li><span>15</span> customize sub page</li>
                                        <li class="text-deem"><span>105</span> disk space</li>
                                        <li class="text-deem"><span>3</span> domain access</li>
                                        <li class="text-deem">24/7 phone support</li>
                                    </ul>
                                    <Button color="primary">Purchase Now</Button>{' '}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="pricing-plan active">
                                    <div className="img-icon">
                                        <img src={planImg2} alt="" />
                                    </div>
                                    <p>{checked ? '$49' : '$159' }<span>.99</span></p>
                                    <h5>Premium</h5>
                                    <ul>
                                        <li><span>Unlimited</span> access for a month</li>
                                        <li><span>25</span> customize sub page</li>
                                        <li><span>150</span> disk space</li>
                                        <li class="text-deem"><span>5</span> domain access</li>
                                        <li class="text-deem">24/7 phone support</li>
                                    </ul>
                                    <Button color="primary">Purchase Now</Button>{' '}
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="pricing-plan">
                                    <div className="img-icon">
                                        <img src={planImg3} alt="" />
                                    </div>
                                    <p>{checked ? '$69' : '$259' }<span>.99</span></p>
                                    <h5>Unlimited</h5>
                                    <ul>
                                        <li><span>Limited</span> access for a month</li>
                                        <li><span>15</span> customize sub page</li>
                                        <li><span>120</span> disk space</li>
                                        <li><span>5</span> domain access</li>
                                        <li>24/7 phone support</li>
                                    </ul>
                                    <Button color="primary">Purchase Now</Button>{' '}
                                </div>
                            </Col>
                        </Row>                        
                    </div> 
                    <div className="pricing-ftr">
                        <h3><i class="fa fa-headphones"></i> We're Here to Help You</h3>
                        <h5>Have some questions? <a href="javacript:;">Chat with us now</a> or <a href="javacript:;">send us an email</a> to get in touch.</h5>
                    </div>
                </div>
            </Container>
    )
}
