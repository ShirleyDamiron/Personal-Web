import React from "react";
import { NavLink } from "react-router-dom"

import './nav.css';


function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
            <li className="nav__list--item">
              <NavLink className="nav__list--item--link" to="/">Home</NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink className="nav__list--item--link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink className="nav__list--item--link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
    );
  }
  export default Nav;