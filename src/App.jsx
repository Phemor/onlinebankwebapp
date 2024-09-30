import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Services from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Payment from './pages/Payment.jsx';
import Confirmation from './pages/Confirmation.jsx';
import Welcome from './pages/Welcome.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import AccountHistory from './components/AccountHistory.jsx';
import UserProfile from './components/UserProfile.jsx';
function App() {
  return (
    <>
      <Navbar />

      <div className="appcontainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/account-history" element={<AccountHistory />} /> 
          <Route path="/user-profile" element={<UserProfile/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
