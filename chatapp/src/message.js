import React from 'react'

function Message(props) {
    return (
        <div className="msg">
            <div className="msg-bubble">
                {props.text}
            </div>
        </div>
    )
}

export default Message
