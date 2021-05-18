import React from 'react'
import '../../css/EventItem.css'
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {creatChat} from '../../lib/chat'

function EventItem (props) {
    const auth = useAuth()
    const accepterId = props.event.userId
    const history = useHistory();

    const creatChatwithUser = async () => {
        //create chat with user who created a notify
        const response = await creatChat(auth.token, accepterId)
        console.log(response.data._id)
        let path = `/chat/${response.data._id}`
        history.push(path)
    }
    return (
        <div className="event-item-container">
    <div className="event-title">{props.event.title}</div>
    <div className="d-flex">
    <div className="t-d">{props.event.running.date}</div>
    <div className="t-d">{props.event.running.distance} km</div>
    </div>
    <div>{props.event.running.location}</div>
    {/* <Link to="/chat"> */}
    <button className="contact-btn" onClick={creatChatwithUser}>Contact user</button>
    {/* </Link> */}
    
    </div>
    )
}

export default EventItem