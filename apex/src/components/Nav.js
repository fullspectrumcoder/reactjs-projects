import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';


export default function Nav(props) {

    return (
        <div className="Nav">
            <div className="Nav-HD">
                <h3>{props.title}</h3>
                <Breadcrumb >
                    <BreadcrumbItem>
                        <Link to="/"><HomeIcon /></Link>
                        <Link to="/">Dashboard</Link>
                        <p>&nbsp;&nbsp;{props.span}&nbsp;&nbsp;{props.active}</p>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    )
}
