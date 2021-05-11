import React from 'react';
import '../css/NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div className="navbar">
      <div 
      // className="dropdown"
      >
        {/* <button className="dropbtn">Menu
            <i className="fa fa-caret-down"></i>
        </button> */}
        <div 
        // className="dropdown-content"
        >
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar