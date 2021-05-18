import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import {getUserById} from '../../lib/api'
import {Link} from 'react-router-dom'
import '../../css/ChatItem.css'
import {
    decodeToken
} from "react-jwt";

function ChatItem (props) {
    const auth = useAuth()
    const { chat } = props
    const [user, setUser] = useState('')
    const myDecodedToken = decodeToken(auth.token);
    const senderId = myDecodedToken.uid

    const getAccepter = async () => {
        let accepterId = '';
        if (senderId === chat.send_user_id) {
            accepterId = chat.accept_user_id
        }
        if (senderId !== chat.send_user_id) {
            accepterId = chat.send_user_id
        }
        const response = await getUserById (accepterId, auth.token)
        console.log(response.data)
        setUser(response.data)
    }

    let link = `/chat/${chat._id}`;

    useEffect(() => {
        console.log(chat._id)
        getAccepter()
    }, [])
    return (
        <Link 
        to={link} 
        className='link'>
            {/* <hr></hr> */}
        <div className="chat-container">
        <img src={user.picture} className="user-picture"></img>
        <div className="user-name">{user.first_name} {user.last_name}</div>
        {/* <div>{user.last_name}</div> */}
        </div>
        <hr className="line"></hr>
        </Link>
 
    )
}

export default ChatItem