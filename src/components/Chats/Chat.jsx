import React, {useState} from 'react'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'
import '../../css/Chat.css'

const users = [
    { userId: 123, name: 'Jane'},
    { userId: 124, name: 'Bob'},
    { userId: 125, name: 'Sam'},
    { userId: 126, name: 'Drake'}
]

const chats = [
    { id: 1, body: 'hi there', createdDate: Date.now(), userId: 123},
    { id: 2, body: 'hi for you too', createdDate: Date.now(), userId: 124},
    { id: 3, body: 'how are you?', createdDate: Date.now(), userId: 125},
    { id: 4, body: 'goodsdfsfsdkfhbsdkhf', createdDate: Date.now(), userId: 126}
]

function Chat() {
    const [messages, setMessages] = useState(chats)

    const handleonNewMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage])
    }
    return(
        <div className="chat">
            <MessagesList messages={messages}/>
            <NewMessageForm onNewMessage={handleonNewMessage}></NewMessageForm>
        </div>
    )
}

export default Chat