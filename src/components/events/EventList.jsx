import React from 'react'
import EventItem from './EventItem'

function EventList (props) {
    return(
            <div>
                {props.events.map((event) => {
                    return <EventItem
                        key={event._id}
                        event={event}
                        container="event-item-container-page"
                        eventTitle="event-title-page"
                        contactBtn="contact-btn"
                        userPhoto="user-photo"
                        infoCont="info-container"
                        swipe="swipe"
                        icon="icon-swipe"
                        icon2="icon-swipe-2"
                    ></EventItem>
                })}
            </div>
    )
}

export default EventList