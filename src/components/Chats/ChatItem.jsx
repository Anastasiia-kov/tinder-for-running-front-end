import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import {getUserById} from '../../lib/api'
import {Link} from 'react-router-dom'
import '../../css/ChatItem.css'

function ChatItem (props) {
    const auth = useAuth()
    const { chat } = props
    const [user, setUser] = useState('')

    const getAccepter = async () => {
        const response = await getUserById (chat.accept_user_id, auth.token)
        console.log(response.data)
        setUser(response.data)
    }

    useEffect(() => {
        getAccepter()
    }, [])
    return (
        <Link to='/chat'>
            {/* <hr></hr> */}
        <div className="chat-container">
        <img src={user.picture} className="user-picture"></img>
        <div>{user.first_name}</div>
        <div>{user.last_name}</div>
        </div>
        <hr></hr>
        </Link>
 
    )
}

export default ChatItem