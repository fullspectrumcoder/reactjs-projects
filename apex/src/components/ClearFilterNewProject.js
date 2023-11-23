import React from 'react';
import { Button } from 'reactstrap';

export default function ClearFilterNewProject(props) {
    return (
        <Button color="primary" className="clear-btn" onClick={props.clearAllFilter}>Clear Filter</Button>
    )
}
