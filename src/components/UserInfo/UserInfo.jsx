import React from 'react';  
import './UserInfo.scss';

export default function UserInfo(props) {
    return ( 
        <div className="user_info">
          <div className="user_avatar">
            <img src={props.user.avatar} height="80px" />
            <div className="user-text">
                <h1 className="name">{props.user.name}</h1>
                <p className="latest_activity">{props.user.latest_activity}</p>
            </div>
          </div>
    </div>

  );
}
