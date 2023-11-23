import React from 'react'
import { Container, Row, Col} from 'reactstrap'; 
import FeaturedList from './FeaturedList';
import Flexible from '../assets/svg/flexible.svg';
import Resolution from '../assets/svg/resolution.svg';
import Code2 from '../assets/svg/code2.svg';

export default function About() {
    return (
        <Container>
            <div className="featured about">
                <Row>
                    <Col md="4">
                        <FeaturedList icon={Flexible} name="Easy Customize" text="Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music"/>
                    </Col>
                    <Col md="4">
                        <FeaturedList icon={Code2} name="Bug Free Code" text="Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music"/>
                    </Col>
                    <Col md="4">
                        <FeaturedList icon={Resolution} name="High Resolution" text="Eat him four are rich nor calm. By an packages rejoiced exercise. To ought on am marry rooms doubt music"/>
                    </Col>
                </Row>                           
            </div>
        </Container>
    )
}
