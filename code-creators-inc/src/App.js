import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {   
  return (
      <div className="App">
          
          <Header />
          <Home />
          <Footer />
      </div> 
  );
}



export default App;
