import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#375ABB"}}>
    <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <h1>Pod Help Me<span className="member-name"></span></h1>
      <span><Link style={{color: "white"}} to="/login">Logout</Link></span>
    </div>
  </nav>
  );
}

export default Nav;
