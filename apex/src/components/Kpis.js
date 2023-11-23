import React from 'react';

export default function Kpis(props) {
    return (
        <div className="kpi-block">
            <h2>{props.title}</h2>
            <div className="flex-kpi">
                <div className="kpi-values">
                    <h3>Last Month:</h3>
                    <p>{props.value1}</p>                     
                </div>
                <div className="kpi-values">
                    <h3>This Month:</h3>
                    <p>{props.value2}</p>                     
                </div>
            </div>
        </div>
    )
}

