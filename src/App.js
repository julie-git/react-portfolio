import React from 'react';
import logo from './logo.svg';
import './App.css';




import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import About from "./omponents/pages/About";
import Home from "./components/pages/Home";
import About from "./components/pages/About";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/search" component={Contact} /> */}
      </div>
    </Router>
  )
}

export default App;


