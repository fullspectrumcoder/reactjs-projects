import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Sidebar />
        </React.Fragment>
    )
}
