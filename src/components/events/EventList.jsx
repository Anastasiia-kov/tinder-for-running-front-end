import React from 'react'
import EventItem from './EventItem'

function EventList (props) {
    return(
            <div>
                {props.events.map((event) => {
                    return <EventItem
                        key={event._id}
                        event={event}
                    ></EventItem>
                })}
            </div>
    )
}

export default EventList