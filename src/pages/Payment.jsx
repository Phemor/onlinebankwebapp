import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import NavigationButtons from '../components/NavigationButtons';

function Payment() {
  const [studentId, setStudentId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [network, setNetwork] = useState('');
  const [amount, setAmount] = useState('');
  const [otherCharges, setOtherCharges] = useState('');
  const navigate = useNavigate();

  const handlePayment = async (event) => {
    event.preventDefault();

    // Validate student ID
    if (studentId.length > 10) {
      alert('Student ID cannot exceed 10 digits');
      return;
    }

    // Validate Phone Number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
    if (cleanedPhoneNumber.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    

    // Validate Other Charges
    if (otherCharges !== '105' && otherCharges !== '210') {
      alert('Other Charges must be either 105 or 210.');
      return;
    }

  };

  return (
    <div>
      <NavigationButtons />
      <div className="payment-container">
        <h1>Payment Page</h1>
        <form onSubmit={handlePayment}>
          <div className="input-box">
            <input
              id="studentId"
              className="input-field"
              type="number"
              placeholder="Student ID Number"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              maxLength={10}
              required
            />
          </div>
          
          <div className="input-box">
            <input
              id="phoneNumber"
              className="input-field"
              type="text"
              placeholder="Mobile Money Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          
          <div className="input-box">
            <select
              id="network"
              className="input-field"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              required
            >
              <option value="" disabled>Select Network</option>
              <option value="MTN">MTN</option>
              <option value="Telecel">Telecel</option>
            </select>
          </div>
          
          <div className="input-box">
            <input
              id="amount"
              className="input-field"
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              max="9999"
              required
            />
          </div>

          <div className="input-box">
            <input
              id="otherCharges"
              className="input-field"
              type="number"
              placeholder="Other Charges"
              value={otherCharges}
              onChange={(e) => setOtherCharges(e.target.value)}
              max="999"
              required
            />
          </div>
          
          <button type="submit" className="button">Submit Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
