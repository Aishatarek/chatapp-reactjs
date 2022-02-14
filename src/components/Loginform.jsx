import React from 'react'
import {useState} from 'react';
import axios from 'axios'
const Loginform =() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const authObject = {'project-ID':"da2bcc87-a50e-46d3-8b2c-2d5b3ff9dbcf" , 'User-Name': username , 'User-Secret':password} 
 
  try {
   await axios.get('https://api.chatengine.io/chats',{headers:authObject})  ;
   localStorage.setItem('username', username);
   localStorage.setItem('password', password);
   window.location.reload();
   setError('');
  } catch (error) {
    setError('oops ,incorrect')
  }
  
    }
    return (
        <div className="wrapper">
            <div className="form" style={{textAlign: 'center'}}>
                <h1>chat app</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username" required/>
                    <input className="input" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" required/>
                      <div className="center"><button className="ce-primary-button" type="submit"><span>start chatting</span></button></div>
                <h2>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default Loginform
