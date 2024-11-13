import React, { useState } from 'react';
import './navBar.css';
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
import { RiSlideshow2Fill } from "react-icons/ri";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" 
      onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''}>
        <IoHome />
        </a>
      <a 
      href="#about" 
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}>
        <FaUserAlt />
        </a>
      <a href="#skills" 
      onClick={() => setActiveNav('#skills')} 
      className={activeNav === '#skills' ? 'active' : ''}>
        <HiMiniCheckBadge />
        </a>
      <a href="#portfolio" 
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiSlideshow2Fill />
        </a>
      <a href="#awards"
       onClick={() => setActiveNav('#awards')} 
       className={activeNav === '#awards' ? 'active' : ''}>
        <IoMdTrophy />
        </a>
      <a href="#contact" 
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}>
        <IoMail />
        </a>
    </nav>
  );
};

export default Navbar;
