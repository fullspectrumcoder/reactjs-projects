import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Flag1 from '../../assets/svg/united-states.svg';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';


export default function Navbar() {
    const admin = 'Sean';

    function toogleMenu() {
        document.getElementById("page-container").classList.toggle("sideBarNav");
    }

    return (
        <div className="bg-navbar">
            <div className="custom-navbar">
                <div className="menu" onClick={toogleMenu}>
                    <MenuOutlinedIcon />
                </div>
                <div className="admin-panel">
                    <div className="search">
                        <a href="#" title="Quick Search"><SearchIcon /></a>
                    </div>
                    <div className="usernotification">
                        <a href="#" title="User Notification"><NotificationsIcon /></a>
                    </div>
                    <div className="quickaction">
                        <a href="#" title="Quick Action"><EqualizerIcon /></a>
                    </div>
                    <div className="usercart">
                        <a href="#" title="User Cart"><ShoppingCartIcon /></a>
                    </div>
                    <div className="selectlang">
                        <a href="#" title="Select Language">
                            <img src={Flag1} alt="" />
                        </a>
                    </div>
                    <div className="admin">
                        <a href="#">
                            Hi, <b>{admin}</b><span className="admin-title">S</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}