import React, { useState, useEffect } from 'react';
import logo from '../assets/Images/Siliconlogo.svg'; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <header>
      <div className="container">
        <a id="logo" href="index.html">
          <img src={logo} alt="Silicon Logo" />
        </a>

        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">Features</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input 
              id="darkmode-switch" 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>

        <button className="btn-mobile">
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;

