import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => (
  <ul className="menu-items">
    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
      <NavLink to="/" className="active-links">Home</NavLink>
    </li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
      <NavLink to="/about">About</NavLink>
    </li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
      <NavLink to="/menu">Menu</NavLink>
    </li>
    <li onClick={() => props.isMobile && props.closeMobileMenu()}>
      <NavLink to="/reservations" className="active-links">Reservations</NavLink>
    </li>
  </ul>
);

export default NavLinks;
