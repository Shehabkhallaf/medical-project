import './App.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import DokingFor from './components/DokingFor/DokingFor'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'



function App() {
  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='doking-for' element={<DokingFor />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
