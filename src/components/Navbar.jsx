import React from 'react';

import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap"

const Navbar = () => {
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                HOME PAGE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                exact
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                PROFILE 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/facilities"
                exact
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                FACILITIES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/notification"
                exact
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                NOTIFICATIONS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/chat"
                exact
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
              CHAT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin"
                exact
                className="nav-link"
                aria-current="page"
                activeClassName="active"
              >
                ADMIN
              </NavLink>
            </li>
           



          </ul>
        </div>
        <Button className="" variant="primary" size="md" >Log Out</Button>

      </div>
    </nav>
  )
}

export default Navbar