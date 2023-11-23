// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
// import FeaturedList from './FeaturedList';
// import Location from '../assets/svg/location.svg';
// import Phone from '../assets/svg/phone.svg';
// import Email from '../assets/svg/email.svg';

// export default function Contact() {
//     return (
//         <div className="bg-footer">
//             <Container>
//                 <div className="featured about latst-blog">
//                     <h1 className="main-Hd">GET IN TOUCH</h1>
//                     <div className="gray-bg">
//                         <Row>
//                             <Col md="4">
//                                 <FeaturedList icon={Location} name="Address" text="4 Robert Speck Parkway Suite 1500, Mississauga, Ontario, Canada, L4Z 1S1"/>
//                                 <FeaturedList icon={Phone} name="Phone" text="Head Office :+1 (855) 977 6634 Customer Support :+1 (647) 521-7558"/>
//                                 <FeaturedList icon={Email} name="Email Address" text="Customer Support help@codecreators.ca"/>
//                             </Col>
//                             <Col md="8">
//                                 <div className="contct-us banner-txt">
//                                     <h1>Start a Project With Us</h1>
//                                     <p>Send us a message so we can talk about your next augmented reality development project in Canada.</p>
//                                     <Form>
//                                         <Row form>
//                                             <Col md={12}>
//                                                 <FormGroup>
//                                                     <Input type="text" name="fname" id="fname" placeholder="First Name" />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md={12}>
//                                                 <FormGroup>
//                                                     <Input type="text" name="lname" id="lname" placeholder="Last Name" />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md={12}>
//                                                 <FormGroup>
//                                                     <Input type="email" name="email" id="email" placeholder="Your Email" />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md={12}>
//                                                 <FormGroup>
//                                                     <Input type="tel" name="tel" id="tel" placeholder="Phone Number" />
//                                                 </FormGroup>
//                                             </Col>
//                                             <Col md={12}>
//                                                 <FormGroup>
//                                                     <Input type="textarea" name="message" id="message" placeholder="Message Here..." />
//                                                 </FormGroup>
//                                             </Col>
//                                         </Row>                                
//                                         <button type="submit" className="btn btn-primary animated-btn">Submit</button>
//                                     </Form>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>                    
//                 </div>
//             </Container>
//         </div>
//     )
// }


import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import FeaturedList from './FeaturedList';
import Location from '../assets/svg/location.svg';
import Phone from '../assets/svg/phone.svg';
import Email from '../assets/svg/email.svg';
import SubmitForm from './SubmitForm';

export default function Contact() {
    return (
        <div className="bg-footer">
            <Container>
                <div className="featured about latst-blog">
                    <h1 className="main-Hd">GET IN TOUCH</h1>
                    <div className="gray-bg">
                        <Row>
                            <Col md="4">
                                <FeaturedList icon={Location} name="Address" text="4 Robert Speck Parkway Suite 1500, Mississauga, Ontario, Canada, L4Z 1S1"/>
                                <FeaturedList icon={Phone} name="Phone" text="Head Office :+1 (855) 977 6634 Customer Support :+1 (647) 521-7558"/>
                                <FeaturedList icon={Email} name="Email Address" text="Customer Support help@codecreators.ca"/>
                            </Col>
                            <Col md="8">
                                <div className="contct-us banner-txt">
                                    <h1>Start a Project With Us</h1>
                                    <p>Send us a message so we can talk about your next augmented reality development project in Canada.</p>
                                   <SubmitForm />
                                    {/* <Form>
                                        <Row form>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Input type="text" name="fname" id="fname" placeholder="First Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Input type="text" name="lname" id="lname" placeholder="Last Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Input type="email" name="email" id="email" placeholder="Your Email" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Input type="tel" name="tel" id="tel" placeholder="Phone Number" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Input type="textarea" name="message" id="message" placeholder="Message Here..." />
                                                </FormGroup>
                                            </Col>
                                        </Row>                                
                                        <button type="submit" className="btn btn-primary animated-btn">Submit</button>
                                    </Form> */}
                                </div>
                            </Col>
                        </Row>
                    </div>                    
                </div>
            </Container>
        </div>
    )
}
