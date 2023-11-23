import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../components/Card';
import MonthlyMultiColumnGraph from '../components/charts/MonthlyMultiColumnGraph';
import Nav from '../components/Nav';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import ProjectGrid from '../components/grid/ProjectGrid';
import ClearFilterNewProject from '../components/ClearFilterNewProject';
import ProjectGridModal from '../components/modals/ProjectGridModal';


export default function Vendors() {

    const bgCard = elementID => {
        document.getElementById('bgCard18').classList.remove('activeCard');
        document.getElementById('bgCard19').classList.remove('activeCard');
        document.getElementById('bgCard20').classList.remove('activeCard');
        document.getElementById('bgCard21').classList.remove('activeCard');
        document.getElementById(elementID).classList.add('activeCard');
    };


    const clearAllFilter = () => {
        document.getElementById('bgCard18').classList.remove('activeCard');
        document.getElementById('bgCard19').classList.remove('activeCard');
        document.getElementById('bgCard20').classList.remove('activeCard');
        document.getElementById('bgCard21').classList.remove('activeCard');
    };

    return (
        <div className="wrapper">
            <Nav title="Vendors" active="Vendors" span="/" />
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
                                    <Card id="bgCard18" onClick={() => bgCard('bgCard18')} icon={<GroupRoundedIcon />} cardTitle="New" cardValue="9" />
                                    <Card id="bgCard19" onClick={() => bgCard('bgCard19')} icon={<PeopleOutlineRoundedIcon />} cardTitle="Active" cardValue="4" />
                                    <Card id="bgCard20" onClick={() => bgCard('bgCard20')} icon={<HourglassEmptyRoundedIcon />} cardTitle="Punch" cardValue="0" />
                                    <Card id="bgCard21" onClick={() => bgCard('bgCard21')} icon={<RecentActorsRoundedIcon />} cardTitle="closed" cardValue="1" />
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
