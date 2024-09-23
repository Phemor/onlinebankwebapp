import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import NavigationButtons from '../components/NavigationButtons';

function Register() {
  const [studentId, setStudentId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [campus, setCampus] = useState('');
  const [program, setProgram] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (
      !studentId ||
      !firstname ||
      !lastname ||
      !email ||
      !phoneNumber ||
      !dob ||
      !gender ||
      !campus ||
      !program ||
      !password ||
      !confirmPassword
    ) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  }

  return (
    <div>
      <NavigationButtons />
      <div className="register-wrapper">
        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h1>Registration</h1>
            {error && <p className="error">{error}</p>}
            <div className="input-box">
              <input type="text" placeholder="Firstname" required value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Lastname" required value={lastname} onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter Student ID" required value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            </div>
            <div className="gender-box">
              <h3>Gender</h3>
              <div className="gender-option">
                <div className="gender">
                  <input type="radio" id="check-male" name="gender" value="Male" required onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="check-male">Male</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-female" name="gender" value="Female" required onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="check-female">Female</label>
                </div>
                <div className="gender">
                  <input type="radio" id="check-other" name="gender" value="Prefer not to say" required onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="check-other">Prefer not to say</label>
                </div>
              </div>
            </div>
            <div className="input-box">
              <div className="column">
                <div className="input-box">
                  <input type="number" placeholder="Phone Number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="date" placeholder="Date of Birth" required value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
              </div>
              <div className="select-container">
                <div className="column">
                  <div className="select-box">
                    <select required value={campus} onChange={(e) => setCampus(e.target.value)}>
                      <option hidden>Campus</option>
                      <option>Abeka</option>
                      <option>Ho</option>
                      <option>Koforidua</option>
                      <option>Kumasi</option>
                      <option>Takoradi</option>
                      <option>Tesano (main)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="select-box">
                <select required value={program} onChange={handleProgramChange}>
                  <option hidden>Select your programme</option>
                  <option>BSc. Telecommunications Engineering</option>
                  <option>BSc. Computer Engineering</option>
                  <option>BSc. Mathematics</option>
                  <option>BSc. Electrical and Electronic Engineering</option>
                  <option>Diploma in Telecommunications Engineering</option>
                  <option>Diploma in Information Technology (2 Years)</option>
                  <option>BSc. Information Technology (4yrs/Top up)</option>
                  <option>BSc. Mobile Computing (4yrs/Top up)</option>
                  <option>BSc. Computer Science</option>
                  <option>BSc. Software Engineering</option>
                  <option>BSc. Information Systems</option>
                </select>
              </div>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
