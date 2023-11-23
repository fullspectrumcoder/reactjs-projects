import React from 'react';

export default function Card(props) {

    return (
        <div className="Card" {...props} >
            <div className="iconSVG">
                {props.icon}
            </div>
            <div className="cardTXT">
                <h4>{props.cardTitle}</h4>
                <p>{props.cardValue}</p>
            </div>
        </div>
    )
}
