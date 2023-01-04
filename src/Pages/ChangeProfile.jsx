import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const ChangeProfile = () => {
    const {setUser} = useContext(AppContext);
    const [newuser, setNew] = useState("");

  return (
    <div>
      <input onChange={(event) => setNew(event.target.value)} />
      <button onClick={() => {setUser(newuser)}}>Change User</button>
      <h2>New User is : {newuser}</h2>
    </div>
  )
}

export default ChangeProfile
