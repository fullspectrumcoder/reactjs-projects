import React from 'react';
import Nav from '../components/Nav';
import { Row, Col } from 'reactstrap';
import Kpis from '../components/Kpis';
import SalesPerMonth from '../components/charts/SalesPerMonth';
import SalesByStateMap from '../components/charts/SalesByStateMap';
import SalesByStateDrillDown from '../components/charts/SalesByStateDrillDown';
import ProfitRevenue from '../components/charts/ProfitRevenue';
import RevenuePerClient from '../components/charts/RevenuePerClient';
import ProjectGrid from '../components/grid/ProjectGrid';


export default function Home() {
    return (
        <div className="wrapper">
            <Nav title="Dashboard" />
            <div className="dashboard">
                <Row>
                    <Col xl={3} lg={6} md={6} className="kpi1">
                        <Kpis value1="4" value2="2" title="Work In Progress" />
                    </Col>
                    <Col xl={3} lg={6} md={6} className="kpi2">
                        <Kpis value1="0" value2="0" title="Pipeline" />
                    </Col>
                    <Col xl={3} lg={6} md={6} className="kpi3">
                        <Kpis value1="4" value2="2" title="Total Projects" />
                    </Col>
                    <Col xl={3} lg={6} md={6} className="kpi4">
                        <Kpis value1="0" value2="-1023664" title="Revenue" />
                    </Col>
                    <Col lg={12} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Sales Per Month</h3>
                            <div className="widget-body"><SalesPerMonth /> </div>
                        </div>
                    </Col>
                    <Col lg={6} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Profit and Revenue</h3>
                            <div className="widget-body"><ProfitRevenue /> </div>
                        </div>
                    </Col>
                    <Col lg={6} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Revenue Per Client</h3>
                            <div className="widget-body"><RevenuePerClient /> </div>
                        </div>
                    </Col>
                    <Col lg={6} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Sales by State - Map</h3>
                            <div className="widget-body"><SalesByStateMap /> </div>
                        </div>
                    </Col>
                    <Col lg={6} className="mb-30">
                        <div className="widgets">
                            <h3 className="widget-header">Sales by State - Drill Down</h3>
                            <div className="widget-body"><SalesByStateDrillDown /> </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="widgets">
                            <h3 className="widget-header">Projects</h3>
                            <div className="widget-body"><ProjectGrid /> </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
