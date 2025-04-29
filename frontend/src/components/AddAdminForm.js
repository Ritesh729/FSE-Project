
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/AddAdminForm.css';
import './styles/Sidebar.css';

function AddAdminForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://fse-project.onrender.com/api/admin-features/add-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        alert('Admin added successfully');
        setFormData({ username: '', email: '', password: '' });

        
        navigate('/admin-dashboard');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
}

export default AddAdminForm;
