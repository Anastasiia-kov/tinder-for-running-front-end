import React, {useState} from 'react'
import '../../css/NewMessageForm.css'
import { useAuth } from '../../context/AuthContext'

function NewMessageForm (props) {
    const auth = useAuth()
    const [text, setText] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const newMessage = {
            id: Date.now(),
            body: text,
            createdDate: Date.now(),
            userId: auth.id
        }
        props.onNewMessage(newMessage)
        setText('')
    }
    return (
        <form className="message-form" onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            className="message-input" 
            placeholder="Type your message here"
            value={text}
            onChange={e => setText(e.target.value)}></input>
            <button type="submit" className='message-button'></button>
        </form>
    )
}

export default NewMessageForm