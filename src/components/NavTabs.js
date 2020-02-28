import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div className="nav-wrapper">
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home  
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact 
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/test"
          className={window.location.pathname === "/test" ? "nav-link active" : "nav-link"}
        >
          Test
        </Link>
      </li> */}
    </ul>
    </div>
  );
}

export default NavTabs;
