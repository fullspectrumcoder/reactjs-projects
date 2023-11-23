import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Iphone1 from '../assets/images/iphone1.png';    
import Iphone2 from '../assets/images/iphone2.png';    
import FeaturedList from './FeaturedList';
import Installation from '../assets/svg/installation.svg';
import Responsive from '../assets/svg/responsive.svg';
import Flexible from '../assets/svg/flexible.svg';
import Resolution from '../assets/svg/resolution.svg';
import Code from '../assets/svg/code.svg';
import Cloud from '../assets/svg/cloud.svg';

export default function Featured() {
    return (
        <Container>
            <Row>
                <div className="featured">
                    <h1 className="main-Hd">Featured</h1>
                    <Row>
                        <Col>
                            <Row>
                                <Col sm="6">
                                    <FeaturedList icon={Installation} name="Easy Installation" text="Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot"/>
                                </Col>
                                <Col sm="6">
                                    <FeaturedList icon={Responsive} name="Responsive Design" text="Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot"/>
                                </Col>
                                <Col sm="6">
                                    <FeaturedList icon={Flexible} name="Flexible Interface" text="Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot"/>
                                </Col>
                                <Col sm="6">
                                    <FeaturedList  icon={Resolution} name="High Resolution" text="Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot"/>
                                </Col>
                                <Col sm="6">
                                    <FeaturedList icon={Code} name="Bug Free Code" text="Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot"/>
                                </Col>
                                <Col sm="6">
                                    <FeaturedList icon={Cloud} name="Cloud Storage" text="Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <div className="position-relative featured-mockup">
                                <div className="bordered-box"></div>
                                <img src={Iphone1} alt="banner" className="hero-mock phone-1 mw-100" />
                                <img src={Iphone2} alt="banner" className="hero-mock phone-2 mw-100" />
                            </div>                            
                        </Col>
                    </Row>                           
                </div>
            </Row>
        </Container>
    )
}
