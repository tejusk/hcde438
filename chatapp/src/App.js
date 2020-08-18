import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer'
import Message from './message'

function App() {
  const [messages, setMessages] = useState([])
  return (
    <main className = "main">
      <header>
        <img src="" alt="logo"/>
        <span>Chat App</span>
      </header>

      <div className = "messages">
        {messages.map((m, i) => <Message key = {i} text = {m} />)}
      </div>

      <Footer
        onSend={(text) => setMessages([...messages, text])}
      />

    </main>
  );

}


export default App;
