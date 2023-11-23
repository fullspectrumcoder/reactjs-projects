import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

export default function BlogsList(props) {
    return (
        <Card className="bloglist">  
            <div className="img-btn">
                <img src={props.icon} alt="" className="w-100" />
                <button className="btn btn-primary animated-btn app-btn"> {props.appbtn} </button>    
            </div>                   
            <div className="blog-body">
                <p><a href="javascript:;"><i class="fa fa-user"></i> <span>CCI</span></a> <a href="javascript:;"><i class="fa fa-calendar"></i> <span>20 Nov 2020</span></a> <a href="javascript:;"><i class="fa fa-comment"></i> <span>05 Comments</span></a></p>
                <CardTitle><a href="javascript:">{props.name} </a></CardTitle>
                <CardText>{props.text}</CardText>
                <button className="btn btn-primary animated-btn"> {props.btn} </button>
            </div>                
        </Card>
    )
}
