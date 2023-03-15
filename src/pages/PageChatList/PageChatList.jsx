import React, {useState} from 'react';  
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader';
import Button from '../../components/Button/Button';
import Chat from '../../components/Chat/Chat';
import './PageChatList.scss';
import {Link} from "react-router-dom";
import axios from 'axios';

export default function PageChatList(props) {
    const [chats, setChats] = useState ([
        {id: 1, username: 'Рандом Рандомов', content_message: 'Я узнаю насчет твоего вопроса, перезвони мне завтра вечером.', avatar:'https://cdn-icons-png.flaticon.com/512/2202/2202112.png', message_time: '16:47', message_readed: 'False', count_unread_messages: 24},
        {id: 2, username: 'Язык Джаваскриптов', content_message: 'Погнали в бар вечером?', avatar:'https://cdn-icons-png.flaticon.com/512/4333/4333609.png', message_time: '17:01', message_readed: 'True', count_unread_messages: 24}
    ])

    async function fetchChats () {
        let response = await axios.get('http://127.0.0.1:8000/chats/api/v1.0/1/')

    }


    return ( 
        <>
            <ChatListHeader />
            <div className='chats'>
                {chats.map(chat =>    
                    <Link to="/chat/1/" style={{ textDecoration: 'none', color: 'black' }}>
                        <Chat 
                        chat={chat} key={chat.id}/>
                    </Link>
                )}
            <button onClick={fetchChats}>Получить список чатов </button>
     
            </div>
            <Button />
        </>

  );
}


