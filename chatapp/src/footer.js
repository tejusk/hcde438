import React, {useState} from 'react'

function Footer(props) {
    const [text, setText] = useState('')
    return <footer className="footer">
        <input className="text-input" 
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyPress = {e => {
                if(e.key === 'Enter') {
                    props.onSend(text)
                    setText('')
                }
            }}
            placeholder="Type your message here!"
        />
        <button className="send-button"
            onClick={()=> {
                props.onSend(text) /* Send message */
                setText('') /* Set input back to empty */
            }}>
            ↑
        </button>
    </footer>
}

export default Footer