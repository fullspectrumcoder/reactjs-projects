import React from 'react';
import Layout from './layout/Layout';
import Home from './home/Home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects.js';
import Payable from './pages/Payable.js';
import Receivable from './pages/Receivable.js';
import Alert from './pages/Alert.js';
import Vendors from './pages/Vendors.js';
import ProjectEdit from './pages/ProjectEdit.js';
import Footer from './layout/footer/Footer.js';

export default function App() {
  return (
    <div className="page-container" id="page-container">
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/payable" component={Payable} />
          <Route path="/receivable" component={Receivable} />
          <Route path="/alert" component={Alert} />
          <Route path="/vendors" component={Vendors} />
          <Route path="/project-edit" component={ProjectEdit} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
