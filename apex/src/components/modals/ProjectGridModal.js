import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectOption from '../SelectOption';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

export default function ProjectGridModal() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <>
            <Button className="btn-new" color="primary" onClick={toggle}><FolderSpecialIcon /> <span>New Project</span></Button>
            <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered custom-modal modal-xl">
                <ModalHeader toggle={toggle}>New Project</ModalHeader>
                <Form className="customForm">
                    <ModalBody>
                        <div className="form-row">
                            <Col lg={4} md={6}>
                                <FormGroup>
                                    <Label for="">Project Name</Label>
                                    <Input type="text" required />
                                </FormGroup>
                            </Col>
                            <Col lg={2} md={6}>
                                <FormGroup>
                                    <Label for="exampleSelect">Type</Label>
                                    <SelectOption />
                                </FormGroup>
                            </Col>
                        </div>
                        <div className="form-row">
                            <Col lg={4} md={6}>
                                <FormGroup>
                                    <Label for="">Address</Label>
                                    <Input type="text" required />
                                </FormGroup>
                            </Col>
                            <Col lg={2} md={6}>
                                <FormGroup>
                                    <Label for="">City</Label>
                                    <Input type="text" required />
                                </FormGroup>
                            </Col>
                        </div>

                        <Col lg={4} md={6}>
                            <FormGroup>
                                <Label for="">Email</Label>
                                <Input type="email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6}>
                            <FormGroup>
                                <Label for="">Email</Label>
                                <Input type="email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6}>
                            <FormGroup>
                                <Label for="">Email</Label>
                                <Input type="email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6}>
                            <FormGroup>
                                <Label for="">Email</Label>
                                <Input type="email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={6}>
                            <FormGroup>
                                <Label for="">Email</Label>
                                <Input type="email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="">Email</Label>
                                <Input type="email" placeholder="with a placeholder" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <SelectOption />
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className="btn-cancel" onClick={toggle} >Cancel</Button>
                        <Button color="primary" type="submit">Save</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}
