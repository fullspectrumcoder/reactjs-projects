import React from 'react';
import { Container,  Row, Col} from 'reactstrap';
import TeamImg1 from '../assets/images/team-member-1.png';
import TeamImg2 from '../assets/images/team-member-2.png';
import TeamImg3 from '../assets/images/team-member-3.png';
import TeamImg4 from '../assets/images/team-member-4.png';
import TeamCard from './TeamCard';

export default function TeamMembers() {

    return (
        <Container>
            <div className="biuld-app easy-process">
                <h1 className="text-center mw-100">Our Team Members</h1>
                <p className="text-center">Authoritatively mesh intuitive paradigms vis-a-vis goal-oriented partnerships. Continually extend open-source outside the box thinking after focused catalysts.</p>
                <Row>
                    <Col lg={3}>
                        <TeamCard img={TeamImg1} title="Richard Ford" subtitle="Instructor of Mathematics" detail="Authoritatively engage leading-edge processes tactical capital" />
                    </Col>
                    <Col lg={3}>
                        <TeamCard img={TeamImg2} title="Kely Roy" subtitle="Lead Designer" detail="Monotonectally engage sticky collaborative markets synergistically" />
                    </Col>
                    <Col lg={3}>
                        <TeamCard img={TeamImg3} title="Gerald Nichols" subtitle="Managing Director" detail="Assertively procrastinate standardized whereas technically sound" />
                    </Col>
                    <Col lg={3}>
                        <TeamCard img={TeamImg4} title="Gerald Nichols" subtitle="Team Manager" detail="Synergistically actualize out the-box technologies before parallel process" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
