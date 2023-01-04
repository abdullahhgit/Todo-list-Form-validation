import React from 'react'
import { useState, useEffect } from 'react'

const Text = () => {
    const [newText, setNewText] = useState("");

    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Unmounted");
        }
    }, []); 

    const show = (event) => {
        setNewText(event.target.value);
    }

  return (
    <div>
      <input onChange={show}/>
      <div>
        <h2>{newText}</h2>
      </div>
    </div>
  )
}

export default Text
