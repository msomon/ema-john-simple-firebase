import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
  const [user] = useAuthState(auth)
  const [name,setName]=useState('');
  const [emeil,setEmail]=useState('')
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
  const [error,setError]=useState('');
  
  const nameBlur=(event)=>{
    setName(event.target.value)
      }
      const addressBlur=(event)=>{
    setAddress(event.target.value)
      }
      const PhoneNumberBlur=(event)=>{
    setPhone(event.target.value)
      }

      const shippingInfo =event=>{
        event.preventDefault()
       const shipping= {name,address,phone}
       console.log(shipping);
      }
  return (
    <div className='container'>
      <div>
      <h2 className='title'>Shipping info </h2>
  <form onSubmit={shippingInfo}>
  <div className="input-group">
  <label htmlFor='name'>Name</label>
  <input onBlur={nameBlur} type="text" id="" required/>
  </div>
  <div className="input-group">
  <label htmlFor='email'>Email</label>
  <input value={user?.email} readOnly type="email" name='email' id="" required/>
  </div>
  <div className="input-group">
  <label htmlFor='address'>Address</label>
  <input onBlur={addressBlur} type="text" id="" required/>
  </div>
  <div className="input-group">
  <label htmlFor='PhoneNumber'>Phone Number</label>
  <input onBlur={PhoneNumberBlur} type="text" id="" required />
  </div>
  <p>{error}</p>
 
  <input  className='form-submit' type="submit" value="Add Shipping" />
  </form>

  </div>
    </div>
  );
};

export default Shipment;