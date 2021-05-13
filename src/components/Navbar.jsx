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
      className="dropdown"
      >
        <button className="dropbtn">
        <img  className="icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjcsNjFIMTY1Yy0yNC44MiwwLTQ1LDIwLjE5LTQ1LDQ1YzAsMjQuODIsMjAuMTgsNDUsNDUsNDVoMzAyYzI0LjgxLDAsNDUtMjAuMTgsNDUtNDVDNTEyLDgxLjE5LDQ5MS44MSw2MSw0NjcsNjF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjcsMjExSDE2NWMtMjQuODIsMC00NSwyMC4xOS00NSw0NWMwLDI0LjgyLDIwLjE4LDQ1LDQ1LDQ1aDMwMmMyNC44MSwwLDQ1LTIwLjE4LDQ1LTQ1QzUxMiwyMzEuMTksNDkxLjgxLDIxMSw0NjcsMjExeg0KCQkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjcsMzYxSDE2NWMtMjQuODIsMC00NSwyMC4xOS00NSw0NWMwLDI0LjgyLDIwLjE4LDQ1LDQ1LDQ1aDMwMmMyNC44MSwwLDQ1LTIwLjE4LDQ1LTQ1QzUxMiwzODEuMTksNDkxLjgxLDM2MSw0NjcsMzYxeg0KCQkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NSw2MUMyMC4xOCw2MSwwLDgxLjE5LDAsMTA2YzAsMjQuODIsMjAuMTgsNDUsNDUsNDVjMjQuODEsMCw0NS0yMC4xOCw0NS00NUM5MCw4MS4xOSw2OS44MSw2MSw0NSw2MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ1LDIxMWMtMjQuODIsMC00NSwyMC4xOS00NSw0NWMwLDI0LjgyLDIwLjE4LDQ1LDQ1LDQ1YzI0LjgxLDAsNDUtMjAuMTgsNDUtNDVDOTAsMjMxLjE5LDY5LjgxLDIxMSw0NSwyMTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NSwzNjFjLTI0LjgyLDAtNDUsMjAuMTktNDUsNDVjMCwyNC44MiwyMC4xOCw0NSw0NSw0NWMyNC44MSwwLDQ1LTIwLjE4LDQ1LTQ1QzkwLDM4MS4xOSw2OS44MSwzNjEsNDUsMzYxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
        </button>
        <div 
        className="dropdown-content"
        >
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/chats">Chats</Link>
          <Link to="/profile">Profile</Link>
           </div>
        {auth.token && <Button className="" variant="primary" size="md" type="submit" onClick={handleSignOut}>Log Out</Button>}

      </div>
        </div>
  )
}

export default Navbar