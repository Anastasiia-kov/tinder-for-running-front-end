import React from 'react'
import { Button, Container,Row,Col } from "react-bootstrap"
import { useState } from "react";
import MySignUpModal from "../components/ModalSignUp"
import MyLogInModal from "../components/ModalLogIn"
import EventList from '../components/EventList'
import {mokEvents} from '../components/EventsPage'
import '../css/HomePage.css'

export default function Homepage() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowLogIn, setModalShowLogIn] = useState(false);
    
   
   
  
        return (
            <div className="main-container">
                <h1>Welcome to Tinder Sport Page</h1>
                <button className="log-sign-btn" onClick={() => setModalShowLogIn(true)}>Log In</button>{' '}
                <button  className="log-sign-btn" onClick={() => setModalShow(true)}>Sign Up</button>
                <MySignUpModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <MyLogInModal
                    show={modalShowLogIn}
                    onHide={() => setModalShowLogIn(false)}
                />
                <EventList events={mokEvents}></EventList>
            </div>
        )
    

}

