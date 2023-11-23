import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import blog1 from '../assets/images/news1.jpg';
import blog2 from '../assets/images/news2.jpg';
import blog3 from '../assets/images/news3.jpg';
import LatestBlog from './LatestBlog';

export default function LatestNews() {

    return (        
        <div className="queries workProcess">
            <Container>
                <div className="biuld-app easy-process">
                    <h1 className="text-center mw-100">Our Latest News</h1>
                    <p className="text-center">Efficiently matrix robust total linkage after market positioning bandwidth. Holisticly restore B2B materials rather than brand flexible paradigms vis-a-vis mission-critical e-commerce.</p>
                    <Row>
                        <Col lg="4">
                            <LatestBlog  img={blog1} title="Appropriately productize fully" detail="Some quick example text to build on the card title and make up the bulk." />
                        </Col>  
                        <Col lg="4">
                            <LatestBlog  img={blog2} title="Quickly formulate backend" detail="Synergistically engage effective ROI after customer directed partnerships." />
                        </Col> 
                        <Col lg="4">
                            <LatestBlog  img={blog3} title="Objectively extend extensive" detail="Holisticly mesh open-source leadership rather than proactive users." />
                        </Col>                                         
                    </Row>
                </div>
            </Container>
        </div>
    )
}