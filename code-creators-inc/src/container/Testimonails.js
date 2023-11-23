import React, { useState } from 'react';
import { Container,Col, Row,  Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

    const items = [
        {
          src: 'http://themeatelier.net/react-project/appiya/assets/img/avater1.jpeg' , 
          paraText:'“ Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. ”',
          cTitle: 'Jenifar deo.',
          designation: 'Apps Developer',  
          altText: 'Slide 1',
          caption: '*****'
        },

        {
            src: 'http://themeatelier.net/react-project/appiya/assets/img/avater1.jpeg' , 
            paraText:'“ Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. ”',
            cTitle: 'Kate Hauly',
            designation: 'Apps Developer',  
            altText: 'Slide 1',
            caption: '*****'
        },

        {
            src: 'http://themeatelier.net/react-project/appiya/assets/img/avater1.jpeg' , 
            paraText:'“ Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. ”',
            cTitle: 'John deo.',
            designation: 'Apps Developer',  
            altText: 'Slide 1',
            caption: '*****'
          }

      ];

export default function Testimonails(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const slides = items.map((item) => {
      return (
        <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src} >
            <Row>
                <Col sm="3">
                    <img className="rounded-circle" src={item.src} alt={item.altText} />
                </Col>
                <Col sm="9" className="p-0">
                    <p>{item.paraText}</p>
                    <h5>{item.cTitle}</h5>
                    <p className="designation">{item.designation}</p>
                    <p className="ratings">{item.caption}</p>
                </Col>
            </Row>
        </CarouselItem>
      );
    });    

    return (
        <div className="bg-testimonls hero-banner">
            <Container>
                <div className="rotate-heading"><h2>Clients Review</h2></div>
                <Row className="justify-content-center">
                    <Col sm="8">
                        <Carousel activeIndex={activeIndex} >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                        </Carousel>
                    </Col>
                </Row>    
            </Container>    
        </div>
    )
}


