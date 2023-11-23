import React from 'react';
import Featured from '../container/Featured';
import ModernApp from '../container/ModernApp';
import DownloadApp from '../container/DownloadApp';
import About from '../container/About';
import Work from '../container/Work';
import AppPreface from '../container/AppPreface';
import Slider from '../container/Slider';
import Pricing from '../container/Pricing';
import Testimonails from '../container/Testimonails';
import LatestBlog from '../container/LatestBlog';
import Contact from '../container/Contact';

export default function Home() {
    return (
        <div className="Container">
            <Featured />
            <ModernApp />
            <DownloadApp />
            <About />
            <Work />            
            <Slider />
            <AppPreface />
            <Pricing />
            <Testimonails />
            <LatestBlog />
            <Contact />
        </div>        
    )
}
