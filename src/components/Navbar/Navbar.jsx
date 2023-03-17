import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../assets/images/logo.jpg'


export default function Navbar(props) {

  return (
    <nav className="navbar f navbar-expand-lg fixed-top d-flex align-items-center header-transparent">
      <div className="container-fluid container d-flex justify-content-between align-items-center">
        {/* <img src={logo} alt="" /> */}
        <Link className="navbar-brand fw-bolder logo" to="home">MDFDD</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="home">Home</Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="doking-for">Doking</Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" to="contact-us">Contact Us</Link>
            </li>

          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">

            {/* {props.userData ? <> */}
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="register">Register</Link>
              </li>
            {/* </> :
              <> */}
                <li className="nav-item ms-auto">
                  <span onClick={props.logOut} className="nav-link cursor-pointer">Log Out</span>
                </li>
              {/* </>} */}



          </ul>
        </div>
      </div>
    </nav>
  )
}
