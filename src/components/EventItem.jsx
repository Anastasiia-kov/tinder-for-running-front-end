import React from 'react'
import '../css/EventItem.css'

function EventItem (props) {
    return (
        <div className="event-item-container">
    <div className="event-title">{props.event.title}</div>
    <div className="d-flex">
    <div className="t-d">{props.event.time}</div>
    <div className="t-d">{props.event.distance}</div>
    </div>
    <div>{props.event.location}</div>
    <button className="contact-btn">Contact user</button>
    </div>
    )
}

export default EventItem