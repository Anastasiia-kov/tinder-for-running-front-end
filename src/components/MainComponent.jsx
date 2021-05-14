import React from 'react'
import Navbar from "./Navbar";
import Event from "./events/Event";
import EventsPage from '../pages/EventsPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import ProfilePage from '../pages/ProfilePage';
import ChatsPage from './Chats/ChatsPage';
import Chat from './Chats/Chat'

function MainComponent() {
    return (
        <div className="App" >
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path ="/">
        <Event />
       </Route> 
       <Route exact path ="/events">
            <EventsPage />
        </Route> 
        <Route exact path ="/chats">
            <ChatsPage />
        </Route> 
        <Route exact path ="/chat">
            <Chat/>
        </Route> 
        <Route exact path ="/profile">
            <ProfilePage />
        </Route> 
        </Switch>
        </Router>

    </div>

    )
}

export default MainComponent