import React from 'react';  
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CommonHeader from '../CommonHeader/CommonHeader';
import TypicalHeader from '../TypicalHeader/TypicalHeader';


export default function ChatListHeader(props) {
    return (
            <TypicalHeader 
                    title={'Messenger'}
                    icon1={<MenuIcon sx={{ fontSize: 30 }}/>}
                    icon2={<SearchIcon sx={{ fontSize: 30 }}/>} 
            />
    );
  }


