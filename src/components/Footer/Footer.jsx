// import { Link } from 'react-router-dom'
import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="social">

        <span><i className="fa-brands fa-facebook"></i></span>
        <span><i className="fa-brands fa-square-twitter"></i></span>
        <span><i className="fa-solid fa-envelope-open-text"></i></span>
        <span><i className="fa-brands fa-google"></i></span>

    </div>
    <div className="">
        <p className=' copyrights'>Copy Right 2018 © By <span className='project-team p-3 fs-6'>Computer Sciense Team</span> All Rights Reserved</p>
    </div>

</div>
  )
}
