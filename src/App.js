import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import DokingFor from './components/DokingFor/DokingFor'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'

import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { useEffect, useState } from 'react';



function App() {
  const [userData, setUserData] =useState(null)
  let navigate = useNavigate()

    function getUserData(){
      setUserData(localStorage.getItem('user'))   
    }
    useEffect(()=>{
    },[userData])

    function logOut(){
      localStorage.removeItem('user')
      setUserData(null)
      navigate('/login')
    }
  return (
    <div>
      <Navbar userData={userData} logOut={logOut}/>
      <div id='container min-container-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='doking-for' element={<DokingFor />} />
          <Route path='login' element={<Login getUserData={getUserData}/>} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer id='footer'/>
      </div>
    </div>
  );
}

export default App;
