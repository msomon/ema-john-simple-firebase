import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [error,setError]=useState('');
  const [createUserWithEmailAndPassword ,user]= useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()
  
  const emailBlur=(event)=>{
setEmail(event.target.value)
  }
  const passwordBlur=(event)=>{
setPassword(event.target.value)
  }
  const confirmPasswordBlur=(event)=>{
setConfirmPassword(event.target.value)
  }
  if(user){
navigate('/shop')
  }

  const createUser=(event)=>{
    
    event.preventDefault();
if(password !== confirmPassword){
  setError("Your Two passs Did Not Match")
return 
}

if(password.length <6){
  setError('password must be 6 character')
  return
}
// console.log(email,password);
createUserWithEmailAndPassword(email,password)
.then(res=>{
const user = res.user
console.log(user);
})
.catch(error=>{
  console.log(error);
})
  }

  return (
    <div className='container'>
      <div>
      <h2 className='title'>SignUp </h2>
  <form onSubmit={createUser}>
  <div className="input-group">
  <label htmlFor='email'>Email</label>
  <input onBlur={emailBlur} type="email" id="" required/>
  </div>
  <div className="input-group">
  <label htmlFor='password'>Password</label>
  <input onBlur={passwordBlur} type="password" id="" required/>
  </div>
  <div className="input-group">
  <label htmlFor='confirmPassword'>Confirm Password</label>
  <input onBlur={confirmPasswordBlur} type="password" id="" required />
  </div>
  <p>{error}</p>
 
  <input  className='form-submit' type="submit" value="SignUp" />
  </form>
<p>Already Have An Account ? <Link className='form-link' to='/login'>Login </Link></p>
  </div>
    </div>
  );
};

export default SignUp;