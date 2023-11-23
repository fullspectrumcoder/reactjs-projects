import React from 'react';
import { Container, Row, Col} from 'reactstrap'; 
import BlogsList from './BlogsList';
import Mobile from '../assets/images/4.jpg';

export default function LatestBlog() {
    return (
        <div className="work">
            <Container>
                <div className="featured about latst-blog">
                <h1 className="main-Hd">LATEST BLOG</h1>
                    <Row>
                        <Col sm="4">
                            <BlogsList icon={Mobile} appbtn="App UI" name="Top inspirational apps UI for you 2019" text="Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you new shade drift hopes small." btn="Read More" />
                        </Col>
                        <Col sm="4">
                            <BlogsList icon={Mobile} appbtn="Google Play" name="Trendy Google apps you should check 2019" text="Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you new shade drift hopes small."  btn="Read More"/>
                        </Col>
                        <Col sm="4">
                            <BlogsList icon={Mobile} appbtn="App Features" name="Booming news: Google play apps has been relese" text="Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere happiness disposing household any old the. Widow downs you new shade drift hopes small."  btn="Read More"/>
                        </Col>
                    </Row>                           
                </div>
            </Container>
        </div> 
    )
}
