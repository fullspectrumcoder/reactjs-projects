import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Send from '../assets/svg/plane.svg';
import Mail from '../assets/svg/mail.svg';
import Form from './SubmitForm';

export default function Contact() {

    return (
        <Container className="contact">
            <div className="biuld-app easy-process">
               <Row>
                    <Col lg={6}>
                        <div className="workProcess">
                            <h2>Ready to get started?</h2>
                            <Form />                           
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="location">
                            <h1>Looking for a excellent Business idea?</h1>
                            <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                            <Button color="primary">Get Direction <i className="fa fa-arrow-right pl-2"></i></Button>
                            <hr />
                            <div className="flex-locat">
                                <div className="svg-icon">
                                    <img src={Send} alt=""/>
                                </div>
                                <div>
                                    <h4>Company Location</h4>
                                    <span>100 Yellow House, Mn Factory, United State, 13420</span>
                                </div>
                            </div>
                            <div className="flex-locat">
                                <div className="svg-icon">
                                    <img src={Mail} alt=""/>
                                </div>
                                <div>
                                    <h4>Email Address</h4>
                                    <a href="javascript:;"><span>hello@yourdomain.com</span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
