import React, {useState} from 'react'
import EventList from './EventList'
import '../css/EventsPage.css'

const mokEvents = [
    {
        id: 1,
        title: "Morning running",
        time: '8:00',
        distance: '12 km',
        location: 'Tel-Aviv Port'
    },
    {
        id: 2,
        title: "Evening running",
        time: '20:00',
        distance: '4 km',
        location: 'Yaffo Port'
    }
]

function EventsPage (){
    const [events, setEvents] = useState(mokEvents)
    return(
        <div className="container">
            <EventList events={events}></EventList>
        </div>
    )
}

export default EventsPage