import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css'; // Adjust the path to your CSS file if necessary
import NavigationButtons from '../components/NavigationButtons';

function Confirmation() {
  const location = useLocation();
  const { success, transaction } = location.state || {};

 

        <Link to="/welcome">
          <button className="confirmation-button">Go To Dashboard</button>
        </Link>
      
 }
 
export default Confirmation;
