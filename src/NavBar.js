import React from 'react';
// import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './NavBar.css';
import buffPrepLogo from "./PrepAi Logo.png";

const NavBar = () => {
  return (
    <navbar className='Navbar--container'>
      <img className="Navbar--logo" alt="" src={buffPrepLogo}/>
      {/* <div className='Navbar-linksContainer Navbar-links-right'>
        <ul className="Navbar--links">
              <li><a href="https://buffaloprep.com/about/">AI Tools</a></li>
              <li><a><Link to="/Learning">Learning</Link></a></li>
              <li><a href="https://buffaloprep.com/admissions/">Admissions</a></li>
        </ul>
      </div> */}
    </navbar>
  );
};

export default NavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';
// import buffPrepLogo from "./PrepAi Logo.png";

// const NavBar = () => {
//   return (
//     <div className='Navbar--container'>
//       <nav className='Navbar--top'>
//         <img className="Navbar--logo" alt="" src={buffPrepLogo}/>
//       </nav>
//       <nav className='Navbar--left'>
//         <ul className="Navbar--links">
//           <li><Link to="/learning">Learning</Link></li>
//           <li><a href="https://buffaloprep.com/about/">AI Tools</a></li>
//           <li><a href="https://buffaloprep.com/admissions/">Admissions</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;


