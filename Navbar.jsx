// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          Korn Blog
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="navbar-link" activeClassName="active" exact>
          Inicio
        </NavLink>
        <NavLink to="/discography" className="navbar-link" activeClassName="active">
          Discografía
        </NavLink>
        <NavLink to="/gallery" className="navbar-link" activeClassName="active">
          Galería
        </NavLink>
        <NavLink to="/concerts" className="navbar-link" activeClassName="active">
          Conciertos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
