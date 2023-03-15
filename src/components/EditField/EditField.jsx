import React from 'react'; 
import './EditField.scss';


export default function EditField(props) { 
    return ( 
        <>
            <div className='field'>
                <div className='title_field'>{props.field_name}</div>
                    <input className="user_info_edit" name="message-text" type="text" />
            </div>
            <div className='additional_info'>{props.add_info}</div>
        </>
  );
}