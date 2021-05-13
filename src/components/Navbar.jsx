import React from 'react';
import '../css/NavBar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button } from "react-bootstrap"

const Navbar = () => {
  const auth = useAuth()
  async function handleSignOut() {
    await auth.removeToken()
  }

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
        {auth.token && <Button className="" variant="primary" size="md" type="submit" onClick={handleSignOut}>Log Out</Button>}

      </div>
        </div>
  )
}

export default Navbar