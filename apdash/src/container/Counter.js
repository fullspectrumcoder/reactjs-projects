import React from 'react';
import { Container } from 'reactstrap';
import CountUp from 'react-countup';

export default function Counter() {
    return (
        <Container>
            <div className="counter-wrap">
                <ul>
                    <li>
                        <h1><CountUp strat={1560} end={2350} duration={3} /></h1>
                        <p>Happy Client</p>
                    </li>
                    <li>
                    <h1><CountUp strat={1350} end={2150} duration={3} /></h1>
                        <p>App Download</p>
                    </li>
                    <li>
                    <h1><CountUp strat={1840} end={2350} duration={3} /></h1>
                        <p>Total Rates</p>
                    </li>
                    <li>
                    <h1><CountUp strat={1723} end={2250} duration={3} /></h1>
                        <p>Awards win</p>
                    </li>
                </ul>
            </div>
        </Container>        
    )
}
