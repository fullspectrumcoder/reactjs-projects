import React, { useState, useEffect } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,Container} from 'reactstrap';
import Logo from '../assets/images/logo-white.png';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header () {

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
    }, [])
    let navbarClasses=['header'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar className={navbarClasses.join("  ")} expand="md">
            <Container>
                <NavbarBrand href="/apdash"><img src={Logo} alt="Logo" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link onClick={() => scroll.scrollToTop()} href="" to=''>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="" to="About" smooth="true" duration={1000} offset={-50}>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="" to="Featured" smooth="true" duration={1000} offset={-50}>Features</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Pages
                            </DropdownToggle>
                            <DropdownMenu right>
                                <NavItem>
                                    <Link href="/" to=''>Blogs</Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/" to=''>Team</Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/" to=''>Projects</Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/" to=''>Posts</Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/" to=''>About Us</Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/" to=''>Contact Us</Link>
                                </NavItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link href="" to="appSlider" smooth="true" duration={1000} offset={-50}>Screenshots</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="" to="workProcess" smooth="true" duration={1000} offset={-50}>Process</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="" to="Pricing" smooth="true" duration={1000} offset={-50}>Pricing</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="" to="contact" smooth="true" duration={1000} offset={-50}>Contact</Link>
                        </NavItem>                    
                    </Nav>
                </Collapse>
            </Container>            
        </Navbar>
    )
}
