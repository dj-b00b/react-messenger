import React, {useState} from 'react';  
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatMessageForm from '../../components/ChatMessageForm/ChatMessageForm';
import Message from '../../components/Message/Message';
import './PageChat.scss';
import getMessagesFromLocalStorage from './index';  


export default function PageChat(props) {

    const [messages, setMessages] = useState ([  
        {id: 1, content: 'Привет, на какие матчи собираемся?', sending_time: '14:27', status: 'True', type: 'from'}, 
        {id: 2, content: 'Давай лучше на Аргентину-Голландию и Бразилию-Хорватию, чую будут топ матчи', sending_time: '14:32', status: '', type: 'to'}
    ])

    const createMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    }

    getMessagesFromLocalStorage(createMessage, messages);  
    return ( 
        <>
            <ChatHeader/>
            <div className='chat'>
                {messages.map(message =>    
                    <Message message={message} key={message.id}/>
                )}
            </div>
            <ChatMessageForm create={createMessage}/>
        </>
  );
}


