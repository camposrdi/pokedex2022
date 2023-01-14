import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';


const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
     
  return (

    <>
   {
  ! isAuthenticated && (
    <>
      <button className='login' onClick={() => loginWithRedirect()}>Log In</button>
        <div className='container'>
        <h1 className='logintitulo'> Welcome my Pokédex </h1>
      </div>
      </>
        )
   }
  

    </>
  )
}

export default Login