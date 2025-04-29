import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css'; 

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message || data.error);  

    if (response.ok) {
      navigate('/admin-dashboard'); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <input
            type="email"
            placeholder="Admin Email"
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
        <p>
          Not an admin?{' '}
          <span onClick={() => navigate('/')}>Go to User Login</span>
        </p>
      </div>

      <div className="illustration">
        <img src="/images/ecommerce-business.webp" alt="Admin Login Illustration" />
      </div>
    </div>
  );
}

export default AdminLogin;
