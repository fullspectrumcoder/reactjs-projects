import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import Send from '../assets/svg/send.svg'

export default function Newsletter() {
    return (
        <Container className="position">
            <div className="newsletter testimonails">
                <Row className="align-items-center">
                    <Col lg={7}>
                        <h1>Subscribe our Newsletter</h1>
                        <p>We’re a team of non-cynics who truly care for our work.</p>
                    </Col>
                    <Col lg={5}>
                        <Form>
                            <FormGroup>
                                <Input type="email" placeholder="Enter your email" required />
                                <Button type="submit" className="btn btn-primary send-icon"><img src={Send} alt="" /></Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
