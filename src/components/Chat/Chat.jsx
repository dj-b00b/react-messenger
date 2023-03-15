import React from 'react';  
import './Chat.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Chat(props) {
    let style = props.chat.message_readed === 'False' ? 'unread_messages' : 'material-icons' 

    return (
        <div className="block_chat"> 
            <div className="chats_user_info">
            <div className="chats_user_avatar">
                <img src={props.chat.avatar} height="80px" />
            </div>
            <div className="user_n_message">
                <p className="username">{props.chat.username}</p>
                <p className="chats_message">{props.chat.content_message}</p>
            </div>
        </div>
        <div className="chats_message_metadata">
            <p className="chats_message_time">{props.chat.message_time}</p>
            <div className="chats_message_status">
                <span className={style}>{props.chat.message_readed === 'True' ? <DoneAllIcon/> : props.chat.count_unread_messages}</span>
            </div>
        </div>
    </div>  
    );
  }
