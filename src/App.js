import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Index from './Components/Index/Index';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Index} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}
export default App;
