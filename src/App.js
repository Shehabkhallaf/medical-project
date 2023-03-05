import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useNavigate ,Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import DokingFor from './components/DokingFor/DokingFor'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { useEffect, useState } from 'react';



function App() {
  const [userData, setUserData] =useState(null)
  let navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('user')){
      getUserData()
    }
  },{})
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
    function ProtectedRoute({childern}){
      if(!localStorage.getItem('user')){
        return <Navigate to='/login'/>
      }
      else{
        return childern ;
      }
    }
  return (
    <div>
      <Navbar userData={userData} logOut={logOut}/>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='about' element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path='contact-us' element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
          <Route path='doking-for' element={<ProtectedRoute><DokingFor /></ProtectedRoute>} />
          <Route path='login' element={<Login getUserData={getUserData}/>} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
