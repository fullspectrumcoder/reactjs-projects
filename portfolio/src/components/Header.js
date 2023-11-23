import React, {useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/images/logo.png';

export default function Header() {

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset = window.scrollY;
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
    let navbarClasses=['header'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className={navbarClasses.join("  ")} expand="md">
            <Container>
                    <div className="logo animate__animated animate__fadeInUp" data-animate-effect="fadeInUp" href="/"><img src={Logo} alt="Logo" /></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  className="justify-content-end animate__animated animate__fadeInUp" data-animate-effect="fadeInUp" id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>            
        </Navbar>
    )
}
