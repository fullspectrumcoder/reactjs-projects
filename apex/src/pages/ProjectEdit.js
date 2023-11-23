import React from 'react';
import { Row, Col } from 'reactstrap';
import Nav from '../components/Nav';
import ProjectEditTabs from '../components/ProjectEditTabs';

export default function ProjectEdit() {
    return (
        <div className="wrapper">
            <Nav title="Project Edit" active="Project Edit" span="/" />
            <div className="dashboard">
                <Row>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <div className="widget-body">
                                <Row>
                                    <Col lg={3} md={6}>
                                        <h3 className="widget-header widget-header-projectedit">Project Info</h3>
                                        <div className="cardInfo">
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <h3 className="widget-header widget-header-projectedit">Location</h3>
                                        <div className="cardInfo">
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <h3 className="widget-header widget-header-projectedit">Key Dates</h3>
                                        <div className="cardInfo">
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <h3 className="widget-header widget-header-projectedit">Contacts</h3>
                                        <div className="cardInfo">
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                            <div className="infoFlex">
                                                <h4>Status:</h4>
                                                <p>New</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                        <h3 className="widget-header">Quick Lookup</h3>
                            <div className="widget-body">
                                <div className="lookup">
                                    <div className="cardTXT">
                                        <h4>$10,000.00</h4>
                                        <p>Final SOW</p>
                                    </div>
                                    <div className="cardTXT">
                                        <h4>$0.00</h4>
                                        <p>Account Payable</p>
                                    </div>
                                    <div className="cardTXT">
                                        <h4>$0.00</h4>
                                        <p>Project Cost</p>
                                    </div>
                                    <div className="cardTXT">
                                        <h4>$10,000.00</h4>
                                        <p>Revenue</p>
                                    </div>
                                    <div className="cardTXT">
                                        <h4>$10,000.00</h4>
                                        <p>Profit</p>
                                    </div>
                                    <div className="cardTXT">
                                        <h4>100.00%</h4>
                                        <p>Profit Margin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <ProjectEditTabs />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
