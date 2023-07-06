import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import buffPrepLogo from "./PrepAi Logo.png";

const NavBar = () => {
  return (
    <navbar className='Navbar--container'>
      <img className="Navbar--logo" alt="" src={buffPrepLogo}/>
      <div className='Navbar-linksContainer Navbar-links-right'>
        <ul className="Navbar--links">
              <li><a href="https://buffaloprep.com/about/">About Us</a></li>
              <li><a><Link to="/Learning">Learning</Link></a></li>
              {/* <li><a href="" target="_blank" rel="noreferrer">Learning</a></li> */}
              <li><a href="https://buffaloprep.com/admissions/" target="_blank" rel="noreferrer">Admissions</a></li>
        </ul>
      </div>
    </navbar>
  );
};

export default NavBar;

