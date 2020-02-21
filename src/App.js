import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Quiz from "./components/pages/Quiz";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Splash} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/search" component={Contact} />
      </div>
    </Router>
  )
}

export default App;


