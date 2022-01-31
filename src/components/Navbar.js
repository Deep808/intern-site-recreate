import React, { useState } from 'react';
import './Navbar.css';
import { MenuAlt2Icon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav_container">
      <div className="logo_wrapper">
        <img src="images/logo.png" alt="" />
      </div>
      <MenuAlt2Icon onClick={toggleNav} className="menu_icon" />
      <div className={toggle ? 'nav_open' : 'nav_items'}>
        <div>
          <XIcon onClick={toggleNav} className="close_icon" />
        </div>
        <p>Home</p>
        <p>Who We Are</p>
        <p>What We Do</p>
        <p>Case Studies</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
