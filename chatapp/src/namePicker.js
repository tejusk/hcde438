import React, {useState, useEffect} from 'react'

function NamePicker() {
    const[editName, setEditName] = useState(false)
    const[name, setName] = useState('')
    return <div className = "name-picker">
        <input className ="name-input" 
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyPress = {e => {
                if(e.key === 'Enter' && name) {
                    props.onSend(name)
                    setName('')
                }
            }}
            placeholder="Name"
        />
    </div>
    
}

export default NamePicker