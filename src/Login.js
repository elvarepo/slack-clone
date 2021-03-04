import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
  const [ ,dispatch] = useStateValue();
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((error) => {
        alert(error.message);
      })
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt='' />
        <h1>Sign in to Elva Coding Community</h1>
        <p>ElvaCodingCommunity.slack.com</p>
        <Button onClick={signIn}> Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login;
