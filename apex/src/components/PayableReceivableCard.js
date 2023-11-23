import React from 'react';

export default function PayableReceivableCard(props) {
    return (
        <div className="Card" {...props} >
                <div className="cardTXT">
                    <h4>{props.cardTitle}</h4>
                    <p>{props.cardValue}</p>
                    <div className="btn-amount">{props.cardAmount}</div>
                </div>
            </div>
    )
}
