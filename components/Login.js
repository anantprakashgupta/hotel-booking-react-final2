import { useState, react } from 'react';
import React, { useState, useEffect } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import Confirmation from './Confirmation';
import '../Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [showError, setError] = useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem('authenticated') || false)
  );
  const users = [{ username: 'pk', password: '123' }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (username === '' || password === '') {
      setError(true);
      alert('field required');
      return;
      // } else if (!password) {
      //   setError(true);
      //   alert('Please Enter Password');
      //   return;
    } else if (username !== 'pk') {
      setError(true);
      alert('username not match');
      return;
    } else if (password !== '123') {
      setError(true);
      alert('password not match');
      return;
    }

    if (account && account.password === password) {
      localStorage.setItem('authenticated', true);
      navigate('/Confirmation');
    }
  };
  const call_register = () => {
    // setIsValidated(true);
    navigate('/register');
  };

  return (
    <div>
          
      <div class="container_login">
        <form class="form_login" onSubmit={handleSubmit}>
          <span id="login_heading">Login</span>
          <label for="email">User name</label>
          <input
            type="text"
            name="username"
            id="name"
            class="em_login"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="ps_login"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <span>Forgot Password</span>
          <button>Login</button>

          <p>
            <button onClick={call_register}>Sign Up Here...</button>
          </p>

          <div class="icons__login">
            <a href="https://www.facebook.com/" target="blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://mail.google.com/" target="blank">
              <i class="fab fa-google"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
