import React, {useState} from 'react';  
import './ChatMessageForm.scss';
import Message from '../../components/Message/Message';
import saveMessagesInLocalStorage from './index';
import AttachmentIcon from '@mui/icons-material/Attachment';

let lst_id = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

export default function ChatMessageForm({create}) {


    function handleSubmit(event) {
      event.preventDefault();
      const message = {
        'sending_time': new Date().toLocaleTimeString().slice(0, -3),
        'sender': 'not defined',
        'content': event.target[0].value,
        'type': 'from',
        'status': '',
        'id': lst_id.shift()
      };
      create(message);
      saveMessagesInLocalStorage(message);
      event.target.reset();
    }

    return (
        <div className="message_input">
            <form className="form" action="/" onSubmit={handleSubmit}>
            <input className="form-input" name="message-text" placeholder="Сообщение" type="text" />
            <div className="attachment">
                <AttachmentIcon sx={{ fontSize: 35 }}/>
            </div>
            </form>
        </div>
    );
  }