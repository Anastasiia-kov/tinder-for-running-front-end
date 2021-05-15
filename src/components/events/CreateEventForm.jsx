import React, { useState } from 'react'
import '../../css/CreateEventForm.css'
import { createEvent } from '../../lib/event'
import { useAuth } from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

function CreateEventForm() {
    const auth = useAuth()
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState('')
    const [location, setLocation] = useState('')
    const [speed, setSpeed] = useState('')
    const history = useHistory();

    const formSubmit = async (event) => {
        event.preventDefault()
        const notify = {
                running: {
                    distance: [distance],
                    speed: speed,
                    location: location,
                    Date: time
                },
                title: title
        }
        console.log(auth.token)
        const response = await createEvent(notify, auth.token)
        let path = '/events'
        history.push(path)
        console.log(response.data.notify)
    }
    return (
        <div className="main-container2">
            <div className="title">Create new Event</div>
            <form onSubmit={formSubmit}>
                <label className="eventlabel">Title</label><br></br>
                <input type="text" onChange={e => setTitle(e.target.value)} required></input><br></br>
                <label className="eventlabel">Time</label><br></br>
                <input type="time" onChange={e => setTime(e.target.value)} required></input><br></br>
                <label className="eventlabel">Distance</label><br></br>
                <input type="number" onChange={e => setDistance(e.target.value)} required></input><br></br>
                <label className="eventlabel">Speed</label><br></br>
                <input type="text" onChange={e => setSpeed(e.target.value)} required></input><br></br>
                <label className="eventlabel">Location</label><br></br>
                <input type="text" onChange={e => setLocation(e.target.value)} required></input><br></br>
                <button type="submit" className="button2 m-20">Create</button>
            </form>
        </div>
    )
}

export default CreateEventForm