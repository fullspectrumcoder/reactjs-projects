import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ProjectGrid from '../components/grid/ProjectGrid';
import ProjectGridModal from './modals/ProjectGridModal';

export default function AlertTabs() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="tab-block">
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Triggered Alert</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Managed Alert</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <ProjectGrid />
                </TabPane>
                <TabPane tabId="2">
                    <ProjectGridModal />
                    <ProjectGrid />
                </TabPane>
            </TabContent>
        </div>
    )
}
