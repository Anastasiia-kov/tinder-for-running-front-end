import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import PrivateRoute from "./pages/PrivateRoute";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";

function App() {
    return ( 
    <div className="App" >
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path ="/">
        <Homepage />
       </Route> 
        <Route exact path ="/profile">
            <div>Profile page</div>
        </Route> 
        <PrivateRoute exact path ="/notification">
            <div>Notification</div>
        </PrivateRoute> 
        <PrivateRoute exact path ="/chat">
            <div>General Chat</div>
        </PrivateRoute> 
        <PrivateRoute exact path ="/facilities">
            <div>FACILITIES page</div>
        </PrivateRoute> 
        <PrivateRoute exact path ="/admin">
            <div>Admin page</div>
        </PrivateRoute> 

        </Switch>
        </Router>

    </div>

    );
}

export default App;