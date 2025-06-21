import React, { useState, useRef, useEffect } from 'react';
import logo from "../assets/Logo.png";
import Wrapper from './style';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu and navigate
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <nav className='Navbar'>
        <div className='Left'>
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* Hamburger Button */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          ref={buttonRef}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Items */}
        <ul className={`Right ${isOpen ? 'active' : ''}`} ref={menuRef}>
          <li onClick={() => handleNavigate('/')}>Home</li>
          <li onClick={() => handleNavigate('/about-us')}>About Us</li>
          <li onClick={() => handleNavigate('/gallery')}>Gallery</li>
          <li onClick={() => handleNavigate('/our-services')}>Our Services</li>
          <li onClick={() => handleNavigate('/blogs')}>Blogs</li>
          <li onClick={() => handleNavigate('/contact')}>Contact Us</li>
        </ul>
      </nav>
    </Wrapper>
  );
}
