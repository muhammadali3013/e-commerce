import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = () => {

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    localStorage.setItem('islogin', true);
    
    
    setEmail('');
    setPassword('');
    setError('');
    navigate('/Products');
  };

  return (
    <div>
      <h1>login page</h1>

      <form>
        <div className="container main-box">
          <div className="form-group mt-5">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
