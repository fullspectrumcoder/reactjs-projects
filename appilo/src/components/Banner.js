import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import BannerImg from '../assets/images/bannerImg.png';

export default function Banner() {
    return (
        <div className="bg-banner">
            <div className="container">
                <Row className="align-items-center">
                    <Col lg="5">
                        <div className="banner-HD">
                            <h6>Creative SAAS website</h6>
                            <h1>Best website for <span>SAAS</span> business</h1>
                            <p>Even in the most uncertain times, Help Scout keeps you connected with customers.</p>
                            <div className="btns">
                                <Button color="primary"><i class="ri-download-cloud-line"></i> Try it free</Button>
                                <Button color="primary"><i class="ri-file-text-fill"></i> Get a demo</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="bannerImg">
                            <img src={BannerImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
