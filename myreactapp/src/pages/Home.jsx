import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { FaUser, FaLock  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="login-form">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required/>
          <FaUser className='icon'/>
          </div>
          <div className="input-box">
          <input type="password" placeholder='Password' required/>
          <FaLock className="icon" />
          </div>
          <div className="checkbox-container">
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot Password?</a>
          </div>
          <Link to="/welcome">
          <button type="submit">Login</button>
          </Link>
          <div className="register-link">
            <p>Don't Have An Account? <Link to="/register">Register</Link></p>
          </div>
     </form>
      </div>
      </div>
  )
}

export default Home;