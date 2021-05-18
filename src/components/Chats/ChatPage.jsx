import React, {useEffect, useState, useInterval} from 'react'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'
import '../../css/Chat.css'
import { useAuth } from '../../context/AuthContext'
import {getChatById} from '../../lib/chat'
import { withRouter } from 'react-router-dom';

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

function ChatPage(props) {
    const auth = useAuth()
    const [messages, setMessages] = useState([])
    // const chatId = "609e868df0baa3c45be3b239"
    const { match: { params } } = props;

    const getChat = async () => {
        const response = await getChatById(params.chatId, auth.token)
        console.log(response.data.posts)
        setMessages(response.data.posts)
    }

    useEffect(() => {
        let id = setInterval(() => {
          getChat();
        }, 5000);
        return () => clearInterval(id);
      });

    useEffect(() => {
        getChat()
        console.log(params.chatId)
    }, [])

    const handleonNewMessage = (post) => {
        console.log(post)
        getChat()
    }
    return(
        <div className="chat">
            <MessagesList messages={messages}/>
            <NewMessageForm 
            onNewMessage={handleonNewMessage}
            chatId={params.chatId}></NewMessageForm>
        </div>
    )
}


export default withRouter(ChatPage)