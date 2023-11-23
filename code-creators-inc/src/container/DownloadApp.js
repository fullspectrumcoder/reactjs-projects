import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Iphone1 from '../assets/images/6mockup1.png';    
import Iphone2 from '../assets/images/6mockup2.png'; 
import android from '../assets/svg/android.svg';    
import apple from '../assets/svg/apple.svg'; 

export default function DownloadApp() {
    return (
        <div className="hero-banner download-app">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Jumbotron className="banner-txt">
                            <h1>Download App</h1>
                            <p>Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick.</p>
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
                    <Col lg={6}>
                        <div className="position-relative featured-mockup">
                            <img src={Iphone1} alt="banner" className="hero-mock phone-1 mw-100" />
                            <img src={Iphone2} alt="banner" className="hero-mock phone-2 mw-100" />
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
