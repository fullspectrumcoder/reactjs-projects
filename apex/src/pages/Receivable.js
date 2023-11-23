import React from 'react';
import { Row, Col } from 'reactstrap';
import PayableReceivableCard from '../components/PayableReceivableCard';
import MonthlyMultiColumnGraph from '../components/charts/MonthlyMultiColumnGraph';
import Nav from '../components/Nav';
import ProjectGrid from '../components/grid/ProjectGrid';
import ClearFilterNewProject from '../components/ClearFilterNewProject';


export default function Receivable() {

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
            <Nav title="Receivable" active="Receivable" span="/" />
            <div className="dashboard">
                <Row>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <div className="widget-body"><MonthlyMultiColumnGraph /> </div>
                        </div>
                    </Col>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Account Receivable Overview</h3>
                            <div className="widget-body">
                                <div className="cardFlex CardPayableReceivable">
                                    <PayableReceivableCard id="bgCard12" onClick={() => bgCard('bgCard12')} cardTitle="Past Due" cardValue="9" cardAmount="10714.95" />
                                    <PayableReceivableCard id="bgCard13" onClick={() => bgCard('bgCard13')} cardTitle="7 days" cardValue="4" cardAmount="1000.00" />
                                    <PayableReceivableCard id="bgCard14" onClick={() => bgCard('bgCard14')} cardTitle="10 Days" cardValue="0" cardAmount="100.00" />
                                    <PayableReceivableCard id="bgCard15" onClick={() => bgCard('bgCard15')} cardTitle="20 Days" cardValue="1" cardAmount="5000.00" />
                                    <PayableReceivableCard id="bgCard16" onClick={() => bgCard('bgCard16')} cardTitle="30 Days" cardValue="2" cardAmount="0.00" />
                                    <PayableReceivableCard id="bgCard17" onClick={() => bgCard('bgCard17')} cardTitle="40 Days" cardValue="2" cardAmount="0.00" />
                                </div>
                                <div className="cardFlex flex-btns">
                                    <ClearFilterNewProject clearAllFilter={clearAllFilter} />
                                </div>                                
                                <ProjectGrid />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
