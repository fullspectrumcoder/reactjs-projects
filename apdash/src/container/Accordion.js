import React, { useState } from 'react';

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState('false');

    return (
        <React.Fragment>
            <div className="accord-block">
                <a href="javascript:;" onClick={() => setIsOpen(!isOpen)} className={isOpen ? '' : 'active-accord'}>
                    <h3>{props.title}</h3>
                </a>
                {!isOpen && (
                    <div className='accord-body'>
                        <p>{props.content}</p>
                    </div>
                )}
                
            </div>
        </React.Fragment> 
    )
}
