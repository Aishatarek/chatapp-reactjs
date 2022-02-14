import React from 'react'
import ChatFeed from "./components/ChatFeed";
import Loginform from "./components/Loginform"
import {ChatEngine } from 'react-chat-engine';
import './App.css';

const App =()=> {
  if(!localStorage.getItem('username'))return <Loginform />

  return (
    <ChatEngine 
    height="100vh"
    projectID="da2bcc87-a50e-46d3-8b2c-2d5b3ff9dbcf"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
      
   
  );
}

export default App

