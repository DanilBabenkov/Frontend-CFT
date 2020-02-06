import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default function SignOut() {
  let token = localStorage.getItem('token');
  let user_id = localStorage.getItem('user_id');

  axios.post('/logout/',{
    id: user_id,
    token
  })
  
  localStorage.removeItem('token');
  return (
    <Redirect to="/" />
  );
}