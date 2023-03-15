import './App.css';
import React, { Component } from 'react';  
import PageChatList from './pages/PageChatList/PageChatList';  
import PageChat from './pages/PageChat/PageChat';
import PageProfile from './pages/PageProfile/PageProfile';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
             <BrowserRouter>  
                <Routes>
                    <Route path="/chats/" element={<PageChatList />}/>
                    <Route path='/chat/1/' element={<PageChat />}/>
                    <Route path='/user/1/edit/' element={<PageProfile />} />
                </Routes> 
             </BrowserRouter>
        );
    }
 }
 export default App;


