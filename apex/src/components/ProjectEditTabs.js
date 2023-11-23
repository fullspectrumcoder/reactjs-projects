import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import ProjectGrid from '../components/grid/ProjectGrid';
import ProjectGridModal from './modals/ProjectGridModal';

export default function ProjectEditTabs() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="tab-block">
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Transactions</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Project Details</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>Vendor Work Orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>Documents</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }}>Notes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { toggle('6'); }}>Alerts</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <ProjectGridModal />
                    <ProjectGrid />
                </TabPane>
                <TabPane tabId="2">
                    <ProjectGridModal />
                    <ProjectGrid />
                </TabPane>
                <TabPane tabId="3">
                    <ProjectGridModal />
                    <ProjectGrid />
                </TabPane>
                <TabPane tabId="4">
                    <ProjectGridModal />
                    <ProjectGrid />
                </TabPane>
                <TabPane tabId="5">
                    <ProjectGrid />
                </TabPane>
                <TabPane tabId="6">
                    <ProjectGridModal />
                    <ProjectGrid />
                </TabPane>
            </TabContent>
        </div>
    )
}
