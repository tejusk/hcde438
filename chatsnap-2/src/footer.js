import React, {useState} from 'react'

function Footer(props){
  const [text,setText] = useState('')
  
  return <footer className="footer">
    <input className="text-input" value={text} 
      onChange={e=> setText(e.target.value)}
      placeholder="Type your message here!"
      onKeyPress={e=> {
        if(e.key==='Enter' && text) {
          props.onSend(text)
          setText('')
        }
      }}
    />
    <button className="send-button" 
      onClick={()=> {
        if(text) {
          props.onSend(text)
          setText('')
        }
      }}>
      ↑
    </button>
  </footer>
}

export default Footer