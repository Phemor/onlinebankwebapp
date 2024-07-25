import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your App.css file

function Payment() {
  const [school, setSchool] = useState('');
  const [studentId, setStudentId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [network, setNetwork] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handlePayment = (event) => {
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

    const paymentSuccessful = true;
    if (paymentSuccessful) {
      navigate('/confirmation', { state: { success: true } });
    } else {
      navigate('/confirmation', { state: { success: false } });
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form onSubmit={handlePayment}>
        <div className="input-container">
          
          <select
            className="input-field"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          >
            <option value="">Select School</option>
            <option value="GCTU">Ghana Communication Technology University</option>
            <option value="UG">University Of Ghana</option>
          </select>
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            maxLength={10}
            required
            placeholder=" "
            />
            <label className="floating-label">Student ID Number:</label>
         </div>
        <div className="input-container">
          <input
            className="input-field"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}"
            required
            placeholder=" "
            />
            <label className="floating-label">Phone Number:</label>
        </div>
        <div className="input-container">
          <select
            className="input-field"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            required
          >
            <option value="">Select Network</option>
            <option value="MTN">MTN</option>
            <option value="Telecel">Telecel</option>
          </select>
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder=" "
          />
          <label className="floating-label">Amount:</label>
        </div>
        <button  className="button">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
