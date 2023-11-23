import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WorkImg from '../assets/images/health.png';
import Accordion from './Accordion';

export default function Queries() {
    const data = [
        {
            title: 'Which license do I need?',
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        },
        {
            title: 'How do I get access to a theme?',
            content: "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus. Seamlessly optimize empowered testing procedures before revolutionary processes. Progressively facilitate client-centered technologies whereas extensive users. Authoritatively."
        },
        {
            title: 'How do I see previous orders?',
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        },
        {
            title: 'Support related issues for the template?',
            content: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        }
    ]

    return (        
        <div className="queries workProcess">
            <Container>
                <div className="biuld-app easy-process">
                    <h1 className="text-center mw-100">Frequently Asked Queries</h1>
                    <p className="text-center">Efficiently productivate reliable paradigms before ubiquitous models. Continually utilize frictionless expertise whereas tactical relationships. Still have questions? Contact us</p>
                    <Row className="align-items-center">
                        <Col lg="6">
                            <div className="easy-img">
                                <img src={WorkImg} alt="" className="mw-100" />
                            </div>
                        </Col>  
                        <Col lg="6">
                            {data.map((data) => (
                                <Accordion {...data} />
                            ))}
                        </Col>                                              
                    </Row>
                </div>
            </Container>
        </div>
    )
}