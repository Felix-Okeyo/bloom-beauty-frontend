import React from 'react';

import { NavLink } from 'react-router-dom';
import './/NavBar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <h1>Bloom <span>Beauty</span></h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/callus">Call Us</NavLink>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
