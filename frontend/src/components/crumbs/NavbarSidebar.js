import Navbar from './navbar'
import Sidebar from './sidebar'
import React, { useState, useEffect } from 'react';

const NavbarSidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSidebarActive(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar sidebarActive={sidebarActive} closeSidebar={closeSidebar} />
    </>
  );
}

export default NavbarSidebar;