import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

axios.defaults.baseURL = config.backend_host;

export default function SignOut() {
  let token = localStorage.getItem('token');
  let user_id = localStorage.getItem('user_id');

  axios.defaults.headers.common['Authorization'] = token;
  axios.post('/logout/',{
    id: user_id
  })
  
  localStorage.removeItem('token');
  return (
    <Redirect to="/" />
  );
}