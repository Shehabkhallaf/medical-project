import React from 'react';
import Joi from 'joi';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Rigester() {
  let navigate = useNavigate() ;

  const [isLoading ,setIsLoading] = useState(false)
  const [errorList ,setErrorList] = useState([])
  const [user ,setUser] = useState({
       firstName: '' ,
      lastName: '' ,
      agy: '' ,
      email: '' ,
      password: '',
  })

  function getUser(e){
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value ;
    setUser(myUser);
  }
  function submitRegister(e){
    e.preventDefault();
    setIsLoading(true)
    let validateResult = validateRegisterForm(user);
    if(validateResult.error)
    {
      setIsLoading(false)
      setErrorList(validateResult.error.details)
      console.log(errorList)
    }
    else {
      setIsLoading(false)
      localStorage.setItem("user",JSON.stringify(user));
      navigate('/login')
    }
  }
  function validateRegisterForm(user){
    let schema = Joi.object({
      firstName : Joi.string().alphanum().min(3).max(30).required(),
      lastName : Joi.string().alphanum().min(3).max(30).required(),
      agy : Joi.number().min(16).max(80).required(),
      email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    return schema.validate(user,{abortEarly:false});
  }

  return (
    <div className=' form container mt-5 pt-5'>
      <h2 className='my-3'>Register Form</h2>
      {errorList.map((error ,index) => {
        if(index === 4)
        {
          return <div key={index} className='alert alert-danger'>"password" invalid</div>
        }
        else{
          return <div key={index} className='alert alert-danger'>{error.message}</div>
        }   
        }
      )}
      <form className='py-4' onSubmit={submitRegister}>
        <label htmlFor="firstName">First Name</label>
        <input onChange={getUser} type="text" className='form-control my-3' name='firstName' id='firstName' /> 

        <label htmlFor="lastName">Last Name</label>
        <input onChange={getUser} type="text" className='form-control my-3' name='lastName' id='lastName' />

        <label htmlFor="agy">Agy</label>
        <input onChange={getUser} type="number" className='form-control my-3' name='agy' id='agy' />

        <label htmlFor="email">Email</label>
        <input onChange={getUser} type="email" className='form-control my-3' name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input onChange={getUser} type="password" className='form-control my-3' name='password' id='password' />
        <button className='btn btn-outline-info'>
          {isLoading? <i className='fas fa-spinner fa-span'></i>: 'Register Now'}
        </button>
      </form>
    </div>
  )
}
