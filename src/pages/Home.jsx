import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaUser } from 'react-icons/fa';
import BackgroundSlider from '../components/BackgroundSlider';

function Home() {
  return (
    <div className="home-container">
      <BackgroundSlider className="container-style" />
      <div className="login-form">
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="mail" placeholder="Email" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <p>
                <Link to="/forgotpassword">Forgot Password?</Link>
              </p>
            </div>
            <Link to="/welcome">
              <button type="submit">Login</button>
            </Link>
            <div className="register-link">
              <p>
                Don't Have An Account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
