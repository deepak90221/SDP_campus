import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <span className="logo-icon">C</span>
          Campus Placement Management
        </div>
        <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/companies" className="navbar-link">Companies</a>
          </li>
          <li className="navbar-item">
            <a href="Ship" className="navbar-link">Internships</a>
          </li>
          <li className="navbar-item">
            <a href="StudentPortal" className="navbar-link">Placements</a>
          </li>
          
          <li className="navbar-item">
            <a href="Status" className="navbar-link">Jobs Status</a>
          </li>
          <li className="navbar-item navbar-profile">
            <div className="profile-icon" onClick={toggleProfileDropdown}>
              <span>Profile</span>
              {isProfileOpen && (
                <div className="dropdown-content">
                  <a href="Login">Student Login</a>
                  <a href="Admin">Admin Login</a>
                  <a href="/register">Register</a>
                  <a href="/logout">Logout</a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
