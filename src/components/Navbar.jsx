import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link ' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  // Conditionally add the Contact link
  // if (windowWidth <= 768) {
  //   navItems.push({ label: 'Contact', link: '#contact', className: 'nav-link' });
  // }

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    lastActiveLink.current = document.querySelector('.nav-link.active');
    initActiveBox();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); 
      initActiveBox();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeCurrentLink = (index) => {
    lastActiveLink.current?.classList.remove('active');
    const newActiveLink = document.querySelector(`.nav-link:nth-child(${index + 1})`);
    newActiveLink.classList.add('active');
    lastActiveLink.current = newActiveLink;
    setActiveIndex(index);
    initActiveBox();
  };

  return (
    <nav className={`navbar${navOpen ? ' active' : ''}`}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          className={`nav-link${index === activeIndex ? ' active' : ''} ${className}`}
          onClick={() => activeCurrentLink(index)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
