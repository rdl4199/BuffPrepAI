import React from 'react';
import './NavBar.css';
import buffPrepLogo from "./PrepAi Logo.png";

const NavBar = () => {
  return (
    <navbar className='Navbar--container'>
      <img className="Navbar--logo" alt="" src={buffPrepLogo}/>
      <div className='Navbar-linksContainer Navbar-links-right'>
        <ul className="Navbar--links">
              <li><a href="www.google.com">About Us</a></li>
              <li><a href="www.google.com" target="_blank" rel="noreferrer">Programs</a></li>
              <li><a href="www.google.com" target="_blank" rel="noreferrer">Admissions</a></li>
        </ul>
      </div>
    </navbar>
  );
};

export default NavBar;

