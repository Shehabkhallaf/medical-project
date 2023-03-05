import React from 'react';
import Joi from 'joi';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login(props) {
  let navigate = useNavigate() ;
  const [isLoading ,setIsLoading] = useState(false)
  const [errorList ,setErrorList] = useState([])
  const [user ,setUser] = useState({
      email: '' ,
      password: '',
  })

  function getUser(e){
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value ;
    setUser(myUser);
  }
  function submitLogin(e){
    e.preventDefault();
    setIsLoading(true)
    let validateResult = validateLoginForm(user);
    if(validateResult.error)
    {
      setIsLoading(false)
      setErrorList(validateResult.error.details)
      console.log(errorList)
    }
    else {
      localStorage.setItem('user', JSON.stringify(user))
      props.getUserData()
      setIsLoading(false)
      navigate('/home')
    }
  }
  
  function validateLoginForm(user){
    let schema = Joi.object({
      email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    return schema.validate(user,{abortEarly:false});
  }
  

  return (
    <div className='container mt-5 pt-5'>
      <h2 className='my-3'>Login Form</h2>
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
      <form className='py-4' onSubmit={submitLogin}>
        <label htmlFor="email">Email</label>
        <input onChange={getUser} type="email" className='form-control my-3' name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input onChange={getUser} type="password" className='form-control my-3' name='password' id='password' />
        <button className='btn btn-outline-info'>
          {isLoading? <i className='fas fa-spinner fa-span'></i>: 'Login Now'}
        </button>
      </form>
    </div>
  )
}
