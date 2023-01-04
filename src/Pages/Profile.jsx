import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import ChangeProfile from './ChangeProfile';

const Profile = () => {
    const {user} = useContext(AppContext);
  return (
    <div>
      <h2>This is Profile Page and The User is : {user}</h2>
      <ChangeProfile />
    </div>
  )
}

export default Profile
