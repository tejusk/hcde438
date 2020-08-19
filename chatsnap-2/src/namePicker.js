import React, {useState, useEffect} from 'react'
import {FiEdit,FiSave} from 'react-icons/fi'

function NamePicker(props){
  const [name,setName] = useState('')
  const [editing,setEditing] = useState(false)

  useEffect(()=>{
    const storedName = localStorage.getItem('name')
    if(storedName) {
      setName(storedName)
      props.saveName(storedName)
    }
  }, [])

  return <div className="name-picker">

    {editing && <>
      <input value={name} 
        onChange={e=> setName(e.target.value)}
      />
      <FiSave size={20} color="white" 
        onClick={()=> {
          setEditing(!editing)
          props.saveName(name)
          localStorage.setItem('name',name)
        }}
      />
    </>}

    {!editing && <>
      <span>{name}</span>
      <FiEdit size={20} color="white" 
        onClick={()=> setEditing(!editing)}
      />
    </>}

  </div>
}

export default NamePicker