import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        'https://revanth-9804a-default-rtdb.firebaseio.com/register.json'
      );

      // Check if the email exists in the database
      const users = response.data;
      const userExists = Object.values(users || {}).some(
        (user) => user.email === email && user.password === password
      );

      if (userExists) {
        alert('Login successful!');
        navigate('/'); // Redirect to the home page or dashboard
      } else {
        alert('Email not found. Please register.');
        navigate('/register');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='revanth'>
      <div className="content">
        <div className="text">Login</div>
        <form onSubmit={onSubmit}>
          <div className="field">
            <input
              required
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone"
            />
            <span className="span">
              <svg
                style={{ enableBackground: 'new 0 0 512 512' }}
                viewBox="0 0 512 512"
                y="0"
                x="0"
                height="20"
                width="50"
              >
                <g>
                  <path
                    fill="#595959"
                    d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                  ></path>
                </g>
              </svg>
            </span>
            <label className="label"></label>
          </div>
          <div className="field">
            <input
              required
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span className="span">
              <svg
                style={{ enableBackground: 'new 0 0 512 512' }}
                viewBox="0 0 512 512"
                y="0"
                x="0"
                height="20"
                width="50"
              >
                <g>
                  <path
                    fill="#595959"
                    d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                  ></path>
                </g>
              </svg>
            </span>
            <label className="label"></label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="button">Sign in</button>
          <div className="sign-up">
            Not a member? <Link to="/register">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
