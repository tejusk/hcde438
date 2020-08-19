import React, {useEffect, useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'
import NamePicker from './namePicker'

function App() {
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2) window.location.pathname='/home'
  }, [])
  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  const [name,setName] = useState('')
  return (
    <main className="main">
  
      <header>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src="/gorrilla.jpg" alt="logo" />
          <span>Chat App</span>
        </div>
        <NamePicker saveName={setName} />
      </header>

      <div className="messages">
        {messages.map((m,i)=> {
          return <Message key={i} text={m.text} 
            name={m.name} isMe={m.name===name}
          />
        })}
      </div>

      <Footer
        onSend={text=> send({text, room, name})} 
      />

    </main>
  )
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyCM4MfokXnlCxEQcp96BcXk16-6Y5bTsfk",
  authDomain: "chatsnapppp.firebaseapp.com",
  databaseURL: "https://chatsnapppp.firebaseio.com",
  projectId: "chatsnapppp",
  storageBucket: "chatsnapppp.appspot.com",
  messagingSenderId: "324225124799",
  appId: "1:324225124799:web:21a0ca271a8efdf09e390a"
};
initialize(firebaseConfig)
