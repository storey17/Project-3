import React from "react";
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1b1f3b" }}>
      <div className="container-fluid">
        <div className="navbar-header">
        </div>
        <span><Link style={{ color: "white" }} to="/login">Logout <FiLogOut /></Link></span>
      </div>
    </nav>
  );
}

export default Nav;
