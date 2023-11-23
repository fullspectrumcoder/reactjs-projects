import React from 'react';
import Logo from '../../assets/images/logo.png';
import { NavbarBrand } from 'reactstrap';

export default function Footer() {
    return (
        <div className="bg-footer copyright">
            <NavbarBrand href="/"><img src={Logo} alt="Logo" /></NavbarBrand>
            <ul className="list-inline">
                <li><a href="https://www.facebook.com/CodeCreatorsInc/"> <i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/codecreators_"> <i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/11147525/"> <i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/codecreators_/?igshid=1c04izxau2h13"> <i className="fa fa-instagram"></i></a></li>
            </ul>
            <p>Code Creators &copy; 2020 All Rights Reserved</p>
        </div>
    )
}
