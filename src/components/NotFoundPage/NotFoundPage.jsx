import React from 'react'
import notFoundPage from '../../assets/images/NotFoundPage.jpg'
import { Link } from 'react-router-dom'


export default function NotFoundPage() {
  return (
    <div className='not-Found d-flex justfiy-content-center align-items-center w-100 h-100'>
      <img className='not-Found-img w-100' src={notFoundPage} alt="" />
      <div className='not-found-btn btn btn-primary btn-lg rounded-pill'>
      <Link className="nav-link" to="home">GO TO HOMEPAGE</Link>
        
      </div>
    </div>
  )
}
