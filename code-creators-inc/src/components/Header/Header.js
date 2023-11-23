import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import Heromock from '../../assets/images/hero-mock.png';
import {Collapse, Navbar, NavbarToggler,  Nav, NavItem,  Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
 
export default function Header() { 
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 50 ){
        setScrolled(true);
        } 
        else{
        setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
  
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="hero-banner">
             <Navbar className={navbarClasses.join(" ")}  expand="lg">
                <Container>
                    <Link to="/codecreatorsinc" href="" className="navbar-brand"><img src={Logo} alt="Logo" /></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link onClick={() => scroll.scrollToTop()} to="" href="#">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="" to="featured" smooth="true" duration="1000" offset={-70}>Featured</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="" to="modern-app" smooth="true" duration="1000" offset={-70}>Modern App</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="" to="work" smooth="true" duration="1000" offset={-70}>Work</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="" to="screenshots" smooth="true" duration="1000" offset={-70}>Screenshots</Link>
                            </NavItem>
                            <NavItem>
                                <Link href="" to="pricing" smooth="true" duration="1000" offset={-130}>Pricing</Link>
                            </NavItem>  
                            <NavItem>
                                <Link href="" to="bg-testimonls" smooth="true" duration="1000" offset={-70}>Testimonails</Link>
                            </NavItem>  
                            <NavItem>
                                <Link href="" to="bg-footer" smooth="true" duration="1000" offset={-70}>Contact Us</Link>
                            </NavItem>                  
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <Jumbotron className="banner-txt">
                            <h1>Perefect Design. Incredible Experience.</h1>
                            <p>Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw.</p>
                            <div className="d-flex banner-btns">
                                <Link type="button" className="btn btn-primary animated-btn" to="download-app" smooth="true" duration="1000"  offset={-70}>Download App</Link>
                                <Button  color="secondary animated-btn">More Details</Button>
                            </div>                      
                        </Jumbotron>
                    </Col>
                    <Col lg={6}>
                        <img src={Heromock} alt="banner" className="hero-mock mw-100 m-auto" />
                    </Col>
                </Row>
            </Container>
        </div>            
    )
}

