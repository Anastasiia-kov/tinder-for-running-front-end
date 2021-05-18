import React, { useEffect } from 'react'
import { Button, Container,Row,Col } from "react-bootstrap"
import { useState } from "react";
import MySignUpModal from "../components/ModalSignUp"
import MyLogInModal from "../components/ModalLogIn"
import EventList from '../components/events/EventList'
import '../css/HomePage.css'
import { getAllEventsFromDB } from '../lib/event';

export default function Homepage() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowLogIn, setModalShowLogIn] = useState(false);
    const [events, setEvents] = useState([])

    const getAllEvents = async () => {
        const response = await getAllEventsFromDB()
        setEvents(response.data)
    }

    // useEffect(() => {
    //     getAllEvents()
    // }, [])
    
        return (
            <div className="main-container">
                <h1 className="title t-homepage">Welcome to Tinder Sport Page</h1>
                <div className="d-flex">
                <button className="log-sign-btn" onClick={() => setModalShowLogIn(true)}>Log In</button>{' '}
                <button  className="log-sign-btn" onClick={() => setModalShow(true)}>Sign Up</button>
                </div>
                <MySignUpModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <MyLogInModal
                    show={modalShowLogIn}
                    onHide={() => setModalShowLogIn(false)}
                />
                {/* <EventList events={events}></EventList> */}
            </div>
        )
    

}

