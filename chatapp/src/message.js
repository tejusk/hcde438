import React from 'react'

function Message(props) {
    return <div className="msg" style={{
        flexDirection: props.isMe ? 'row' : 'row'
    }}>
        <div>
            <div className="msg-name">
            {props.name || "Unknown"}
            </div>
            <div className="msg-bubble">
                {props.text}
            </div>
        </div>  
    </div>
}

export default Message

