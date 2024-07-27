import React from 'react';
import '../App.css';
import NavigationButtons from '../components/NavigationButtons';

function ForgotPassword() {
  return (
    <div>
         <NavigationButtons />
    <div className="forgot-password-wrapper">
      <div className="forgot-password-container">
        <form action="#" className="forgot-password-form">
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input type="email" placeholder="Enter your email" required />
            <input type="email" placeholder="Enter new password" required />
            <input type="email" placeholder="Enter confirm new password" required />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
