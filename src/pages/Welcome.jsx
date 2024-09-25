import React, { useState } from 'react';
import { FaUser, FaHistory, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="welcome-page">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <ul>
          <li>
            <Link to="/user-profile">
            <FaUser />
            <span className="icon-text">My Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/account-history">
              <FaHistory />
              <span className="icon-text">Account History</span>
            </Link>
          </li>
          <li>
            <FaSignOutAlt />
            <span className="icon-text">Logout</span>
          </li>
        </ul>
      </aside>

      <div className="content">
        <header className="welcome-header">
          <h1>Welcome to GCTU Fee Payment Portal</h1>
        </header>
        <main className="welcome-content">
          <p>Pay your tuition fees securely and conveniently online.</p>
          <Link to="/payment">
            <button className="welcome-button">Proceed To Payment</button>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Welcome;
