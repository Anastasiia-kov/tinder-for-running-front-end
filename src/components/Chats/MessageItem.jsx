import React from 'react'
import '../../css/MessageItem.css'
import format from 'date-fns/format'

function MessageItem(props) {
    const {message} = props
    return(
        <div className="message-container">
            <div className="user-icon">U</div>
            <div className="message-body">
                <div className="message-date">{message.createdDate}</div>
                <div className="message-text">{message.body}</div>
            </div>
        </div>
    )
}

export default MessageItem