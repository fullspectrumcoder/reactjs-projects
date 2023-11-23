import React from 'react';
import Logo from '../../assets/imgs/logo.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import PaymentIcon from '@material-ui/icons/Payment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WarningIcon from '@material-ui/icons/Warning';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <div className="logo">
                    <a href="/"><img src={Logo} alt="" /><span>APEX</span></a>

                </div>
            </div>
            <Scrollbars style={{ width: "100%", height: "calc(100% - 100px)" }}>
                <div className="navContainer">
                    <ul>
                        <li>
                            <NavLink to="/" exact className="navItem" ><DashboardIcon /> <span>Dashboard</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className="navItem" ><FolderSpecialIcon /> <span>Projects</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/payable" className="navItem" ><PaymentIcon /> <span>Payable</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/receivable" className="navItem" ><MonetizationOnIcon /> <span>Receivable</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/alert" className="navItem" ><WarningIcon /> <span>Alert</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendors" className="navItem" ><ContactsIcon /> <span>Vendors</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/clients" className="navItem" ><AccountBoxIcon /> <span>Clients</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/reports" className="navItem" ><AssessmentIcon /> <span>Reports</span></NavLink>
                        </li>
                        <li className="navContainerHD">Administration</li>
                        <li>
                            <NavLink to="/user-management" className="navItem" ><GroupOutlinedIcon /> <span>User Management</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/markets" className="navItem" ><TrendingUpOutlinedIcon /> <span>Markets</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/project-type" className="navItem" ><PaymentIcon /> <span>Project Type</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendor-skills" className="navItem" ><LibraryAddCheckIcon /> <span>Vendor Skills</span></NavLink>
                        </li>
                    </ul>
                </div>
            </Scrollbars>
        </div>
    )
}
