import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Preface from '../assets/images/preface.png';    
import android from '../assets/svg/android.svg';    
import apple from '../assets/svg/apple.svg'; 

export default function AppPreface() {
    return (
        <div className="hero-banner download-app app-preface featured">
            <Container>
                <h1 className="main-Hd">App Preface</h1>
                <Row className="align-items-center">
                    <Col>
                        <img src={Preface} alt="banner" className="hero-mock" />
                    </Col>
                    <Col>
                        <Jumbotron className="banner-txt">
                            <h1>Booming news: Google play apps has been relese</h1>
                            <p>Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried ﻿no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors</p>
                            <div className="d-flex banner-btns">
                            <Button color="secondary animated-btn svg-btn">
                                <span><img src={android} alt="" /></span>
                                <span>Available on Google Store</span>
                            </Button>
                            <Button color="secondary animated-btn svg-btn">
                                <span><img src={apple} alt="" /></span>
                                <span>Available on Apple Store</span>
                            </Button>
                            </div>                      
                        </Jumbotron>
                    </Col>                    
                </Row>
            </Container>
        </div>
    )
}
