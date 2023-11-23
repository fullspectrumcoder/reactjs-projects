import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

export default function FeatureList(props) {
    return (
        <Card className="featuredlist">     
            <img src={props.icon} alt="" className="svg-icon" />
            <CardTitle> {props.name} </CardTitle>
            <CardText>{props.text}</CardText>
        </Card>
    )
}
