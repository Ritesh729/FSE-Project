
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css'; 

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('https://fse-project.onrender.com/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
      navigate('/');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={() => navigate('/')}>Login</span>
        </p>
      </div>

      <div className="illustration">
        <img src="/images/ecommerce-business.webp" alt="Signup Illustration" />
      </div>
    </div>
  );
}

export default Signup;
