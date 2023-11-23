import React from 'react';

export default function LatestBlog(props){
    return(
        <div className="blog-card">
            <div className="position-text">
                <img src={props.img} alt="" className="w-100" />
                <h5>24 Apr</h5>
            </div>            
            <div className="blog-body">
                <a href="javascript:;"><h3>{props.title}</h3></a>
                <p>{props.detail}</p>  
                <a href="javascript:;">Read more <i className="fa fa-arrow-right"></i></a>
            </div>            
        </div>
    )
}
