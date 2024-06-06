import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = ({ onToggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') || 'disabled');

  useEffect(() => {
    if (darkMode === 'enabled') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (darkMode === 'disabled') {
      setDarkMode('enabled');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      setDarkMode('disabled');
      localStorage.setItem('dark-mode', 'disabled');
    }
  };

  return (
    <header className="header">
      <section className="flex">
        <Link to="/home" className="logo">IR Institute</Link>
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars" onClick={onToggleSidebar}></div>
          <Link to="/profile"><div id="user-btn" className="fas fa-user"></div></Link>
          <div id="toggle-btn" className={`fas ${darkMode === 'enabled' ? 'fa-moon' : 'fa-sun'}`} onClick={toggleDarkMode}></div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
