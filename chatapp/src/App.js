import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NamePicker from './namePicker'

function App() {
  useEffect(() => {
    const path = window.location.pathname
    if (path.length < 2) {
      window.location.pathname = '/home'
      /* Ensures that you're always in some room */
    }
  }, [])

  return <BrowserRouter>
    <Route path = "/:room" component = {Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  /* Keeps track of which room you're in */
  const{messages, send} = useDatu(room)
  /*const [messages, setMessages] = useState([]) /* Messages are an array! */
  
  return (
    <main className = "main">
      <header>
        <div style={{display:'flex',alignItems:'center'}}>
          {/*<img src="" alt="logo"/>*/}
          <span>Chat App</span>
        </div>
      </header>

      <div className = "messages">
        {messages.map((m, i) => <Message key = {i} text = {m.text} />)}
      </div>

      <Footer
        onSend={(text) => send({text, room})}
      />

    </main>
  );

}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyDgRMtSywf0auWMZOQGnJrOyygVdwQ_p4k",
  authDomain: "chatapp-tejusk.firebaseapp.com",
  databaseURL: "https://chatapp-tejusk.firebaseio.com",
  projectId: "chatapp-tejusk",
  storageBucket: "chatapp-tejusk.appspot.com",
  messagingSenderId: "970941836",
  appId: "1:970941836:web:4168c03bde2a69e14162a9"
};
initialize(firebaseConfig)