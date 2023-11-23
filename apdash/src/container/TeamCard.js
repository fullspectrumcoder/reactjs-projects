import React from 'react';

export default function TeamCard(props) {
    return (
        <div className="team-card">
            <img src={props.img} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <p>{props.detail}</p>    
            <div className="social-links">
                <a href="javascript:;"><i className="fa fa-facebook"></i></a>
                <a href="javascript:;"><i className="fa fa-twitter"></i></a>
                <a href="javascript:;"><i className="fa fa-dribbble"></i></a>
                <a href="javascript:;"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    )
}
