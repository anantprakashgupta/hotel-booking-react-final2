import React, { useState, setState } from 'react';
import '../signup.css';
function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
      setLastName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <div className="form1" id="signup">
      <div className="form-body1">
        <div className="username1">
          <label className="form__label1" for="firstName">
            First Name{' '}
          </label>
          <input
            className="form__input1"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname1">
          <label className="form__label1" for="lastName">
            Last Name{' '}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input1"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email1">
          <label className="form__label" for="email">
            Email{' '}
          </label>
          <input
            type="email"
            id="email"
            className="form__input1"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password1">
          <label className="form__label" for="password">
            Password{' '}
          </label>
          <input
            className="form__input1"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password1">
          <label className="form__label" for="confirmPassword">
            Confirm Password{' '}
          </label>
          <input
            className="form__input1"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
