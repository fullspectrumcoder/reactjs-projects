import React from 'react';
import Header from './components/Header';
import Home from './Home/Home';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="App">        
        <Header />        
        <Home />        
        <Footer />
        <Copyright />
        <Scroll />
    </div>
  );
}

export default App;
