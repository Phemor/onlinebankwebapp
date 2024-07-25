import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Welcome() {
  return (
    <div className="home-container">
      <h1>Welcome To GCT Bank</h1>
      <Link to="/payment">
        <button className="button">Pay</button>
      </Link>
    </div>
  )
}

export default Welcome;
