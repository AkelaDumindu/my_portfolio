import React, { useState } from 'react';
import './navBar.css';
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { IoMdTrophy } from "react-icons/io";
import { RiSlideshow2Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleMenuClick = (section) => {
    setActiveNav(section);
    setSidebarActive(false);  // Close the sidebar when a menu item is clicked
  };

  return (
    <>
      {/* Static Logo */}
      <img 
        src="../images/fav/my-logo-v.png" 
        alt="Static Logo" 
        className="static-image" 
      />

      {/* Sidebar Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className={`menu-toggle-btn ${sidebarActive ? 'hidden' : ''}`}
      >
        <FiMenu />
      </button>

      {/* Sidebar Menu */}
      <div className={`responsive-sidebar-menu ${sidebarActive ? 'active' : ''}`}>
        <div className="overlay" onClick={toggleSidebar}></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a className="scroll-to" href="#home" onClick={() => handleMenuClick('home')}>
                  <IoHome /> <span>Home</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#about" onClick={() => handleMenuClick('about')}>
                  <FaUserAlt /> <span>About</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#resume" onClick={() => handleMenuClick('resume')}>
                  <HiMiniCheckBadge /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#services" onClick={() => handleMenuClick('services')}>
                  <RiSlideshow2Fill /> <span>Services</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#skills" onClick={() => handleMenuClick('skills')}>
                  <HiMiniCheckBadge /> <span>Skills</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#portfolio" onClick={() => handleMenuClick('portfolio')}>
                  <RiSlideshow2Fill /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#contact" onClick={() => handleMenuClick('contact')}>
                  <IoMail /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Navbar Links */}
      <nav>
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          onClick={() => handleMenuClick('home')} 
          className={activeNav === 'home' ? 'active' : ''}>
          <IoHome />
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          onClick={() => handleMenuClick('about')} 
          className={activeNav === 'about' ? 'active' : ''}>
          <FaUserAlt />
        </Link>
        <Link 
          to="skills" 
          smooth={true} 
          duration={500} 
          onClick={() => handleMenuClick('skills')} 
          className={activeNav === 'skills' ? 'active' : ''}>
          <HiMiniCheckBadge />
        </Link>
        <Link 
          to="portfolio" 
          smooth={true} 
          duration={500} 
          onClick={() => handleMenuClick('portfolio')} 
          className={activeNav === 'portfolio' ? 'active' : ''}>
          <RiSlideshow2Fill />
        </Link>
        <Link 
          to="gallery" 
          smooth={true} 
          duration={500} 
          onClick={() => handleMenuClick('gallery')} 
          className={activeNav === 'gallery' ? 'active' : ''}>
          <IoMdTrophy />
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          onClick={() => handleMenuClick('contact')} 
          className={activeNav === 'contact' ? 'active' : ''}>
          <IoMail />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
