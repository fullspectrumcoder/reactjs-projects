import React, { useState } from 'react';
import { Container,Modal, ModalHeader } from 'reactstrap';


export default function AppPlatform(props) {
    const {
        className
      } = props;
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="app-platform">
             <Container>
                <div className="biuld-app">
                    <h1 className="text-center mw-100">The Most Uses App Platform</h1>
                    <p className="text-center m-auto">Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content.</p>
                    <a className="popus-play"  onClick={toggle}>
                        <span><i class="fa fa-play"></i></span>
                    </a>                    
                </div>
            </Container>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}></ModalHeader>                
            </Modal>
        </div>        
    )
}
