import React, { useState } from 'react';
import './navBar.css';
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
import { RiSlideshow2Fill } from "react-icons/ri";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <>
      <img 
        src="/path-to-your-image.png" 
        alt="Static Logo" 
        className="static-image" 
      />
      <nav>
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          onClick={() => setActiveNav('home')} 
          className={activeNav === 'home' ? 'active' : ''}>
          <IoHome />
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          onClick={() => setActiveNav('about')} 
          className={activeNav === 'about' ? 'active' : ''}>
          <FaUserAlt />
        </Link>
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          onClick={() => setActiveNav('skills')} 
          className={activeNav === 'skills' ? 'active' : ''}>
          <HiMiniCheckBadge />
        </Link>
        <Link 
          to="portfolio" 
          smooth={true} 
          duration={500} 
          onClick={() => setActiveNav('portfolio')} 
          className={activeNav === 'portfolio' ? 'active' : ''}>
          <RiSlideshow2Fill />
        </Link>
        <Link 
          to="gallery" 
          smooth={true} 
          duration={500} 
          onClick={() => setActiveNav('gallery')} 
          className={activeNav === 'gallery' ? 'active' : ''}>
          <IoMdTrophy />
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          onClick={() => setActiveNav('contact')} 
          className={activeNav === 'contact' ? 'active' : ''}>
          <IoMail />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
