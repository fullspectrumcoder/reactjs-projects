import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../components/Card';
import MonthlyMultiColumnGraph from '../components/charts/MonthlyMultiColumnGraph';
import Nav from '../components/Nav';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import ProjectGrid from '../components/grid/ProjectGrid';
import ClearFilterNewProject from '../components/ClearFilterNewProject';
import ProjectGridModal from '../components/modals/ProjectGridModal';


export default function Projects() {

    const bgCard = elementID => {
        document.getElementById('bgCard1').classList.remove('activeCard');
        document.getElementById('bgCard2').classList.remove('activeCard');
        document.getElementById('bgCard3').classList.remove('activeCard');
        document.getElementById('bgCard4').classList.remove('activeCard');
        document.getElementById('bgCard5').classList.remove('activeCard');
        document.getElementById(elementID).classList.add('activeCard');
    };


    const clearAllFilter = () => {
        document.getElementById('bgCard1').classList.remove('activeCard');
        document.getElementById('bgCard2').classList.remove('activeCard');
        document.getElementById('bgCard3').classList.remove('activeCard');
        document.getElementById('bgCard4').classList.remove('activeCard');
        document.getElementById('bgCard5').classList.remove('activeCard');
    };

    return (
        <div className="wrapper">
            <Nav title="Projects" active="Projects" span="/" />
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
                            <h3 className="widget-header">Project Overview</h3>
                            <div className="widget-body">
                                <div className="cardFlex">
                                    <Card id="bgCard1" onClick={() => bgCard('bgCard1')} icon={<HomeWorkRoundedIcon />} cardTitle="New" cardValue="9" />
                                    <Card id="bgCard2" onClick={() => bgCard('bgCard2')} icon={<AssignmentLateRoundedIcon />} cardTitle="Active" cardValue="4" />
                                    <Card id="bgCard3" onClick={() => bgCard('bgCard3')} icon={<AssignmentRoundedIcon />} cardTitle="Punch" cardValue="0" />
                                    <Card id="bgCard4" onClick={() => bgCard('bgCard4')} icon={<AssignmentTurnedInRoundedIcon />} cardTitle="closed" cardValue="1" />
                                    <Card id="bgCard5" onClick={() => bgCard('bgCard5')} icon={<MonetizationOnRoundedIcon />} cardTitle="Invoiced" cardValue="2" />
                                </div>
                                <div className="cardFlex flex-btns">
                                    <ClearFilterNewProject clearAllFilter={clearAllFilter} />
                                    <ProjectGridModal />
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
