import React, {useEffect} from 'react';
import Logo from '../assets/images/logo.png';
import SignUpForm from './SignUpForm';

export default function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 150) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['bg-header'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }
    return (
        <div className={navbarClasses.join("  ")}>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="" /></a>
                    </div>
                    <div className="navBar">
                        <ul>
                            <li>
                                <a href="javascript:;">Home <i class="ri-arrow-down-s-fill"></i></a>
                                <div className="li-dropdown">
                                    <a href="javascript:;">Dropdown 1</a>
                                    <a href="javascript:;">Dropdown 2</a>
                                    <a href="javascript:;">Dropdown 3</a>
                                    <a href="javascript:;">Dropdown 4</a>
                                    <a href="javascript:;">Dropdown 5</a>
                                </div>
                            </li>
                            <li><a href="javascript:;">Service</a></li>
                            <li><a href="javascript:;">About</a></li>
                            <li><a href="javascript:;">Features</a></li>
                            <li><a href="javascript:;">Team</a></li>
                            <li><a href="javascript:;">Pricing</a></li>
                            <li><a href="javascript:;">Blog</a></li>
                        </ul>
                    </div>
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}
