import React from 'react';  
import './Message.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';


export default function Message(props) {

    return ( 
        <div className={props.message.type === 'from' ? 'message message-right' : 'message message-left'}>
            <p className="message_text">{props.message.content}</p>
            <div className="message_metadata">
                <div className="sending_time">{props.message.sending_time}</div>
                <div className="status">
                <span className='material-icons'>{props.message.status === 'True' ? <DoneAllIcon sx={{ fontSize: 20 }}/> : ''}</span>
                </div>
        </div>
        </div>

    );
  }
  


