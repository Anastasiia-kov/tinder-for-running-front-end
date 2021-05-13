import React, {useState} from 'react'
import EventList from '../components/EventList'
import '../css/EventsPage.css'

export const mokEvents = [
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
    const [events, setEvents] = useState([])
    const [myEvents, setMyEvents] = useState(true)
    const [btnValue, setBtnValue] = useState('See all events')

    const onChangeEvents = () => {
        if (myEvents) {
            setBtnValue('See my events')
            setEvents(mokEvents)
            setMyEvents(false)
        }
        if(!myEvents) {
            setBtnValue('See all events')
            setEvents([])
            setMyEvents(true)
        }
    }
    return(
        <div className="container">
            <button className="toggle-btn" onClick={onChangeEvents}>{btnValue}</button>
            <EventList events={events}></EventList>
        </div>
    )
}

export default EventsPage