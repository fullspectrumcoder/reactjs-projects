import React, { useState, useEffect } from 'react';
import {  Link, animateScroll as scroll } from 'react-scroll';

export default function Scroll() {

    const [scrolled,setScrolled]= useState(false);

    const handleScroll=() => {
        const offset = window.scrollY;
        if(offset > 1000 ){
        setScrolled(true);
        } 
        else{
        setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    
    let navbarClasses=['scroll-top'];
    
    if(scrolled){
        navbarClasses.push('open-scroll');
    }

    return (
        <div className={navbarClasses.join("  ")}>
            <Link href="" onClick={() => scroll.scrollToTop()} to=''>
                <i className="fa fa-hand-point-up"></i>
            </Link>
        </div>
    )
}
