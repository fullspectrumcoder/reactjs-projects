import React from 'react'
import { Container, Row, Col} from 'reactstrap'; 
import FeaturedList from './FeaturedList';
import Mobile from '../assets/svg/mobile.svg';
import Refresh from '../assets/svg/refresh.svg';
import Fingertouch from '../assets/svg/fingertoch.svg';

export default function Work() {
    return (
        <div>
            <div className="work">
                <Container>
                    <div className="featured about">
                    <h1 className="main-Hd">HOW IT WORKS</h1>
                        <Row>
                            <Col sm="4">
                                <FeaturedList icon={Mobile} name="Configuration" text="Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music"/>
                            </Col>
                            <Col sm="4">
                                <FeaturedList icon={Refresh} name="Refresh Setup" text="Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music"/>
                            </Col>
                            <Col sm="4">
                                <FeaturedList icon={Fingertouch} name="Start Using App" text="Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music"/>
                            </Col>
                        </Row>                           
                    </div>
                </Container>
            </div>    
        </div>
    )
}
