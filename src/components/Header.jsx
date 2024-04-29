import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => { 
  return (
    <div className="header-container">
      <div className='logo'>
        <h1 className="text-xl text-white font-semibold">Prafull Srivastava</h1>
      </div>
      <div className="nav-links space-x-4 md:space-x-8">
        <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/About" className="nav-link" activeClassName="active-link">About</NavLink>
        <NavLink to="/Skills" className="nav-link" activeClassName="active-link">Skills</NavLink>
        <NavLink to="/Portfolio" className="nav-link" activeClassName="active-link">Portfolio</NavLink>
        <NavLink to="/Contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
      </div>
      <div className="hire-button">
        <button className="button">Hire</button>
      </div>
    </div>
  );
};

export default Header;
