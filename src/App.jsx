import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Services from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Payment from './pages/Payment.jsx';
import Confirmation from './pages/Confirmation.jsx';
import Welcome from './pages/Welcome.jsx';
import Register from './pages/Register.jsx';
import { Route, Routes } from 'react-router-dom';

function App(){
  return (
  <>
  <Navbar/>
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/confirmation" element={<Confirmation/>} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </div>
   </>
  )
}


export default App;
