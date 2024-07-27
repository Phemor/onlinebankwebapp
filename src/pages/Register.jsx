import React, { useState }from 'react';
import '../App.css';
import NavigationButtons from '../components/NavigationButtons';

function Register() {
  const [selectedSchool, setSelectedSchool] = useState('');

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  return (
    <div>
      <NavigationButtons/>
    <div className="register-wrapper">
      <div className="register-container">
        <form action="#" className="register-form">
          <h1>Registration Form</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="column">
            <div className="input-box">
              <input type="number" placeholder="Phone Number" required />
            </div>
            <div className="input-box">
              <input type="date" placeholder="Date of Birth" required />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <input type="text" placeholder="Enter street address" required />
            <input type="text" placeholder="Enter your student ID" required />
            <div className="select-box">
            <select required onChange={handleSchoolChange}>
            <option hidden>Select your school</option>
            <option>Ghana Communication Technology University</option>
            <option>University of Ghana</option>
           </select>
          </div>

            <div className="select-container">
              <div className="column">
                <div className="select-box">
                  <select required>
                    <option hidden>Campus</option>
                    {selectedSchool === 'University of Ghana' ? (
                      <>
                      <option>Legon(main)</option>
                      <option>City</option>
                      </>
                    ):(
                      <>
                    <option>Abeka</option>
                    <option>Ho</option>
                    <option>Koforidua</option>
                    <option>Kumasi</option>
                    <option>Takoradi</option>
                    <option>Tesano(main)</option>
                    </>
                    )}
                  </select>
                </div>
              </div>
              <div className="column">
                <input type="text" placeholder="Enter your city" required />
                <input type="text" placeholder="Enter Digital code" required />
              </div>
            </div>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
