import React from 'react';
import { Row, Col } from 'reactstrap';
import PayableReceivableCard from '../components/PayableReceivableCard';
import MonthlyMultiColumnGraph from '../components/charts/MonthlyMultiColumnGraph';
import Nav from '../components/Nav';
import ProjectGrid from '../components/grid/ProjectGrid';
import ClearFilterNewProject from '../components/ClearFilterNewProject';


export default function Payable() {

    const bgCard = elementID => {
        document.getElementById('bgCard6').classList.remove('activeCard');
        document.getElementById('bgCard7').classList.remove('activeCard');
        document.getElementById('bgCard8').classList.remove('activeCard');
        document.getElementById('bgCard9').classList.remove('activeCard');
        document.getElementById('bgCard10').classList.remove('activeCard');
        document.getElementById('bgCard11').classList.remove('activeCard');
        document.getElementById(elementID).classList.add('activeCard');
    };


    const clearAllFilter = () => {
        document.getElementById('bgCard6').classList.remove('activeCard');
        document.getElementById('bgCard7').classList.remove('activeCard');
        document.getElementById('bgCard8').classList.remove('activeCard');
        document.getElementById('bgCard9').classList.remove('activeCard');
        document.getElementById('bgCard10').classList.remove('activeCard');
        document.getElementById('bgCard11').classList.remove('activeCard');
    };

    return (
        <div className="wrapper">
            <Nav title="Payable" active="Payable" span="/" />
            <div className="dashboard">
                <Row>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Weekly Overview</h3>
                            <div className="widget-body"><MonthlyMultiColumnGraph /> </div>
                        </div>
                    </Col>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Account Payable Overview</h3>
                            <div className="widget-body">
                                <div className="cardFlex CardPayableReceivable">
                                    <PayableReceivableCard id="bgCard6" onClick={() => bgCard('bgCard6')} cardTitle="Past Due" cardValue="9" cardAmount="0.00" />
                                    <PayableReceivableCard id="bgCard7" onClick={() => bgCard('bgCard7')} cardTitle="7 days" cardValue="4" cardAmount="0.00" />
                                    <PayableReceivableCard id="bgCard8" onClick={() => bgCard('bgCard8')} cardTitle="10 Days" cardValue="0" cardAmount="0.00" />
                                    <PayableReceivableCard id="bgCard9" onClick={() => bgCard('bgCard9')} cardTitle="20 Days" cardValue="1" cardAmount="0.00" />
                                    <PayableReceivableCard id="bgCard10" onClick={() => bgCard('bgCard10')} cardTitle="30 Days" cardValue="2" cardAmount="0.00" />
                                    <PayableReceivableCard id="bgCard11" onClick={() => bgCard('bgCard11')} cardTitle="40 Days" cardValue="2" cardAmount="0.00" />
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
