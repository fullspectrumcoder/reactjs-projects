import React from 'react';
import { Row, Col } from 'reactstrap';
import MonthlyMultiColumnGraph from '../components/charts/MonthlyMultiColumnGraph';
import Nav from '../components/Nav';
import AlertTabs from '../components/AlertTabs';



export default function Alert() {

    const bgCard = elementID => {
        document.getElementById('bgCard12').classList.remove('activeCard');
        document.getElementById('bgCard13').classList.remove('activeCard');
        document.getElementById('bgCard14').classList.remove('activeCard');
        document.getElementById('bgCard15').classList.remove('activeCard');
        document.getElementById('bgCard16').classList.remove('activeCard');
        document.getElementById('bgCard17').classList.remove('activeCard');
        document.getElementById(elementID).classList.add('activeCard');
    };


    const clearAllFilter = () => {
        document.getElementById('bgCard12').classList.remove('activeCard');
        document.getElementById('bgCard13').classList.remove('activeCard');
        document.getElementById('bgCard14').classList.remove('activeCard');
        document.getElementById('bgCard15').classList.remove('activeCard');
        document.getElementById('bgCard16').classList.remove('activeCard');
        document.getElementById('bgCard17').classList.remove('activeCard');
    };

    return (
        <div className="wrapper">
            <Nav title="Alert" active="Alert" span="/" />
            <div className="dashboard">
                <Row>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Monthly Overview</h3>
                            <div className="widget-body"><MonthlyMultiColumnGraph /> </div>
                        </div>
                    </Col>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Alert Overview</h3>
                            <div className="widget-body">
                                <AlertTabs />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
