import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Login.css'
import auth from '../../firebase.init';


const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [
    signInWithEmailAndPassword,user,error
    ] = useSignInWithEmailAndPassword(auth);
    const navigate =useNavigate();
    const location =useLocation();
    const from = location.state?.from.pathname ||'/';

  const emailBlur=(event)=>{
    setEmail(event.target.value)
      }
      const passwordBlur=(event)=>{
    setPassword(event.target.value)
      }

      if(user){
   navigate (from,{replace:true})
      }

      const userSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)
      
      }
  
  return (
    <div className='container'>
      <div>
      <h2 className='title'>Login </h2>
  <form onSubmit={userSignIn}>
  <div className="input-group">
  <label htmlFor='email'>Email</label>
  <input onBlur={emailBlur} type="email" id="" required />
  </div>
  <div className="input-group">
  <label htmlFor='password'>Password</label>
  <input onBlur={passwordBlur} type="password" id=""required />
  </div>
  <p>{error?.message}</p>
  <input className='form-submit' type="submit" value="login" />
  </form>
<p>New To Ema-John ? <Link className='form-link' to='/signup'>Create An Account </Link></p>
  </div>
    </div>
  );
};

export default Login;