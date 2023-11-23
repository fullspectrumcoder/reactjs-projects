import React from 'react';
import Header from './components/Header';
import Home from './home/Home';

function App() {
  return (
    <>
    <div className="content-lines-wrapper">
        <div className="content-lines-inner">
            <div className="content-lines"></div>
        </div>
    </div>
    <Header />
    <Home />
    </>
  );
}

export default App;
