import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";


const Sidebar = ({ sidebarActive, closeSidebar }) => {
  return (
    <div className={`side-bar${sidebarActive ? ' active' : ''}`}>
      <div id="close-btn" onClick={closeSidebar}>
        <i className="fas fa-times"></i>
      </div>
      <div className="profile">
        <img src="images/mm.png" className="image" alt="" />
        <h3 className="name">Abdulmuhaymin Olalekan</h3>
        <p className="role">student</p>
        <Link to="/profile" className="btn">view profile</Link>
      </div>
      <nav className="navbar">
        <Link to="/home"><i className="fas fa-home"></i><span>home</span></Link>
        <Link to="/about"><i className="fas fa-question"></i><span>about</span></Link>
        <Link to="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></Link>
        <Link to="/teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></Link>
        <Link to="/contact"><i className="fas fa-headset"></i><span>contact us</span></Link>
      </nav>
    </div>
  );
};

export default Sidebar;
