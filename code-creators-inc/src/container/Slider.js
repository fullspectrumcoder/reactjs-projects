import React from 'react';
import { Container } from 'reactstrap'; 
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import Screen1 from '../assets/images/screen1.png';
import Screen2 from '../assets/images/screen2.png';
import Screen3 from '../assets/images/screen3.png';
import Screen4 from '../assets/images/screen4.png';
import Screen5 from '../assets/images/screen5.png';

const HeroSliderConfigs = {
    containerClass: 'swiper-container hero-slider',
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
}

export default function Slider() {
    return (
        <Container className="screenshots">
        <h1 className="main-Hd">APP SCREENSHOTS</h1>
            <Swiper {...HeroSliderConfigs}>   
                <img src={Screen1} alt="" />  
                <img src={Screen2} alt="" />  
                <img src={Screen3} alt="" />  
                <img src={Screen4} alt="" />  
                <img src={Screen5} alt="" />                  
            </Swiper>
        </Container>
    )
}
