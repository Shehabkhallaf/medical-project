import React from 'react'
import logo from '../../assets/images/logo.jpg'

export default function ContactUs() {
  return (
    <div className='home d-flex justify-content-around align-items-center'>
      <div className='home-content'>
        <h2><span>Molecular</span> Doking For</h2>
        <h2>Durg Degisn</h2>
      </div>
      <div className='home-logo'>
        <img src={logo} className='w-100' alt="" />
      </div>
    </div>
  )
}
