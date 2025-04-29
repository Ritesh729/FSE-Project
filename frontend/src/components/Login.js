import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('https://fse-project.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <div className="extra-links">
          <p>
            Don’t have an account?{' '}
            <span onClick={() => navigate('/signup')}>Sign up</span>
          </p>
          <p>
            <span onClick={() => navigate('/admin-login')} className="admin-link">
              Login as Admin
            </span>
          </p>
        </div>
      </div>

      <div className="illustration">
        <img src="/images/ecommerce-business.webp" alt="Login Illustration" />
      </div>
    </div>
  );
}

export default Login;
