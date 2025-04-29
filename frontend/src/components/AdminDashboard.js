

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [categoryCount, setCategoryCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0); 
  const [adminName, setAdminName] = useState('Admin');

  useEffect(() => {
    
    fetch('http://localhost:5000/api/categories/count')
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data); 
  
        
        if (data && data.count !== undefined) {
          setCategoryCount(data.count);
        } else {
          console.error('Category count is missing or malformed:', data);
        }
  
       
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);
  

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-wrapper">
          <div className="dashboard-header">
            <h2>Hi, {adminName}</h2>
          </div>

          <div className="dashboard-cards">
            <div className="card">
              <p>Total No. Of Categories :</p>
              <span>{categoryCount}</span>
            </div>
            <div className="card">
              <p>Total No. Of Orders :</p>
              <span>{orderCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
