import React, {useState} from 'react'
import '../css/CreateEventForm.css'

function CreateEventForm() {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState('')
    const [location, setLocation] = useState('')

    const formSubmit = (event) => {
        event.preventDefault()
        const notification = {
            title: title,
            time: time,
            distance: distance,
            location: location
        }
        console.log(notification)
    }
    return(
        <div className="main-container2">
            <div className="title">Create new Event</div>
            <form onSubmit={formSubmit}>
        <label className="eventlabel">Title</label><br></br>
        <input type="text" onChange={e => setTitle(e.target.value)} required></input><br></br>
        <label className="eventlabel">Time</label><br></br>
        <input type="time" onChange={e => setTime(e.target.value)} required></input><br></br>
        <label className="eventlabel">Distance</label><br></br>
        <input type="number" onChange={e => setDistance(e.target.value)} required></input><br></br>
        <label className="eventlabel">Location</label><br></br>
        <input type="text" onChange={e => setLocation(e.target.value)} required></input><br></br>
        <button type="submit" className="button2 m-20">Create</button>
            </form>
        </div>
    )
}

export default CreateEventForm