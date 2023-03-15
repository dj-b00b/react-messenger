import React from 'react';  
import './ChatHeader.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserInfo from '../UserInfo/UserInfo';
import CommonHeader from '../CommonHeader/CommonHeader';
import {Link} from "react-router-dom";


export default function ChatHeader(props) {
    return (
        <CommonHeader>
            <div className="arrow_back">
                <Link to="/chats/">
                    <ArrowBackIcon sx={{ fontSize: 30 }}/>
                </Link>
            </div>

            <UserInfo
                user={{avatar: 'https://cdn-icons-png.flaticon.com/512/706/706831.png', name: 'Дженнифер', latest_activity: 'была 2 часа назад'}}/>
         
            <div className="more_buttons">
                <div className="search-chat">
                    <SearchIcon sx={{ fontSize: 30 }}/>
                </div>

                <div className='menu-chat'>
                    <MoreVertIcon sx={{ fontSize: 30 }}/>
                </div>
            </div>
        </CommonHeader >

    );
  }