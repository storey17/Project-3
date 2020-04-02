import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <div className="navbar-header">
      </div>
      <h1>Welcome to Pod Help Me<span className="member-name"></span></h1>
      <span style={{color: "white"}}><Link to="/login">Logout</Link></span>
    </div>
  </nav>
  );
}

export default Nav;
