import React  from 'react';
import Banner from '../container/Banner';
import Counter from '../container/Counter';
import BuildApp from '../container/BuildApp';
import AppManage from '../container/AppManage';
import EasyProcess from '../container/EasyProcess';
import AppPlatform from '../container/AppPlatform';
import AppPlatformbox from '../container/AppPlatformbox';
import AppScreens from '../container/AppScreens';
import WorkProcess from '../container/WorkProcess';
import Pricing from '../container/Pricing';
import Testmonails from '../container/Testimonails';
import Queries from '../container/Queries';
import TeamMembers from '../container/TeamMembers';
import LatestNews from '../container/LatestNews';
import Contact from '../container/Contact';

export default function Home() {
    return (
        <div className="InnerContent">
            <Banner />
            <Counter />
            <BuildApp />
            <AppManage />
            <EasyProcess />
            <AppPlatform />
            <AppPlatformbox />
            <AppScreens />
            <WorkProcess />
            <Pricing />     
            <Testmonails />   
            <Queries />  
            <TeamMembers /> 
            <LatestNews />
            <Contact />
        </div>
    )
}
