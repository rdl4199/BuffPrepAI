import React from 'react';
import {Link} from "react-router-dom";
import "./LeftNavBar.css";

const LeftNavBar = () => {
  return (
    <leftnav>
      <div className='LeftNav-linksContainer'>
        <ul className="LeftNav--links">
              <li><a href="https://buffaloprep.com/about/"><i className='fas fa-user'></i>Profile</a></li>
              <li><a href="https://buffaloprep.com/admissions/"><i className='fas fa-search'></i>AI Search</a></li>
              <li><a href="https://buffaloprep.com/admissions/"><i className='fas fa-book'></i>AI Study</a></li>
              <li><a><Link to="/Learning"><i className='fas fa-tools'></i>AI Tools</Link></a></li>
              <li><a href="https://buffaloprep.com/admissions/"><i className='fas fa-graduation-cap'></i>Courses</a></li>
              <li><a href="https://buffaloprep.com/admissions/"><i className='fas fa-chart-bar'></i>Grades</a></li>
        </ul>
      </div>
    </leftnav>
  );
};

export default LeftNavBar;
